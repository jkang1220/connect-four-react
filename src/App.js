import React from 'react';
import styles from './App.css';
import Board from './Components/Board';
import Players from './Components/Players';

const App = () => {
	return (<div>
		<h1 className="title">Connect Four</h1>
		<div className="action-bar">
			<button className="new-game-button">New Game</button>
		</div>
		<Players />
		<Board />
	</div>)
}

//7 across
//6 across

//2 players


export default App;