
import './App.css'
import corpTransIcon from './../public/assets/CORPTRANSLATOR LOGO.png'

function App() {


  return (
    <>
      <section className='app-container'>
        <div className="introduction">
          <img src={corpTransIcon} alt="logo - Corporate Translator" className='myLogo' />
          <h3>Saiba o que você está falando(ou ouvindo)</h3>
        </div>
      </section>
    </>
  )
}

export default App
