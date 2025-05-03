import styles from './Modal.module.scss';
import portfolio from "../../../assets/img/portfolio/portfolio.png"

type Props = {
    active: boolean,
    setActiveModal: any,
}

function Modal({ active, setActiveModal }: Props) {
    return (
        <div className={active ? styles.modal : styles.unModal} onClick={() => setActiveModal(false)}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <span>Name project</span>
                <img src={portfolio} alt="my project" />
                <div className={styles.textProject}>
                    Many text Many text Many textMany text Many text
                    Many text Many text Many textMany text Many text
                    Many text Many text Many textMany text Many text
                    Many text Many text Many textMany text Many text
                    Many text Many text Many textMany text Many text
                    Many text Many text Many textMany text Many text
                    Many text Many text Many textMany text Many text
                    Many text Many text Many textMany text Many text

                </div>
            </div>
        </div>
    )
}

export default Modal