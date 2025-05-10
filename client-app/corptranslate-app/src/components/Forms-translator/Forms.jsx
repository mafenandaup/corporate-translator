import './Forms.css'
import InputBtns from '../Input-btns/InputBtns';
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
// import React, { useState } from 'react'; comment 4 now

function TranslateForms() {


    return (
        <>
            <div className="textbox-contain">
                <label htmlFor="translation-phrase">Linguagem comum</label>
                <textarea type="text" name="translation-phrase" id="translation-phrase" className='textbox' />
                <motion.button whileHover={{ scale: 1.1 }} className='action-btns' id='switch-context'>Trocar contexto <FontAwesomeIcon icon={faRepeat}></FontAwesomeIcon></motion.button>
                <label htmlFor="translated-phrase">Linguagem corporativa</label>
                <textarea name="translated-phrase" id="translated-phrase" className='textbox' disabled='disabled'></textarea>
                <InputBtns />
            </div>
        </>
    )
}

export default TranslateForms