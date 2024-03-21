import React from 'react'
import { Image } from 'react-bootstrap'
import bloomberg from '../../Images/bloomberg.webp'
import yahoo_finance from '../../Images/yahoo_finance.webp'
import insider from '../../Images/insider.webp'
import hero2 from '../../Images/hero2.webp'
import './SecondColumn.css'

const SecondColumn = () => {
    return (
        <div className='second'>
            <div className='image-container'>
                <Image src={bloomberg} color={'grey'} />
                <Image src={insider} />
                <Image src={yahoo_finance} />
            </div>
            <div className='second-detials'>
                <Image src={hero2} />
                <div>
                    <h4>Built By Traders For Traders.
                        Your Trading Ideas, Our Risk.</h4>
                    <summary >
                        Funding Pips believes that traders go through three main levels in their careers,
                        Student - Practitioner - Master, with FP's in house-built two phases evaluation (Student - Practitioner) and funded (Master), which's built to find trading talents while helping them get
                        through their funding problems, by offering them the possibility to trade up $300.000.
                    </summary>
                </div>
            </div>
        </div>
    )
}

export default SecondColumn