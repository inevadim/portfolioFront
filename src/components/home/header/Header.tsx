// import styled from "styled-components";
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import styles from './Header.module.css';

const Header=()=> {
    return (
        <div className={styles.header}>
            {/* <Title>Header</Title> */}
            <Logo />
            <Menu />
        </div>
    )
}

export default Header

// const Title = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     color: #e91e63;
// `;