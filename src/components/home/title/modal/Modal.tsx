import styles from './Modal.module.scss';

function Modal({active, setActive}) {
    return (
        <div className={active ? styles.modal : styles.unModal} onClick={()=>setActive(false)}>
            <div className={styles.content} onClick={(e)=>e.stopPropagation()}></div>
        </div>
    )
}

export default Modal