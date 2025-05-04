import Circle from './circle/Circle';
import styles from './Men.module.scss';
import circle from "../../../assets/img/svg/blueCircle.svg";
import menImg from "../../../assets/img/meMain.png";
import { motion } from "motion/react"

function Men() {
    return (
        <div className={styles.men}>
            <motion.img
                className={styles.blueCircle}
                src={circle}
                alt="circle"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    type: 'just'
                }}
            />


            <span className={styles.ps}><Circle title="PS" /></span>
            <span className={styles.ux}><Circle title="UX" /></span>
            <span className={styles.code}><Circle title="</" /></span>
            <span className={styles.ui}><Circle title="UI" /></span>
            <img className={styles.menImg} src={menImg} alt="men" />
        </div>
    )
}

export default Men

