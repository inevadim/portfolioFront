import styles from './ItemSlider.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useModalStore } from '../../../store/modalStore';

type ChildProps = {
    imgItem: any;
    name: string;
    text: string
};

function ItemSlider({ imgItem, name, text }: ChildProps) {
    const { open } = useModalStore();
    const { editText, editName, editImage } = useModalStore();
    const textModalWindow = () => {
        editText(text);
        editName(name);
        editImage(imgItem)
        open();
    }

    return (
        <div className={styles.itemSlider}>
            <img src={imgItem} alt="portfolio" />
            <div className={styles.wrapper}>
                <span>{name}</span>
                <a href='#' onClick={() => textModalWindow()}>Look</a>
            </div>
        </div>
    );
}

export default ItemSlider

