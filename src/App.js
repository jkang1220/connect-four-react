import React, { useState } from 'react';
import './App.css';
import TurnCard from './Components/TurnCard';
import Board from './Components/Board';
import Modal from './Components/Modal';
import Button from './Components/Button';
import {
    generateBoard,
    getNewColumns,
    getNextPlayer,
    getUpdatedBoard,
    getUpdatedColumnHeights,
    getWinner,
} from './utils';

const App = () => {
    const newBoard = generateBoard(6, 7);
    const newColumns = getNewColumns();
    const [board, setBoard] = useState(newBoard);
    const [columnHeights, setColumnHeights] = useState(newColumns);
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [winner, setWinner] = useState(false);

    const onColumnClick = colIdx => {
        const spacesLeftInColumn = columnHeights[colIdx] < 5;

        if (spacesLeftInColumn) {
            const getCurrentRowIdx = columnHeights[colIdx];
            const newBoard = getUpdatedBoard(board, currentPlayer, colIdx, getCurrentRowIdx + 1);
            const nextPlayer = getNextPlayer(currentPlayer);
            const newColumnHeights = getUpdatedColumnHeights(columnHeights, colIdx);
            const winningPlayer = getWinner(board);

            setBoard(newBoard);
            setColumnHeights(newColumnHeights);
            if (winningPlayer) {
                setWinner(true);
            } else {
                setCurrentPlayer(nextPlayer);
            }
        }
    };

    const startNewGame = () => {
        setWinner(false);
        setColumnHeights(newColumns);
        setBoard(newBoard);
        setCurrentPlayer(1);
    };

    return (
        <div>
            <h1 className="page-title">Connect Four</h1>
            <div className="page-action-bar">
                {!winner ? (
                    <Button onClick={startNewGame} className="new-game-button" text="New Game" />
                ) : null}
            </div>
            <div className="page-main-content">
                <Board board={board} onColumnClick={onColumnClick} />
                <TurnCard currentPlayer={currentPlayer} />
            </div>
            {winner ? (
                <Modal>
                    <h2 className="winner-modal-content">Player {currentPlayer} WON!</h2>
                    <Button onClick={startNewGame} className="new-game-button" text="New Game" />
                </Modal>
            ) : null}
        </div>
    );
};

export default App;
