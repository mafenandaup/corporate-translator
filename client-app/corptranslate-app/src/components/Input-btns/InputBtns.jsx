

import './InputBtns.css'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom } from '@fortawesome/free-solid-svg-icons';



function InputBtns() {


    return (
        <>
            <div className="button-cont">
                <motion.input whileHover={{ scale: 1.1 }} type="submit" value="Traduzir" className='action-btns' id='translate-btn' />
                <motion.button whileHover={{ scale: 1.1 }} className='action-btns' id='clear-text-btn'>Limpar Texto <FontAwesomeIcon icon={faBroom}></FontAwesomeIcon></motion.button>

            </div>
        </>
    )
}

export default InputBtns