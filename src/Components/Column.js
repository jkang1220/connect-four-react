import React, { useState } from 'react';
import ColumnItem from './ColumnItem';
import './Column.css';

const Column = (props) => {
	const { colIdx, columnValues } = props;

	return (
		<div
			className="grid-row"
			onClick={() => props.onColumnClick(colIdx)}
		>
			<ColumnItem value={columnValues[5]} />
			<ColumnItem value={columnValues[4]} />
			<ColumnItem value={columnValues[3]} />
			<ColumnItem value={columnValues[2]} />
			<ColumnItem value={columnValues[1]} />
			<ColumnItem value={columnValues[0]} />
		</div>
	);
}

export default Column;