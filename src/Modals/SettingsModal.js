import React, { useState } from 'react'
import Overlay from '../Utlities/Overlay.jsx'
import MainIcon from '../Images/MainIcon.png'
import { IoIosArrowForward } from "react-icons/io";
import './SettingsModal.css'
import { Card, CloseButton, Form, Image } from 'react-bootstrap'
import { IoIosArrowDown } from "react-icons/io";

const SettingsModal = ({ setOpenSettings, openSettings }) => {
    const [open, setOpen] = useState([]);

    const list = [
        { id: 1, name: "Strictly necessary cookies" },
        { id: 2, name: "Functionality cookies" },
        { id: 3, name: "Tracking cookies" },
        { id: 4, name: "Targeting & Advertising cookies" },
        { id: 5, name: "Read more information about this" },
    ] 


    return (
        <div>
            {<Overlay  >
                <div className='setting'>
                    <CloseButton className='close-button'
                        style={{
                            backgroundColor: 'red',
                            padding: '2%', borderRadius: "10px"
                        }}
                        onClick={() => {
                            setOpenSettings(false)
                        }}
                    />
                    <div>
                        <Image src={MainIcon} width={80} />
                        <Card.Title style={{ fontWeight: "bolder" }}>
                            Cookie Preference Center
                        </Card.Title>
                    </div>
                    {list.map((name, index) => {
                        const filter = open.filter((f) => f === name.name)
                        return (
                            <div className='setting-list' key={index}>
                                <li>
                                    {!filter[0] && <b
                                        onClick={() => {
                                            setOpen(open.concat(name.name))
                                        }}
                                    > <IoIosArrowForward className='icon' />{name.name}</b>}
                                    {filter[0] && <b
                                        onClick={() => {
                                            const filterlist = open.filter((f) => f !== name.name)

                                            setOpen(filterlist)
                                        }}
                                    > <IoIosArrowDown className='icon' />{name.name}</b>}
                                    <Form>
                                        <Form.Check
                                            aria-checked="mixed"
                                            // prettier-ignore
                                            type="switch"
                                            id="custom-switch"
                                        />
                                    </Form>

                                </li>
                                {filter[0] && <h6>
                                    These cookies are used to provide you with a
                                    more personalized experience on our website and to
                                    remember choices you make when you use our website. For example,
                                    we may use functionality cookies
                                    to remember your language preferences or remember your login details.
                                </h6>}
                            </div>

                        )
                    })}
                </div>
            </Overlay>}
        </div>
    )
}

export default SettingsModal