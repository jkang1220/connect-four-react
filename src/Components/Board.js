import React from 'react';
import Column from './Column';
import './Board.css';

const Board = ({ board, onColumnClick }) => {
    return (
        <div className="board">
            <Column
                colIdx={0}
                columnValues={board[0]}
                onColumnClick={onColumnClick}
            />
            <Column
                colIdx={1}
                columnValues={board[1]}
                onColumnClick={onColumnClick}
            />
            <Column
                colIdx={2}
                columnValues={board[2]}
                onColumnClick={onColumnClick}
            />
            <Column
                colIdx={3}
                columnValues={board[3]}
                onColumnClick={onColumnClick}
            />
            <Column
                colIdx={4}
                columnValues={board[4]}
                onColumnClick={onColumnClick}
            />
            <Column
                colIdx={5}
                columnValues={board[5]}
                onColumnClick={onColumnClick}
            />
            <Column
                colIdx={6}
                columnValues={board[6]}
                onColumnClick={onColumnClick}
            />
        </div>
    );
};

export default Board;
