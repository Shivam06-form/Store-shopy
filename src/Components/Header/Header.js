import React from 'react'
import './Header.css'
import { Button, Image } from 'react-bootstrap';
import { MdArrowOutward, MdOutlineMenu } from "react-icons/md";
import { BsBoxArrowUpRight, BsFillMoonFill } from "react-icons/bs";
import MainIcon from '../../Images/MainIcon.png'

const Header = ({ showHeader }) => {
    const HeaderItems = [
        {
            id: 1, name: "Home"
        },
        {
            id: 2, name: "Trading Rules"
        }
        ,
        {
            id: 3, name: "FAQ"
        }
        ,
        {
            id: 4, name: "Contact Us"
        }
    ]


    return (
        <div className={`header ${showHeader && "header-fixed"}`}>
            <div className='main-title'>
                <Image src={MainIcon} width={35} height={50} />
                <h4>
                    FUNDING PIPS
                </h4>
            </div>
            <ul>
                {HeaderItems.map((head, i) => {
                    return (
                        <li key={i}>{head.name}</li>
                    )
                })}
                <Button > <MdArrowOutward className='icon' /> BUY CHALLANGE</Button>
                <a href='*'>DASHBOARD <BsBoxArrowUpRight className='icon' /></a>
            </ul>
            <div className='theme header-icon'><BsFillMoonFill className='icon' /></div>
            <div className='hidden-icon'><MdOutlineMenu className='icon' /></div>
        </div>
    )
}

export default Header