import { useState } from 'react';
import Modal from './modal/Modal';
import styles from './Title.module.scss';
import { motion } from "motion/react"

function Title() {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className={styles.title}>
            <motion.h2
                initial={{
                    x: -1000,
                }}
                animate={{
                    x: 0
                }}
                transition={{
                    delay: 0.5,
                }}
            >Hello</motion.h2>
            <motion.h1
                initial={{
                    x: -1000,
                }}
                animate={{
                    x: 0
                }}
                transition={{
                    delay: 0.8,
                }}>I’M FRONTEND DEVELOPER</motion.h1>
            <motion.h3
                initial={{
                    x: -1000,
                }}
                animate={{
                    x: 0
                }}
                transition={{
                    delay: 1,
                }}>I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me</motion.h3>
            <a href='#' onClick={() => setModalActive(true)}>CONTACT ME</a>
            <Modal active={modalActive} setActiveModal={setModalActive} />
        </div>
    )
}

export default Title