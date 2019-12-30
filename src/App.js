import React, { useState } from 'react';
import styles from './App.css';
import TurnCard from './Components/TurnCard';
import Board from './Components/Board';
import Modal from './Components/Modal';
import Button from './Components/Button';

const getNewBoard = () => [
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
];

const getNewColumns = () => [-1,-1,-1,-1,-1,-1,-1];
const getNextPlayer = currentPlayer => currentPlayer === 1 ? 2 : 1;
const getUpdatedBoard = (board, currentPlayer, colIdx, rowIdx) => {
	const newBoard = board.slice();

	newBoard[colIdx][rowIdx] = currentPlayer;
	return newBoard;
};

const getUpdatedColumnHeights = (columnHeights, colIdx) => {
	const newHeights = columnHeights.slice();

	newHeights[colIdx] = newHeights[colIdx] >= 5 ? 5 : newHeights[colIdx] + 1;
	return newHeights;
}

const getWinner = (board) => {
// 0: (6) [0, 0, 0, 0, 0, 0]
// 1: (6) [0, 0, 0, 0, 0, 0]
// 2: (6) [0, 0, 0, 0, 0, 0]
// 3: (6) [2, 2, 2, 0, 0, 0]
// 4: (6) [1, 1, 1, 1, 0, 0]
// 5: (6) [0, 0, 0, 0, 0, 0]
// 6: (6) [0, 0, 0, 0, 0, 0]

	//tie, player1 or player2
	//return 0, 1 or 2
	return null;
}

const App = () => {
	const newBoard = getNewBoard();
	const newColumns = getNewColumns();
	const [board, setBoard] = useState(newBoard);
	const [columnHeights, setColumnHeights] = useState(newColumns);
	const [currentPlayer, setCurrentPlayer] = useState(1);
	const [winner, setWinner] = useState(false);

	const onColumnClick = (colIdx) => {
		const spacesLeftInColumn = columnHeights[colIdx] < 5;

		if (spacesLeftInColumn) {
			const getCurrentRowIdx = columnHeights[colIdx];
			const newBoard = getUpdatedBoard(board, currentPlayer, colIdx, getCurrentRowIdx + 1);
			console.log(newBoard, 'newBoardz');
			const nextPlayer = getNextPlayer(currentPlayer);
			const newColumnHeights = getUpdatedColumnHeights(columnHeights, colIdx);
			const winningPlayer = getWinner(board);

			setBoard(newBoard);
			setColumnHeights(newColumnHeights);
			if (winningPlayer) {
				setWinner(true);
			} else {
				//get the winner here before toggling to the next player
				setCurrentPlayer(nextPlayer);
			}
		}
	}

	const startNewGame = () => {
		setWinner(false);
		setColumnHeights(newColumns);
		setBoard(newBoard);
		setCurrentPlayer(1);
	}

	return (<div>
		<h1 className="page-title">Connect Four</h1>
		<div className="page-action-bar">
			<Button
				onClick={startNewGame}
				className="new-game-button"
				text="New Game"
			/>
		</div>
		<div className="page-main-content">
			<Board
				board={board}
				onColumnClick={onColumnClick}
				currentPlayer={currentPlayer}
			/>
			<TurnCard
				currentPlayer={currentPlayer}
			/>
		</div>
		{winner ?
			<Modal>
					<h2 className="winner-modal-content">Player {currentPlayer} WON!!!!</h2>
					<Button
						onClick={startNewGame}
						className="new-game-button"
						text="New Game"
					/>
			</Modal> : null
		}
	</div>)
}

//7 across
//6 across

export default App;