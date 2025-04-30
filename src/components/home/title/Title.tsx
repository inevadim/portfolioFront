// import styled from "styled-components";
import { useState } from 'react';
import Modal from './modal/Modal';
import styles from './Title.module.css';

function Title() {
    const [modalActive, setModalActive]=useState(false);
    return (
        <div className={styles.title}>
            {/* <Title1>Title</Title1> */}
            <h2>Hello</h2>
            <h1>I’M FRONTEND DEVELOPER</h1>
            <h3>I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me</h3>
            <a className={styles.button} href='#' onClick={()=>setModalActive(true)}>CONTACT ME</a>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default Title

// const Title1 = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     color: #e91e63;
// `;