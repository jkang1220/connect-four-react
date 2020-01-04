import React from 'react';
import './Button.css';

const Button = ({ onClick, text, ...props }) => (
    <button onClick={onClick} {...props}>
        {text}
    </button>
);

export default Button;
