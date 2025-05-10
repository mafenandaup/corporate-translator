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
    const [context, setContext] = useState("corporate");

const switchContext= async () => {
  const newContext = context === "cotidiano" ? "corporativo" : "cotidiano";
    setContext(newContext);

        setInputTranslation("");
        setInputTranslated("");

  const response = await fetch("/api/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ context: newContext, phrase: " " }),
  });
  const data = await response.json();
  setInputTranslated(data.translatedText);
};

    return (
        <>
            <div className="textbox-contain">
                <label htmlFor="translation-phrase"> {context === "corporate" ? "Linguagem comum" : "Linguagem corporativa"}</label>
                {/* o event.target é a referência ao campo que gerou o evento; nesse caso uma text área. event.target.value é o VALOR ATUAL do campo que está sendo acionado*/}
                <textarea type="text" name="translation-phrase" id="translation-phrase" value={InputTranslation} onChange={(event) => setInputTranslation(event.target.value)} className='textbox' />
                <motion.button whileHover={{ scale: 1.1 }} className='action-btns' id='switch-context' onClick={switchContext}>Trocar contexto <FontAwesomeIcon icon={faRepeat}></FontAwesomeIcon></motion.button>
                <label htmlFor="translated-phrase">{context === "corporativo" ? "Linguagem corporativa" : "Linguagem comum"}</label>
                <textarea name="translated-phrase" id="translated-phrase" className='textbox' value={InputTranslated} disabled='disabled'></textarea>
                <InputBtns clearText={() => {
                    setInputTranslation("");
                    setInputTranslated("");
                }} />
            </div>
        </>
    )
}

export default TranslateForms