import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {

    const { 
        title, 
        content, 
        buttons,
        onDismiss
    } = props;

    return ReactDOM.createPortal(
        <div 
            className="ui dimmer modals visible active"
            onClick={onDismiss}
        >
            <div 
                className="ui standard modal visible active"
                onClick={(evt) => evt.stopPropagation()}
            >
                <div className="header">{title}</div>
                <div className="content">{content}</div>
                <div className="actions">{buttons}</div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;