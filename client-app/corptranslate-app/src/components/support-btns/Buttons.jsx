import './Buttons.css'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons' 

function Buttons() {

    return (
        <>
                <motion.button whileHover={{ scale: 1.1 }} className='support-btns'><FontAwesomeIcon icon={faLinkedinIn} size='2x'></FontAwesomeIcon></motion.button>
                <motion.button whileHover={{ scale: 1.1 }} className='support-btns'><FontAwesomeIcon icon={faGithub} size='2x'></FontAwesomeIcon></motion.button>
                <motion.button whileHover={{ scale: 1.1 }} className='support-btns'><FontAwesomeIcon icon={faEnvelope} size='2x'></FontAwesomeIcon></motion.button>
        </>
    );
}

export default Buttons