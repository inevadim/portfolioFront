import styles from './Menu.module.scss';

function Menu() {
    return (
        <div className={styles.menu}>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#aboutMe">About me</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Menu