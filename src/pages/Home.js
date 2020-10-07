import React from 'react';
import { Button } from 'antd';

import './home.css';
import Loading from '../components/Loading';
import NewChampDrawer from '../components/NewChampDrawer';
import ChampCard from '../components/ChampCard';

class Home extends React.Component {

    state = {
        visible: false,
    }

    showDrawer = () => {
        this.setState({ visible: true });
    }

    hideDrawer = () => {
        this.setState({ visible: false });
    }

    renderChampionships(user) {
        
            return (
                <div id='champList'>
                    {!user.championships.length 
                        ? <p>Vous ne participez à aucun championnat pour le moment.</p>
                        : (
                            <div>
                                <h3>Mes championnats :</h3>
                                <div id='champ-list-part'>
                                    {user.championships.map(elem => {
                                        return <ChampCard key={elem._id} championship={elem} />
                                    })}
                                </div>
                            </div>

                        )
                    }
                </div>
            )
    }

    render() {

        const user = this.props.context.user;
        console.log(this.props)

        if (user) {
            return (
                <div id='home'>
                    <h1>{`Bienvenue ${user.name}`}</h1>
                    <Button onClick={this.showDrawer} type='primary'>
                        Créer championnat
                    </Button>
                    {this.renderChampionships(user)}
                    <NewChampDrawer visible={this.state.visible} onClose={this.hideDrawer} />
                </div>
            );
        } else {
            return <Loading />
        }
  
        
    }
}

export default Home;