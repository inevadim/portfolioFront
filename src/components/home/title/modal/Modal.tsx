import styles from './Modal.module.scss';


type Props={
    active:boolean,
    // setActiveModal:boolean,
    setActiveModal:any,
}





function Modal({active, setActiveModal}:Props) {
    return (
        <div className={active ? styles.modal : styles.unModal} onClick={()=>setActiveModal(false)}>
            <div className={styles.content} onClick={(e)=>e.stopPropagation()}>
                <form>
                    <input placeholder='name'/>
                    <input type='tel' placeholder='number'/>
                    <input type='email' placeholder='email'/>
                    <button type="button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Modal