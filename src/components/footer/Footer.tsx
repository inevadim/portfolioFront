import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHouse, faAddressCard, faListCheck, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from "../../assets/img/svg/logo.svg";

function Footer() {
  return (
    <div className={styles.footer} id="contact">

      <div className={styles.wrapper}>

        <ul className={styles.dopMenu}>
          <li><a href='#home'><FontAwesomeIcon icon={faHouse} color='aqua' /><span>Home</span></a></li>
          <li><a href='#aboutMe'><FontAwesomeIcon icon={faAddressCard} color='aqua' /><span>About me</span></a></li>
          <li><a href='#portfolio'><FontAwesomeIcon icon={faListCheck} color='aqua' /><span>Portfolio</span></a></li>
          <li><a href='#contact'><FontAwesomeIcon icon={faAddressBook} color='aqua' /><span>Contact</span></a></li>
        </ul>

        <ul className={styles.dopMenu}>
          <li><FontAwesomeIcon icon={faPhone} color='aqua' /><span>7777777777</span></li>
          <li><FontAwesomeIcon icon={faEnvelope} color='aqua' /><span>email@gmail.com</span></li>
          <li><FontAwesomeIcon icon={faInstagram} color='aqua' /><span>menot.js</span></li>
          <li><FontAwesomeIcon icon={faLinkedin} color='aqua' /><span>inevadim</span></li>
        </ul>

        <ul className={styles.dopMenu}>
          <li className={styles.titleCopyright}><img src={logo} alt="logo" />ineVadim</li>
          <li className={styles.copyright}>Copyright © 2025, ineVadim</li>
        </ul>

      </div>

    </div>
  )
}

export default Footer


