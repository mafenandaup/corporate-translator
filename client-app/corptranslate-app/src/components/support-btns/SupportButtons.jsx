import './SupportButtons.css'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function SupportButtons() {

    return (
        <>
            <div className="button-cont">
                <a href="https://www.linkedin.com/in/mariafpm/" target='_blank'><motion.button whileHover={{ scale: 1.2 }} className='support-btns'><FontAwesomeIcon icon={faLinkedinIn} size='2x'></FontAwesomeIcon></motion.button></a>
                <a href="https://github.com/mafenandaup" target='_blank'><motion.button whileHover={{ scale: 1.2 }} className='support-btns'><FontAwesomeIcon icon={faGithub} size='2x'></FontAwesomeIcon></motion.button></a>
                <a href="mailto:mariafernandapmaia@gmail.com" target='_blank'><motion.button whileHover={{ scale: 1.2 }} className='support-btns'><FontAwesomeIcon icon={faEnvelope} size='2x'></FontAwesomeIcon></motion.button></a>
            </div>
        </>
    );
}

export default SupportButtons