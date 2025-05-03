import Circle from './circle/Circle';
import styles from './Men.module.scss';
import circle from "../../../assets/img/svg/blueCircle.svg";
import menImg from "../../../assets/img/meMain.png";

function Men() {
    return (
        <div className={styles.men}>
            <img className={styles.blueCircle} src={circle} alt="circle" />
            <span className={styles.ps}><Circle title="PS" /></span>
            <span className={styles.ux}><Circle title="UX" /></span>
            <span className={styles.code}><Circle title="</" /></span>
            <span className={styles.ui}><Circle title="UI" /></span>
            <img className={styles.menImg} src={menImg} alt="men" />
        </div>
    )
}

export default Men

