import React from 'react'
import './FifthColumn.css'
import { Button, Image } from 'react-bootstrap'
import { MdArrowOutward } from "react-icons/md";
import tradingobjectives from '../../Images/tradingobjectives.webp'


const FifthColumn = () => {
    return (
        <div className='fifth screen'>
            <div>
                <h3>Stay updated with our in depth trading rules.</h3>
                <summary>Trading Objectives are a key element to evaluate a trader's skills,
                    meeting the trading objectives
                    proves that the trader is disciplined and consistent.</summary>
                <Button className='bg-white text-dark blue-button '>
                    <MdArrowOutward className='icon' />
                    Trading Rules</Button>
            </div>
            <Image src={tradingobjectives} />
        </div>
    )
}

export default FifthColumn