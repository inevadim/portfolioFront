import styles from './Logo.module.scss';
import logo from "../../../../assets/img/svg/logo.svg";

function Logo() {
    return (
        <div className={styles.logo}>
            <img src={logo} alt="logo" />
            <span>IneVadim</span>
        </div>
    )
}

export default Logo