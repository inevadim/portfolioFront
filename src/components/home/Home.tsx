// import Header from "../header/Header";
import styles from './Home.module.scss';
import Men from "./men/Men";
import Title from "./title/Title";

function Home() {
  return (
    <div className={styles.wrap} id="home">
      <div className={styles.home}>
        {/* <Header /> */}
        <div className={styles.wrapTitleMen}>
          <Title />
          <Men />
        </div>
      </div>
    </div>
  )
}

export default Home