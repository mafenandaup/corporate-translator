
import './App.css'
import corpTransIcon from './../public/assets/CORPTRANSLATOR LOGO.png'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons' 

function App() {


  return (
    <>
      <section className='app-container'>
        <div className="introduction">
          <img src={corpTransIcon} alt="logo - Corporate Translator" className='myLogo' />
          <h3>Saiba o que você está falando(ou ouvindo)</h3>
          <div className="textbox-contain">
            <label htmlFor="translation-phrase">Linguagem comum</label>
            <input type="text" name="translation-phrase" id="translation-phrase" className='textbox' />
            <label htmlFor="translated-phrase">Linguagem corporativa</label>
            <textarea name="translated-phrase" id="translated-phrase" className='textbox'></textarea>
            <div className="button-cont">
              <motion.button whileHover={{ scale: 1.1 }} className='action-btns'><FontAwesomeIcon icon={faRepeat}></FontAwesomeIcon> trocar contexto</motion.button>
              <motion.input whileHover={{ scale: 1.1 }} type="submit" value="Traduzir" className='action-btns' id='translate-btn' />
            </div>
          </div>
        </div>
      </section>
      <div className="support-btns-contain">
        <button className='support-btns'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></button>
        <button className='support-btns'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></button>
        <button className='support-btns'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></button>
      </div>
    </>
  )
}

export default App
