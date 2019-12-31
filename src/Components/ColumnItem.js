import React from 'react';
import './ColumnItem.css';

const getPieceClass = (value) => {
	if (value === 1) {
		return 'grid-column-circle player1';
	} else if (value === 2) {
		return 'grid-column-circle player2';
	}

	return 'grid-column-circle';
}

const ColumnItem = (props) => {

	return (
	<div className="grid-column-item">
		<div
			className={getPieceClass(props.value)}
		>
		</div>
	</div>
);
}

export default ColumnItem;