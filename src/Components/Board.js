import React from 'react';
import Column from './Column';
import './Board.css';

const Board = ({ board, onColumnClick }) => {
    return (
        <div className="board">
            <Column colIdx={0} column={board[0]} onColumnClick={onColumnClick} />
            <Column colIdx={1} column={board[1]} onColumnClick={onColumnClick} />
            <Column colIdx={2} column={board[2]} onColumnClick={onColumnClick} />
            <Column colIdx={3} column={board[3]} onColumnClick={onColumnClick} />
            <Column colIdx={4} column={board[4]} onColumnClick={onColumnClick} />
            <Column colIdx={5} column={board[5]} onColumnClick={onColumnClick} />
            <Column colIdx={6} column={board[6]} onColumnClick={onColumnClick} />
        </div>
    );
};

export default Board;
