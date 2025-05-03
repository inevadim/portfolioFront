import styles from './Circle.module.css';


interface CircleProps {
    title: string;
}

function Circle({ title }: CircleProps) {
    return (
        <div className={styles.circle}>
            <span className={styles.title}>{title}</span>
        </div>
    )
}

export default Circle
