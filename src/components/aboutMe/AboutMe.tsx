import styles from './AboutMe.module.scss';
import CardImg from './cardImg/CardImg';
import blueCircle from "../../assets/img/svg/blueCircle.svg";
import whiteCircle from "../../assets/img/svg/whiteCircle.svg";
import yellowCircle from "../../assets/img/svg/yellowCircle.svg";
import { motion } from "motion/react"

function AboutMe() {

    return (
        <div className={styles.wrapper} id="aboutMe">
            <div className={styles.aboutMe}>
                <div className={styles.leftImg}>
                    <CardImg />
                    <CardImg />
                </div>
                <div className={styles.titleAboutMe}>
                    <span className={styles.title}><h2>ABOUT ME</h2></span>
                    Hello again everyone! So, you already know that my name is Gleb. A little about myself: student, 18 y.o., athlete-football player, I love creativity since childhood, I live in Donetsk, Ukraine. Why programming? Everything is elementary - I like it, the profession of the future, thanks to which I can provide myself and fulfill my dream - travel, at the moment I specialize in web design, front-end and back-end development, turnkey websites. Why should you choose me? I approach each order with great responsibility and love, as I want to make a name for myself, exclude plagiarism and negligence, fully study the project, the client and its target audience, work for quality, trying to make an order as quickly and uniquely as possible, taking into account all the edits and wishes. By trusting me, you will get the maximum return for your project, save your nerves and time. If you are interested in me , you want to know something more or use my services, then I will provide all my contacts below.
                </div>
                <div className={styles.rightImg}>
                    <CardImg />
                </div>
            </div>
            <motion.img
                className={styles.whiteCircle}
                src={whiteCircle}
                alt="whiteCircle"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    type: 'just'
                }}
            />
            <motion.img
                className={styles.yellowCircle}
                src={yellowCircle}
                alt="yellowCircle"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    type: 'just'
                }}
            />
            <motion.img
                className={styles.blueCircle}
                src={blueCircle}
                alt="Blue circle"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    type: 'just'
                }}
            />
        </div>
    )
}

export default AboutMe
