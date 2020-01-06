import React from 'react';
import './ColumnItem.css';

const getPlayerClass = value => {
    if (value === 1) {
        return 'player1';
    }
    if (value === 2) {
        return 'player2';
    }

    return '';
};

const ColumnItem = ({ value }) => (
    <div className="grid-column-item">
        <div className={`grid-column-circle ${getPlayerClass(value)}`}></div>
    </div>
);

export default ColumnItem;
