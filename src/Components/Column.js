import React, { useState } from 'react';
import ColumnItem from './ColumnItem';
import styles from './Column.css';

const Column = (props) => {
	const { colIdx, columnValues } = props;
	const [rowIdx, setRowIdx] = useState(0);

	return (
		<div>
			<div className="grid-row"
				onClick={() => {
					props.onColumnClick(colIdx, rowIdx);
					const rowIndex = Math.min(rowIdx+1, 5);
					setRowIdx(rowIndex)
				}}
			>
				<ColumnItem value={columnValues[5]} rowIdx={5}/>
				<ColumnItem value={columnValues[4]} rowIdx={4}/>
				<ColumnItem value={columnValues[3]} rowIdx={3}/>
				<ColumnItem value={columnValues[2]} rowIdx={2}/>
				<ColumnItem value={columnValues[1]} rowIdx={1}/>
				<ColumnItem value={columnValues[0]} rowIdx={0}/>
			</div>
		</div>
	);
}

export default Column;