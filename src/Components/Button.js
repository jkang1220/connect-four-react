import React from 'react';
import styles from './Button.css';

const Button = ({ onClick, text, ...props }) => {

	return (
		<button
			onClick={onClick}
			{...props}
		>
			{text}
		</button>
);
}

export default Button;