import styles from './Modal.module.scss';
import { useForm, SubmitHandler, FieldErrors } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faPhone, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';
import { motion } from "motion/react"

type Props = {
    active: boolean;
    setActiveModal: (active: boolean) => void;
};

type FormData = {
    name: string;
    phone: string;
    email: string;
    text: string;
};

function Modal({ active, setActiveModal }: Props) {
    const {
        register,
        handleSubmit,
        reset,

    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = () => {
        toast.success('Message sent!');
        reset();
    };

    const onError = (errors: FieldErrors<FormData>) => {
        Object.values(errors).forEach(error => {
            if (error?.message) {
                toast.error(error.message);
            }
        });
    };

    return (
        <div
            className={active ? styles.modal : styles.unModal}
            onClick={() => setActiveModal(false)}



        >
            <div className={styles.content}

                onClick={(e) => e.stopPropagation()}>
                <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />

                <span>Contact</span>

                <form className={styles.formModal} onSubmit={handleSubmit(onSubmit, onError)}>
                    <div className={styles.wrap}><FontAwesomeIcon icon={faAddressBook} /><input
                        placeholder="Name"
                        {...register('name', { required: 'name requare' })}
                    /></div>


                    <div className={styles.wrap}><FontAwesomeIcon icon={faPhone} /><input
                        type="tel"
                        placeholder="Phone"
                        {...register('phone', {
                            required: 'phone requare',
                            pattern: {
                                value: /^[0-9+\-()\s]*$/,
                                message: 'unvalid phone',
                            },
                        })}
                    /></div>

                    <div className={styles.wrap}><FontAwesomeIcon icon={faEnvelope} /><input
                        type="email"
                        placeholder="Email"
                        {...register('email', {
                            required: 'Email requare',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'unvalid email',
                            },
                        })}
                    /></div>

                    <div className={styles.wrap}><FontAwesomeIcon icon={faComment} /><textarea
                        placeholder="Enter message..."
                        className={styles.myTextarea}
                        {...register('text', { required: 'Message requare' })}
                    /></div>

                    <button className={styles.buttonModal} type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Modal;
