import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from "../../assets/img/svg/logo.svg";

function Footer() {
    return (
        <div className={styles.footer}>

          <div className={styles.wrapper}>

            <div className={styles.dopMenu}>
              <span><a className={styles.styleA} href='#'>Home</a></span>
              <span><a className={styles.styleA} href='#'>About me</a></span>
              <span><a className={styles.styleA} href='#'>Portfolio</a></span>
              <span><a className={styles.styleA} href='#'>Contact</a></span>
            </div>
            
            <div className={styles.dopMenu}>
                <span><FontAwesomeIcon icon={faPhone} />7777777777</span>
                <span><FontAwesomeIcon icon={faEnvelope} />email@gmail.com</span>
                <span><FontAwesomeIcon icon={faInstagram} />menot.js</span>
                <span><FontAwesomeIcon icon={faLinkedin} />inevadim</span>
              
            </div>
            
            <div className={styles.dopMenu}>
              <span className={styles.titleCopyright}><img className={styles.imgLogo} src={logo} alt="logo"/>ineVadim</span>
              <span className={styles.copyright}>Copyright © 2025, ineVadim</span>
            </div>
           
          </div>

        </div>
    )
}

export default Footer


