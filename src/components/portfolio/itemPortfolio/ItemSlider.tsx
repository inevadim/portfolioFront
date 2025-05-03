import styles from './ItemSlider.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useState } from 'react';
// import Modal from '../modal/Modal';

type ChildProps = {
    imgItem: any;
    name: string;
};

function ItemSlider({ imgItem, name }: ChildProps) {
    // const [modalActive, setModalActive] = useState(true);


    return (
        <div className={styles.itemSlider}>
            <img src={imgItem} alt="portfolio" />
            <div className={styles.wrapper}>
                <span>{name}</span>
                <a href='#' onClick={() => setModalActive(true)}>Look</a>
            </div>
            {/* <Modal active={modalActive} setActiveModal={setModalActive} /> */}

        </div>
    );
}

export default ItemSlider

