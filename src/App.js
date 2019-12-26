import React, { useState } from 'react';
import styles from './App.css';
import Board from './Components/Board';
import Players from './Components/Players';

// 6 rows
// 7 columns
const initialState = [
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
];

const getNextPlayer = currentPlayer => currentPlayer === 1 ? 2 : 1;
const getUpdatedBoard = (board, currentPlayer, colIdx, rowIdx) => {
	const newBoard = board.slice();

	newBoard[colIdx][rowIdx] = currentPlayer;
	return newBoard;
};

const App = () => {
	const [board, setBoard] = useState(initialState);
	const [currentPlayer, setCurrentPlayer] = useState(1);

	const onColumnClick = (colIdx, rowIdx) => {
		const newBoard = getUpdatedBoard(board, currentPlayer, colIdx, rowIdx);
		const nextPlayer = getNextPlayer(currentPlayer);

		setBoard(newBoard);
		setCurrentPlayer(nextPlayer);
	}

	return (<div>
		<h1 className="title">Connect Four</h1>
		<div className="action-bar">
			<button
				onClick={() => setBoard(initialState)}
				className="new-game-button"
			>
				New Game
			</button>
		</div>
		<Players
			currentPlayer={currentPlayer}
		/>
		<Board
			board={board}
			onColumnClick={onColumnClick}
			currentPlayer={currentPlayer}
		/>
	</div>)
}

//7 across
//6 across

export default App;