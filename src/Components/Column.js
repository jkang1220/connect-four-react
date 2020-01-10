import React from 'react';
import ColumnItem from './ColumnItem';
import './Column.css';

const Column = ({ colIdx, column, onColumnClick }) => (
    <div className="grid-row" onClick={() => onColumnClick(colIdx)}>
        {column.map((value, i) => (
            <ColumnItem key={i} value={value} />
        ))}
    </div>
);

export default Column;
