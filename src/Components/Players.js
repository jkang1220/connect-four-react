import React from 'react';
import styles from './Players.css';

const Players = () => (
<div className="players-bar">
	<div className="player">
		<div className="player-name">Player 1</div>
		<div className="player-avatar player1"></div>
	</div>
	<div className="player">
		<div className="player-name">Player 2</div>
		<div className="player-avatar player2"></div>
	</div>
</div>);

export default Players;