import React, { Fragment } from 'react'
import './ThirdColumn.css'
import scalingplan from '../../Images/scalingplan.webp'
import notradingrestrictions from '../../Images/notradingrestrictions.webp'
import payoutsystem from '../../Images/payoutsystem.webp'
import freeretry from '../../Images/freeretry.webp'
import { Image } from 'react-bootstrap'

const ThirdColumn = () => {

    const data = [
        {
            id: 1,
            image: notradingrestrictions
            , name: "Trade the way you want", summery: 'Use an "EA", hold during news, hold trades over the weekend and trade lot sizes as big as the leverage allows for.'
        }
        ,
        {
            id: 2,
            image: freeretry,
            name: "Unlimited Trading Days", summery: 'We understand that putting a time limit creates a stressful environment, therefore we have no minimum or maximum limit on trading days. Take all the time you need.'
        }
        , {
            id: 3,
            image: scalingplan
            , name: "Scaling Plan", summery: `Scale your way up with us. We increase the account size, Maximum Loss, and Maximum Daily Loss to a 14% Maximum Loss and a 7% Daily Loss limit. Once the trader receives a 'Hot Seat' at the firm, they can trade up to $2 million with on-demand payouts and a monthly bonus. Read more about our`
        }
        , {
            id: 4,
            image: payoutsystem,
            Link: "Scaling Plan",
            name: "Payout System", summery: 'Request your payouts on a 5 trading days basis with a 80% profit split. Once a trader earns a Hot Seat in our firm, the trader receives on-demand payouts with a 90% profit split.'
        }
    ]

    return (
        <div className='third'>
            <div className='third-conatiner'>
                {data.slice(0, 2).map((data, i) => {
                    return (
                        <div >
                            <Image src={data.image} />
                            <h4>{data.name}</h4>
                            <summary>{data.summery}</summary>
                        </div>
                    )
                })}
            </div>
            <div className='third-conatiner'>
                {data.slice(2, 4).map((data, i) => {
                    return (
                        <div >
                            <Image src={data.image} />
                            <h4>{data.name}</h4>
                            <summary>{data.summery}</summary>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ThirdColumn