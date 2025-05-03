import styles from './CardImg.module.scss';
import me from '../../../assets/img/me.png'

function CardImg() {
    return (
        <div className={styles.cardImg}>
            <img src={me} alt="my foto"></img>
        </div>
    )
}

export default CardImg
