// import styled from "styled-components";
import styles from './Logo.module.css';
import logo from "../../../../assets/img/svg/logo.svg";
function Logo() {
    return (
        <div className={styles.logo}>
            <img src={logo} alt="logo"/>
            <span className={styles.logoTitle}>IneVadim</span>
        </div>
    )
}

export default Logo

// const Title1 = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     color: #e91e63;
// `;