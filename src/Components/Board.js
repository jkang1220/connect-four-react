import React from 'react';
import Column from './Column';
import './Board.css';

const Board = ({ board, onColumnClick }) => {
    return (
        <div className="board">
            {board.map((column, i) => (
                <Column key={i} colIdx={i} column={column} onColumnClick={onColumnClick} />
            ))}
        </div>
    );
};

export default Board;
