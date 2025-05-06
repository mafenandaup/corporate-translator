import './Forms.css'
import InputBtns from '../Input-btns/InputBtns';
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function TranslateForms() {


    return (
        <>
            <div className="textbox-contain">
                <label htmlFor="translation-phrase">Linguagem comum</label>
                <textarea type="text" name="translation-phrase" id="translation-phrase" className='textbox' />
                <label htmlFor="translated-phrase">Linguagem corporativa</label>
                <textarea name="translated-phrase" id="translated-phrase" className='textbox' disabled='disabled'></textarea>
                <InputBtns/>
            </div>
        </>
    )
}

export default TranslateForms