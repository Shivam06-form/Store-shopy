import React from 'react'
import ReactDOM from 'react-dom';
import './Overlay.css'

const Overlay = ({ onClick, style, children }) => {
    const overlay = (document.getElementById('id'));

    return ReactDOM.createPortal(
        <div
            className="overlay"
            // onMouseEnter={onMouseEnter}
            onClick={onClick}
            style={style}
        >{children}</div>,
        overlay
    );

}

export default Overlay