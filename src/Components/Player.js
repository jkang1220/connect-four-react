import React from 'react';

const Player = ({ name, playerNumber }) => (
	<div className="player">
		<div className={`player-name player${playerNumber}`}>
			<span>{name}</span>
		</div>
	</div>);

export default Player;