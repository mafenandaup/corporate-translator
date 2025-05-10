import './Forms.css'
import { useState } from 'react';
import InputBtns from '../Input-btns/InputBtns';
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
// import React, { useState } from 'react'; comment 4 now

function TranslateForms() {

    const [InputTranslation, setInputTranslation] = useState(" ");
     const [InputTranslated, setInputTranslated] = useState(" ");


    return (
        <>
            <div className="textbox-contain">
                <label htmlFor="translation-phrase">Linguagem comum</label>
                <textarea type="text" name="translation-phrase" id="translation-phrase" value={InputTranslation} className='textbox'/>
                <motion.button whileHover={{ scale: 1.1 }} className='action-btns' id='switch-context'>Trocar contexto <FontAwesomeIcon icon={faRepeat}></FontAwesomeIcon></motion.button>
                <label htmlFor="translated-phrase">Linguagem corporativa</label>
                <textarea name="translated-phrase" id="translated-phrase" className='textbox' value={InputTranslated} disabled='disabled'></textarea>
                <InputBtns  clearText={() => {
                    setInputTranslation("");
                    setInputTranslated(""); }} />
            </div>
        </>
    )
}

export default TranslateForms