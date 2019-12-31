import React from 'react';
import './TurnCard.css';

const playerNames = ['PLAYER 1', 'PLAYER 2'];
const TurnCard = ({ currentPlayer }) => {
    return (
        <div className="turn-card">
            <h3 className="turn-header">
                {playerNames[currentPlayer - 1]}'S TURN
            </h3>
            <div className={`player-piece player${currentPlayer}`}></div>
        </div>
    );
};

export default TurnCard;
