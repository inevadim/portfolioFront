import styles from './Modal.module.scss';
import { useModalStore } from '../../../store/modalStore';

type Props = {
    text: string,
    name: string,
    imageModal: string
}

function Modal({ text, name, imageModal }: Props) {
    const { isOpen, close } = useModalStore();
    if (!isOpen) return null;
    return (
        <div className={styles.modal} onClick={close}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <span>{name}</span>
                <img src={imageModal} alt="my project" />

                <div className={styles.textProject}>
                    {text}

                </div>
            </div>
        </div>
    )
}

export default Modal