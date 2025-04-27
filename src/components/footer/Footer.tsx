import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className={styles.footer}>
          <ul>
            <li><FontAwesomeIcon icon={faPhone} />21312324314</li>
            <li><FontAwesomeIcon icon={faEnvelope} />Email:email@gmail.com</li>
            <li><FontAwesomeIcon icon={faInstagram} />Inst:email@gmail.com</li>
            <li> <FontAwesomeIcon icon={faLinkedin} />Inst:email@gmail.com</li>
          </ul>
          <span>Copyright © 2025, ineVadim</span>
        </div>
    )
}

export default Footer

