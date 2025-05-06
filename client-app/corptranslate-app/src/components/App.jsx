
import './App.css'
import SupportButtons from './support-btns/SupportButtons';
import TranslateForms from './Forms-translator/Forms';
import corpTransIcon from './../../public/assets/CORPTRANSLATOR LOGO.png'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function App() {


  return (
    <>
      <section className='app-container'>
        <div className="introduction">
          <img src={corpTransIcon} alt="logo - Corporate Translator" className='myLogo' />
          <h3>Saiba o que você está falando(ou ouvindo)</h3>
          <TranslateForms />
        </div>
      </section>
      <SupportButtons />
    </>
  )
}

export default App
