
import './App.css'
import corpTransIcon from './../public/assets/CORPTRANSLATOR LOGO.png'
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';

function App() {


  return (
    <>
      <section className='app-container'>
        <div className="introduction">
          <img src={corpTransIcon} alt="logo - Corporate Translator" className='myLogo' />
          <h3>Saiba o que você está falando(ou ouvindo)</h3>
          <div className="textbox-contain">
          <input type="text" name="translate-phrase" id="" className='textbox' placeholder='Sua frase aqui' />
            <motion.button whileHover={{scale: 1.1}} className='action-btns'><FontAwesomeIcon icon={faRepeat}></FontAwesomeIcon></motion.button>
            <textarea name="" id="" className='textbox'></textarea>
          </div>
          <motion.input whileHover={{scale: 1.1}}type="submit" value="Traduzir" className='action-btns'/>
        </div>
      </section>
    </>
  )
}

export default App
