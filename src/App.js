import React, { useState } from 'react';
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
import './App.css';

const App = () => {
    const newBoard = generateBoard(6, 7);
    const newColumns = getNewColumns();
    const [board, setBoard] = useState(newBoard);
    const [columnHeights, setColumnHeights] = useState(newColumns);
    const [player, setPlayer] = useState(1);
    const [winner, setWinner] = useState(false);

    const onColumnClick = colIdx => {
        const spacesLeftInColumn = columnHeights[colIdx] < 5;

        if (spacesLeftInColumn) {
            const getCurrentColumnHeight = columnHeights[colIdx];
            const newBoard = getUpdatedBoard(board, player, colIdx, getCurrentColumnHeight + 1);
            const nextPlayer = getNextPlayer(player);
            const newColumnHeights = getUpdatedColumnHeights(columnHeights, colIdx);
            const winningPlayer = getWinner(board);

            setBoard(newBoard);
            setColumnHeights(newColumnHeights);
            if (winningPlayer) {
                setWinner(true);
            } else {
                setPlayer(nextPlayer);
            }
        }
    };

    const startNewGame = () => {
        setWinner(false);
        setColumnHeights(newColumns);
        setBoard(newBoard);
        setPlayer(1);
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
                <TurnCard player={player} />
            </div>
            {winner ? (
                <Modal>
                    <h2 className="winner-modal-content">Player {player} Won!</h2>
                    <Button onClick={startNewGame} className="new-game-button" text="New Game" />
                </Modal>
            ) : null}
        </div>
    );
};

export default App;
