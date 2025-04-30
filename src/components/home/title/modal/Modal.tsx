import styles from './Modal.module.scss';

type Props={
    active:boolean,
    setActiveModal:boolean,
}

function Modal({active, setActiveModal}:Props) {
    return (
        <div className={active ? styles.modal : styles.unModal} onClick={()=>setActiveModal(false)}>
            <div className={styles.content} onClick={(e)=>e.stopPropagation()}></div>
        </div>
    )
}

export default Modal