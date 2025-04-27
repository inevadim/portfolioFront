// import styled from "styled-components";
import Header from "./header/Header";
import styles from './Home.module.css';
import Men from "./men/Men";
import Title from "./title/Title";

function Home() {
    return (
      <div className={styles.wrap}>
        <div className={styles.home}>
          <Header />
          <div className={styles.wrapTitleMen}>
            <Title />
            <Men />
          </div>
        </div>
      </div>
    )
}

export default Home

// const Title = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     color: #e91e63;
// `;