import React from 'react';
import Row from './Row';
import styles from './Board.css';

const Board = () => (
	<div className="board">
		<Row />
		<Row />
		<Row />
		<Row />
		<Row />
		<Row />
	</div>
);

export default Board;