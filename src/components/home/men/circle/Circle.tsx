import styles from './Circle.module.css';
import { motion } from "motion/react"

interface CircleProps {
    title: string;
}

function Circle({ title }: CircleProps) {
    return (
        <motion.div
            className={styles.circle}
            initial={{
                x: -2000,
            }}
            animate={{
                x: 0
            }}
            transition={{
                delay: 1.5,
            }}


        >
            <span className={styles.title}>{title}</span>
        </motion.div>
    )
}

export default Circle
