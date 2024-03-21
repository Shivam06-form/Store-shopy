import React, { useEffect, useRef } from 'react'
import first from '../../Images/first.webp'
import { Button, Image } from 'react-bootstrap'
import { MdArrowOutward } from "react-icons/md";
import { BsDiscord, BsTrophyFill } from "react-icons/bs";
import './FirstColumn.css'

const FirstColumn = ({ setShowHeader }) => {

    const Ref1 = useRef()

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (Ref1.current) {
                setShowHeader(+Ref1.current.getBoundingClientRect().top < window.scrollY)
            }
        })
    }, [setShowHeader])


    return (
        <div className='first' >
            <div className='first-title' ref={Ref1}>
                <h1 style={{ color: "black" }}>Your Skill Is</h1>
                <h1 style={{ color: "blue" }}> Our Capital.</h1>
                <summary>We risk while you receive up to 90% of the Profit.</summary>
                <div>
                    <Button > <MdArrowOutward className='icon' />Buy challange</Button>
                    <Button className='btn btn-dark'><BsDiscord className='icon' /> Join discord</Button>
                    <Button className='btn btn-dark'> <BsTrophyFill className='icon' /> Join competiton</Button>
                </div>
            </div>
            <Image src={first} width={500} height={300} />
        </div>
    )
}

export default FirstColumn