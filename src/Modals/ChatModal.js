import React from 'react'
import './ChatModal.css'
import { Card, CloseButton } from 'react-bootstrap'
import Overlay from '../Utlities/Overlay.jsx'
import { FaRegWindowMinimize } from "react-icons/fa";

const ChatModal = ({ setOpenChat, setShowHeader }) => {
    return (
        <Overlay
            className="chat-modal"
            style={{ background: "transparent" }} onClick={() => {
                setOpenChat(false)
                setShowHeader(true)
            }}>
            <div className='chat'>
                <div className='chat-content'>
                    <Card.Title style={{ width: "45%" }}>Chat Box</Card.Title>
                    <FaRegWindowMinimize className='icon-chat' color='grey'
                        onClick={() => {
                            setOpenChat(false)
                        }}
                    />
                    <CloseButton color='red'
                        onClick={() => {
                            setOpenChat(false)
                        }}
                    />
                </div>
                <div className='chat-text'>
                    <Card.Subtitle>
                        THIS IS A CHAT BOX
                    </Card.Subtitle>
                </div>
            </div>
        </Overlay>

    )
}

export default ChatModal