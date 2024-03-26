import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
import './Overlay.css'

const Overlay = ({ onClick, style, children, className }) => {
    const overlay = document.getElementById('id');

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <div
                    className={`overlay`}
                    // onMouseEnter={onMouseEnter}
                    onClick={onClick}
                    style={style}
                ></div>,
                overlay
            )}
            {ReactDOM.createPortal(
                <div className={`MODAL ${className}`}>
                    <div className="content">{children}</div>
                </div>,
                overlay
            )}
        </Fragment>)
}

export default Overlay