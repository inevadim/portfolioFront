import styles from './Menu.module.scss';

function Menu() {
    return (
        <div className={styles.menu}>
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