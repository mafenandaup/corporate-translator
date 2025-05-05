
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
          <input type="text" name="translate-phrase" id="" placeholder='Sua frase aqui' />
          <button><img src={faRepeat} alt="switch" /></button>
          <input type="submit" value="Traduzir" />
        </div>
      </section>
    </>
  )
}

export default App
