// import './App.css'
// import styled from "styled-components";

import styles from './App.module.css';
import AboutMe from './components/aboutMe/AboutMe';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';


function App() {
    return (
        <div className={styles.app}>
            {/* <Title>Welcome to IT-INCUBATOR</Title> */}
            <Home />
            <Skills />
            <AboutMe />
            <Portfolio />
            <Footer />
        </div>
    )
}

export default App

// const Title = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     color: #e91e63;
// `;