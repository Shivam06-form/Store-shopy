import React from 'react'
import './SixthColumn.css'
import { FaDiscord } from "react-icons/fa";
import { Button } from 'react-bootstrap'
import { MdArrowOutward } from "react-icons/md";

const SixthColumn = () => {
  return (
    <div className='sixth'>
      <h3>Join A Team Of Skillful Traders</h3>
      <summary>When it comes to trading we believe in consistency and risk management, which are the discipline indicator, the rest of the skills can be developed.
        Please keep that in mind! We are seeking real traders not bounty hunters.</summary>
      <div>
        <Button className='bg-primery'><MdArrowOutward className='icon' />Buy Challange</Button>
        <Button className='bg-dark'><FaDiscord className='icon' /> Discord</Button>
      </div>

    </div>
  )
}

export default SixthColumn