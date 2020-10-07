import React from 'react';
import { Form, Input, Button, Alert, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as authTypes from '../store/types/auth';
import './signin.css';

class Signin extends React.Component {


    handleFinish = (values) => {
        this.props.handleLogin(values);
    }

    renderError() {
        if (this.props.context && this.props.context.loginError) {
            const error = this.props.context.loginError.response.data.message;
            return (
                <Alert message={error} type="error" />
            );
        } else {
            return null;
        }
    }

    render() {

        console.log(this.props);

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
                    <div id='form-container'>
                        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Racing Bro</h1>
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
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>Se souvenir de moi</Checkbox>
                            </Form.Item>
    
                            <Form.Item>
                                <Button 
                                    type="primary" 
                                    htmlType="submit"
                                    loading={this.props.context.loading}
                                >
                                    Connection
                                </Button>
                            </Form.Item>
    
                        </Form>
                        <p style={{ textAlign: 'center' }}>
                            Vous n'avez pas encore de compte ? <br /><Link to='/signup'>Créez votre compte ici</Link>
                        </p>
                    </div>
                </div>
            );
        
    }
}


const mapDispatchToProps = (dispatch) => ({
    handleLogin: (data) => {
        dispatch({ type: authTypes.LOGIN, data })
    }
})

export default connect(null, mapDispatchToProps)(Signin);