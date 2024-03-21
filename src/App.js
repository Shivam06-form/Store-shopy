import Header from './Components/Header/Header.js'
import FirstColumn from './Components/FirstColumn/FirstColumn.js';
import SecondColumn from './Components/SecondColumn/SecondColumn.js';
import ThirdColumn from './Components/ThirdColumn/ThirdColumn.js';
import FourthColumn from './Components/FourthColumn/FourthColumn.js';
import FifthColumn from './Components/FifthColumn/FifthColumn.js';
import SixthColumn from './Components/SixthColumn/SixthColumn.js';
import SeventhColumn from './Components/SeventhColumn/SeventhColumn.js';
import Footer from './Components/Footer/Footer.js';
import { IoMdSettings } from "react-icons/io";
import footerImage from '../src/Images/footerImage.png'
import { Image } from 'react-bootstrap';
import { useState } from 'react';
import ChatModal from './Modals/ChatModal.js';
import SettingsModal from './Modals/SettingsModal.js';



function App() {
  const [showHeader, setShowHeader] = useState(false)
  const [openSettings, setOpenSettings] = useState(false);
  const [openChat, setOpenChat] = useState(false);

  return (
    <div style={{ position: "relative" ,width:"100%"}}>
      <Header showHeader={showHeader} />
      <FirstColumn setShowHeader={setShowHeader} />
      <SecondColumn />
      <ThirdColumn />
      <FourthColumn />
      <FifthColumn />
      <SixthColumn />
      <SeventhColumn />
      <Footer />
      <div className='app-footer-icons'>
        {openSettings && <SettingsModal setOpenSettings={setOpenSettings} openSettings={openSettings} />}
        <div className='icon-overlay'
          onClick={() => {
            setOpenSettings(true)
          }}
        > <IoMdSettings className='icon footer-icon' color='white' />
        </div>
        {openChat && <ChatModal setOpenChat={setOpenChat} setShowHeader={setShowHeader} />}
        <Image src={footerImage} width={70}
          onClick={() => {
            setOpenChat(true);
            setShowHeader(false)
          }}
        />
      </div>
    </div>
  );
}

export default App;
