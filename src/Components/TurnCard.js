import React from 'react';
import './TurnCard.css';

const playerNames = ['PLAYER 1', 'PLAYER 2'];
const TurnCard = props => {
    return (
        <div className="turn-card">
            <h3 className="turn-header">
                {playerNames[props.currentPlayer - 1]}'S TURN
            </h3>
            <div className={`player-piece player${props.currentPlayer}`}></div>
        </div>
    );
};

export default TurnCard;
