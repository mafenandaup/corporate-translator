

import './InputBtns.css'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';



function InputBtns() {


    return (
        <>
               <div className="button-cont">
                    <motion.button whileHover={{ scale: 1.1 }} className='action-btns'><FontAwesomeIcon icon={faRepeat}></FontAwesomeIcon> trocar contexto</motion.button>
                    <motion.input whileHover={{ scale: 1.1 }} type="submit" value="Traduzir" className='action-btns' id='translate-btn' />
                </div>
        </>
    )
}

export default InputBtns