import React from 'react';
import ColumnItem from './ColumnItem';
import './Column.css';

const Column = ({ colIdx, column, onColumnClick }) => (
    <div className="grid-row" onClick={() => onColumnClick(colIdx)}>
        <ColumnItem value={column[5]} />
        <ColumnItem value={column[4]} />
        <ColumnItem value={column[3]} />
        <ColumnItem value={column[2]} />
        <ColumnItem value={column[1]} />
        <ColumnItem value={column[0]} />
    </div>
);

export default Column;
