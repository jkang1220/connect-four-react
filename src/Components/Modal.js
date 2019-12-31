import React from 'react';
import './Modal.css';

const Modal = (props) => {
	return (
		<div className="modal-backdrop">
			<div className="modal-content">
				{props.children}
			</div>
		</div>
);
}

export default Modal;