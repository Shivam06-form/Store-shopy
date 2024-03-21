import React, { useState } from 'react'
import './FourthColumn.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Button } from 'react-bootstrap';
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const FourthColumn = () => {
    /////////Column one ////////////////
    const [openCl1, setOpenCl1] = useState([]);
    /////////Column two ////////////////
    const [openCl2, setOpenCl2] = useState([]);


    const list = [
        {
            id: 1, name: "Trading Period",
            cl1: "∞"
            , cl2: "∞",
            summery: `We believe in constant adaptability and development when it comes to trading, therefore we do not have a minimum or maximum limit on trading days.

            In order to reach your profit target, you may take all the time you need. Remember, there's no need for stress or to rush. Take your time and trade at your own pace.`
        },
        {
            id: 2, name: "Minimum Trading Days",
            cl1: "0 days"
            , cl2: "0 days",
            summery: `We believe in constant adaptability and development when it comes to trading, therefore we do not have a minimum or maximum limit on trading days.

            In order to reach your profit target, you may take all the time you need. Remember, there's no need for stress or to rush. Take your time and trade at your own pace.`
        },
        {
            id: 3, name: "Maximum Daily Loss",
            cl1: "5%"
            , cl2: "5%",
            summery: `We believe in constant adaptability and development when it comes to trading, therefore we do not have a minimum or maximum limit on trading days.

            In order to reach your profit target, you may take all the time you need. Remember, there's no need for stress or to rush. Take your time and trade at your own pace.`
        },
        {
            id: 3, name: "Maximum Loss",
            cl1: "10%"
            , cl2: "10%",
            summery: `We believe in constant adaptability and development when it comes to trading, therefore we do not have a minimum or maximum limit on trading days.

            In order to reach your profit target, you may take all the time you need. Remember, there's no need for stress or to rush. Take your time and trade at your own pace.`
        },
        {
            id: 4, name: "Profit Target",
            cl1: "8%"
            , cl2: "8%",
            summery: `We believe in constant adaptability and development when it comes to trading, therefore we do not have a minimum or maximum limit on trading days.

            In order to reach your profit target, you may take all the time you need. Remember, there's no need for stress or to rush. Take your time and trade at your own pace.`
        }
    ]

    const list2 = [
        {
            id: 1, name: "Trading Period", cl1: "∞",
            summery: `We believe in constant adaptability and development when it comes to trading, therefore we do not have a minimum or maximum limit on trading days.

        In order to reach your profit target, you may take all the time you need. Remember, there's no need for stress or to rush. Take your time and trade at your own pace.`
        },
        {
            id: 2, name: "Maximum Daily Loss", cl1: "5%",
            summery: `We believe in constant adaptability and development when it comes to trading, therefore we do not have a minimum or maximum limit on trading days.

        In order to reach your profit target, you may take all the time you need. Remember, there's no need for stress or to rush. Take your time and trade at your own pace.`
        },
        {
            id: 3, name: "Maximum Loss", cl1: "10%",
            summery: `We believe in constant adaptability and development when it comes to trading, therefore we do not have a minimum or maximum limit on trading days.

        In order to reach your profit target, you may take all the time you need. Remember, there's no need for stress or to rush. Take your time and trade at your own pace.`},
        {
            id: 4, name: "Profit Target", cl1: "10%",
            summery: `We believe in constant adaptability and development when it comes to trading, therefore we do not have a minimum or maximum limit on trading days.

        In order to reach your profit target, you may take all the time you need. Remember, there's no need for stress or to rush. Take your time and trade at your own pace.`
        },
        {
            id: 5, name: "Leverage", cl1: "1:100",
            summery: `We believe in constant adaptability and development when it comes to trading, therefore we do not have a minimum or maximum limit on trading days.

        In order to reach your profit target, you may take all the time you need. Remember, there's no need for stress or to rush. Take your time and trade at your own pace.`
        }
    ]


    const tradeData = [
        { id: 1, name: "MatchTrade" },
        { id: 2, name: "cTrader" }
    ]

    const priceData = [
        { id: 1, price: "5k" },
        { id: 2, price: "10k" },
        { id: 3, price: "25k" },
        { id: 4, price: "100k" }
    ]

    const [listOne, setListOne] = useState('MatchTrade');
    const [listTwo, setListTwo] = useState('5k');


    const RendertradeData = tradeData.map(({ id, name }) => {
        return (
            <div key={id} className={`list-items ${listOne === name && "list-items-selected"}`}
                onClick={() => {
                    setListOne(name)
                }}
            >{name}</div>
        )
    })
    const RenderPriceData = priceData.map(({ id, price }) => {
        return (
            <div className={`list-items ${listTwo === price && "list-items-selected"}`}
                key={id}
                onClick={() => {
                    setListTwo(price)
                }}
            >${price}</div>
        )
    })



    return (
        <div className='fourth'>
            <div className='list-1'>
                {RendertradeData}
            </div>
            <div className='list-2'>
                {RenderPriceData}
            </div>
            <div className='column-container'>
                <div className='column-one'>
                    <div className='column-title'>
                        <div className='divider'></div>
                        <h5> Evaluation stage </h5>
                        <div className='divider'></div>
                    </div>
                    <ul className='dropdown'>
                        <li className='dropdown-title'>
                            <h4></h4>
                            <h5 style={{ color: "rgb(245 205 124" }}>Student</h5>
                            <h5 style={{ color: "rgb(82 182 150" }}>Practitioner</h5>
                        </li>
                        {list.map((a) => {

                            const filter = openCl1.filter((f) => f === a.name)

                            return (
                                <div>

                                    <li className='dropdown-list'>
                                        <h4>
                                            {!filter[0] && <MdOutlineKeyboardArrowRight className='icon'
                                                onClick={() => {
                                                    setOpenCl1(openCl1.concat(a.name))
                                                }}
                                            />}
                                            {filter[0] && < IoIosArrowDown className='icon'
                                                onClick={() => {
                                                    const filterlist = openCl1.filter((f) => f !== a.name)
                                                    setOpenCl1(filterlist)
                                                }}
                                            />}
                                            {a.name}</h4>
                                        <h5>{a.cl1}</h5>
                                        <h5>{a.cl2}</h5>
                                    </li>
                                    {filter[0] && <summary
                                        className='dropdown-list-detials'>
                                        {a.summery}
                                    </summary>}
                                </div>
                            )
                        })}
                    </ul>
                </div>
                <div className='column-two'>
                    <div className='column-title'>
                        <div className='divider'></div>
                        <h5> Funded stage</h5>
                        <div className='divider'></div>
                    </div>
                    <ul className='dropdown'>
                        <li className='dropdown-title'>
                            <h4></h4>
                            <h5 style={{ color: "rgb(245 205 124" }}>Master</h5>
                        </li>
                        {list2.map((a) => {
                            const filter = openCl2.filter((f) => f === a.name)

                            return (
                                <div>

                                    <li className='dropdown-list'>
                                        <h4 style={{ width: "80%" }}>
                                            {!filter[0] && <MdOutlineKeyboardArrowRight className='icon'
                                                onClick={() => {
                                                    setOpenCl2(openCl2.concat(a.name))
                                                }}
                                            />}
                                            {filter[0] && < IoIosArrowDown className='icon'
                                                onClick={() => {
                                                    const filterlist = openCl2.filter((f) => f !== a.name)
                                                    setOpenCl2(filterlist)
                                                }}
                                            />}
                                            {a.name}</h4>
                                        <h5 style={{ width: "50%" }}>{a.cl1}</h5>
                                    </li>
                                    {filter[0] && <summary
                                        className='dropdown-list-detials'>
                                        {a.summery}
                                    </summary>}
                                </div>
                            )
                        })}
                    </ul>
                    <div className='info-tab'>
                        <h4>
                            Refund + Profit Splits ℹ
                        </h4>
                    </div>

                </div>

            </div>

            <div className='column-footer'>
                <div>
                    <h2><s>$</s> <b>399</b></h2>
                    <summary>For 100K account</summary>
                </div>
                <Button className='blue-button'><MdArrowOutward className='icon' /> Buy Challange</Button>
            </div>
        </div>
    )
}

export default FourthColumn