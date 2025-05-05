
import './App.css'
import corpTransIcon from './../public/assets/CORPTRANSLATOR LOGO.png'
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
            <button><FontAwesomeIcon icon={faRepeat}></FontAwesomeIcon></button>
            <textarea name="" id="" className='textbox'></textarea>
          </div>
          <input type="submit" value="Traduzir" />
        </div>
      </section>
    </>
  )
}

export default App
