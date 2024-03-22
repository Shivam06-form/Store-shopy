import React from 'react'
import { Image } from 'react-bootstrap'
import MainIcon from '../../Images/MainIcon.png'
import './SeventhColumn.css'
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

import { IoLogoInstagram } from "react-icons/io";


const SeventhColumn = () => {
    return (
        <div className='seven'>
            <div className='seven-content'>
                <div className='main-title'>
                    <Image src={MainIcon} width={35} height={50} />
                    <h4>
                        FUNDING PIPS
                    </h4>
                </div>
                <summary>
                    All content published and distributed by Funding Pips,
                    and its affiliates(collectively, the Company)
                    is to be treated as general information only. None of the information provided by the Company or contained herein is intended as investment advice, an offer or solicitation of an offer to buy or sell, or a recommendation, endorsement, or sponsorship of any security, company, or fund, Funding pips does not act as or conduct services as a broker. Funding pips does not act as or conduct services as a custodian. People who register for our programs do so at their own volition, Purchases of programs should not be considered deposits. All program fees are used for operation costs including, but not limited to, staff, technology and other business related expenses. Nothing contained herein is a solicitation or an offer to buy or sell futures, options, or forex. Past performance is not necessarily
                    indicative of future results. Applicable law to be under the laws of The United Arab Emirates.
                </summary>
                <div>

                    <s>
                        Please note that all accounts we provide to our clients are demo accounts in a simulated trading environment.
                    </s>
                    <br></br>
                    <s>
                        Restricted countries: United Arab Emirates and Vietnam
                    </s>
                </div>

                <div className='social-icon'>
                    <BiLogoDiscordAlt className='icon' color='rgb(24, 119, 242)' />
                    <FaFacebookF className='icon' color='rgb(24, 119, 242)' />
                    <IoLogoInstagram className='icon' color='purple' />
                    <FaYoutube className='icon' color='red' />
                    <FaTwitter className='icon' color='skyblue' />
                </div>
            </div>
            <div className='list'>
                <div className='list-container'>
                    <div className='list-item'>
                        <h4>Newsletter signup</h4>
                    </div>
                    <div className='list-item'>
                        <div className='email'>
                            <input type='email' placeholder='Enter Your Email' />
                            <BsArrowUpRightSquareFill color={"blue"} className='icon' />
                        </div>
                    </div>
                </div>

                <div className='list-container'>
                    <div className='list-item'>
                        <ul>
                            <li className='list-title'>LEGAL</li>
                            <li><a href='/'>Privacy Policy</a></li>
                            <li><a href='/'>Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className='list-item'>
                        <ul>
                            <li className='list-title'>USEFUL LINKS</li>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/'>FAQs</a></li>
                            <li><a href='/'>Trading Rules</a></li>
                            <li><a href='/'>Affiliate Program</a></li>
                            <li><a href='/'>Contact Us</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SeventhColumn