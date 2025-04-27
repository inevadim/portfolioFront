// import styled from "styled-components";
import styles from './Menu.module.css';

function Menu() {
    return (
        <div className={styles.menu}>
            {/* <Title1>Menu</Title1> */}
            <ul>
                <li>Home</li>
                <li>About me</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Menu

// const Title1 = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     color: #e91e63;
// `;