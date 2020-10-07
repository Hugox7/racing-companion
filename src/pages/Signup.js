import React from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './signup.css';
import * as authTypes from '../store/types/auth';

class Signup extends React.Component {

    handleFinish = (values) => {
        this.props.handleSignup(values);
    }

    renderError() {
        if (this.props.signup.error) {
            const error = this.props.signup.error.response.data.message;
            return <Alert message={error} type='error' />
        }
    }

    render() {

        const layout = {
            labelCol: {
              span: 24,
            },
            wrapperCol: {
              span: 24,
            },
          };

        return (
            <div id='signin'>
                <div id='signup-form'>
                    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Créez votre compte</h2>
                    {this.renderError()}
                    <Form
                        {...layout}
                        onFinish={this.handleFinish}
                    >

                        <Form.Item
                            label="Nom d'utilisateur"
                            name="name"
                            rules={[
                            {
                                required: true,
                                message: "Merci d'entrer votre nom d'utilisateur!",
                            },
                            {
                                min: 2,
                                message: "2 caractères minimum",
                            }
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Adresse email"
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    message: "L'adresse mail n'est pas valide"
                                },
                                {
                                    required: true,
                                    message: "Merci d'entrer votre adresse mail!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Mot de passe"
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: "Merci d'entrer votre mot de passe!",
                            },
                            {
                                min: 5,
                                message: "5 caractères minimum",
                            },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item>
                            <Button 
                                type="primary" 
                                htmlType="submit"
                                loading={this.props.signup.loading}
                            >
                                Inscription
                            </Button>
                        </Form.Item>

                    </Form>
                    <p style={{ textAlign: 'center' }}>
                        Vous avez déjà un compte ?<br /><Link to='/signin'>Cliquez ici pour vous connecter</Link>
                    </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    signup: state.auth.signup,
});

const mapDispatchToProps = (dispatch) => ({
    handleSignup: (data) => {
        dispatch({ type: authTypes.SIGNUP, data })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);