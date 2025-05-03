import { useState } from 'react';
import Modal from './modal/Modal';
import styles from './Title.module.scss';

function Title() {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className={styles.title}>
            <h2>Hello</h2>
            <h1>I’M FRONTEND DEVELOPER</h1>
            <h3>I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me</h3>
            <a href='#' onClick={() => setModalActive(true)}>CONTACT ME</a>
            <Modal active={modalActive} setActiveModal={setModalActive} />
        </div>
    )
}

export default Title