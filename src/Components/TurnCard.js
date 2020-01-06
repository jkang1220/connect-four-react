import React from 'react';
import './TurnCard.css';

const playerNames = ['PLAYER 1', 'PLAYER 2'];
const TurnCard = ({ player }) => {
    return (
        <div className="turn-card">
            <h3 className="turn-card-header">{playerNames[player - 1]}'S TURN</h3>
            <div className={`player-piece player${player}`}></div>
        </div>
    );
};

export default TurnCard;
