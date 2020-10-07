import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input } from 'antd';

import './championship.css';
import * as champTypes from '../store/types/championship';
import Loading from '../components/Loading';

class Championship extends React.Component {

    componentDidMount() {
        
        this.props.getChamp({
            userId: this.props.context.user._id,
            champId: this.props.match.params.champId,
        })
    }

    render() {
        const champ = this.props.champ
        if (this.props.champ.loading) {
            return <Loading />
        } else {
            return (
                <div id='champ'>
                    <h1>{champ.data.name}</h1>
                    <p>{champ.data.about}</p>
                    <div id='champ-info'>
                        <div id='champ-info-part'>
                            <div className='champ-info-plus'>
                                <label>Catégorie :</label>
                                <p>{champ.data.type}</p>
                            </div>
                            <div className='champ-info-plus'>
                                <label>Jeu / simulateur :</label>
                                <p>{champ.data.game}</p>
                            </div>
                        </div>
                        <div id='season-form'>
                            <Form layout='inline'>

                                <Form.Item
                                    label="Année"
                                    name="year"
                                    rules={[
                                    {
                                        required: true,
                                        message: "Merci d'entrer l'année",
                                    },
                                    {
                                        required: true,
                                        min: 4,
                                        message: 'Date non valide',
                                    },
                                    {
                                        required: true,
                                        pattern: new RegExp(/\d+/g),
                                        message: 'Date non valide',
                                    }
                                    ]}
                                >
                                    <Input />

                                </Form.Item>

                                <Form.Item
                                    label="Equipe"
                                    name="team"
                                    rules={[
                                    {
                                        required: true,
                                        message: "Merci d'entrer une équipe",
                                    },
                                    ]}
                                >
                                    <Input />

                                </Form.Item>

                                <Button type='primary'>Ajouter saison</Button>

                            </Form>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    champ: state.championship.championship,
});

const mapDispatchToProps = (dispatch) => ({
    getChamp: (data) => {
        dispatch({ type: champTypes.GET_CHAMPIONSHIP, data });
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Championship);