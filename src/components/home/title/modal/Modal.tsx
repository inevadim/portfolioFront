import styles from './Modal.module.scss';


type Props={
    active:boolean,
    setActiveModal:any,
}

function Modal({active, setActiveModal}:Props) {
    return (
        <div className={active ? styles.modal : styles.unModal} onClick={()=>setActiveModal(false)}>
            <div className={styles.content} onClick={(e)=>e.stopPropagation()}>
            <span>Contact with me</span>
                <form className={styles.formModal}>
                    
                    <input placeholder='name'/>
                    <input type='tel' placeholder='phone'/>
                    <input type='email' placeholder='email'/>
                    <textarea placeholder="Enter message..." className={styles.myTextarea} />
                    <button className={styles.buttonModal} type="button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Modal