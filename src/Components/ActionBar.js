import React from 'react';
import Player from './Player';
import styles from './Player.css';
import styles2 from './ActionBar.css';

const ActionBar = (props) => {

return (
<div className="action-bar">
	<Player name="Player 1" playerNumber="1" />
	<button
		onClick={props.startNewGame}
		className="new-game-button"
	>
		New Game
	</button>
	<Player name="Player 2" playerNumber="2" />
</div>
);
}

export default ActionBar;