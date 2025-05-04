import { useState } from 'react';
import styles from './Menu.module.scss';
import clsx from 'clsx'; // если не установлен: npm install clsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressCard, faListCheck, faAddressBook, faStar } from '@fortawesome/free-solid-svg-icons';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className={clsx(styles.burger, { [styles.burgerActive]: isOpen })}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={clsx(styles.menu, { [styles.active]: isOpen })}>
                <ul>
                    <li><a href="#home" onClick={() => setIsOpen(false)}><FontAwesomeIcon icon={faHouse} color='aqua' /><span>Home</span></a></li>
                    <li><a href="#skills" onClick={() => setIsOpen(false)}><FontAwesomeIcon icon={faStar} color='aqua' /><span>Skills</span></a></li>
                    <li><a href="#aboutMe" onClick={() => setIsOpen(false)}><FontAwesomeIcon icon={faAddressCard} color='aqua' /><span>About me</span></a></li>
                    <li><a href="#portfolio" onClick={() => setIsOpen(false)}><FontAwesomeIcon icon={faListCheck} color='aqua' /><span>Portfolio</span></a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}><FontAwesomeIcon icon={faAddressBook} color='aqua' /><span>Contact</span></a></li>
                </ul>
            </nav>
        </>
    );
}

export default Menu;
