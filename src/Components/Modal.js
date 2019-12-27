import React from 'react';
import styles from './Modal.css';

const Modal = (props) => {
	console.log(props.children);
	return (
		<div className="modal-backdrop">
			<div className="modal-content">
				{props.children}
			</div>
		</div>
);
}

export default Modal;