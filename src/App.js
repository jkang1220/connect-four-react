import React, { useState } from 'react';
import styles from './App.css';
import ActionBar from './Components/ActionBar';
import Board from './Components/Board';
import Modal from './Components/Modal';

const getNewBoard = () => [
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
	const newBoard = getNewBoard();
	const [board, setBoard] = useState(newBoard);
	const [currentPlayer, setCurrentPlayer] = useState(1);
	const [modalState, setModalState] = useState(true);

	const onColumnClick = (colIdx, rowIdx) => {
		const newBoard = getUpdatedBoard(board, currentPlayer, colIdx, rowIdx);
		const nextPlayer = getNextPlayer(currentPlayer);

		setBoard(newBoard);
		setCurrentPlayer(nextPlayer);
	}

	const startNewGame = () => {
		setBoard(newBoard);
		setModalState(false);
		setCurrentPlayer(1);
	}

	return (<div>
		<h1 className="title">Connect Four</h1>
		{ modalState ? <Modal>
				<button
					onClick={startNewGame}
					className="new-game-button"
				>
					Let's Play!
				</button>
			</Modal> : null}
					{ !modalState ?
					<ActionBar startNewGame={startNewGame}/> : null
			}
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