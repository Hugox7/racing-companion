import React from 'react';
import { Link } from 'react-router-dom';

import './champCard.css';

const ChampCard = ({ championship }) => {
    return (
        <Link to={`/championnat/${championship._id}`}>
            <div id='champ-card'>
                <h2>{championship.name}</h2>
                <p>{championship.about}</p>
                <label>Catégorie :</label>
                <p>{championship.type}</p>
                <label>Jeu / simulateur :</label>
                <p>{championship.game}</p>
            </div>
        </Link>
        
    );
}

export default ChampCard;