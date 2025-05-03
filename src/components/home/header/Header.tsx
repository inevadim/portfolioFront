import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <Logo />
            <Menu />
        </div>
    )
}

export default Header