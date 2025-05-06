import Card from './card/Card';
import styles from './Skills.module.scss';
import { faCode, faBarsProgress, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
// import { motion } 'motion/react';
function Skills() {

  // const antimationVisible = {
  //   hidden: {
  //     x: -1000,
  //     opacity: 0
  //   },
  //   visible: {
  //     x: 0,
  //     opacity: 1,
  //     transition: { delay: 0.5 }
  //   }
  // }
  return (
    <div className={styles.skills} id="skills">
      <span>Skills</span>
      <div
        className={styles.wrapper}
      // initial="hidden"
      // whileInView="visible"
      // viewport={{ amount: 0.1, once: true }}
      // variants={antimationVisible}
      >
        {/* <Card title="Product Design" imgCard={faPenNib} /> */}
        {/* <Card title="Icon Design" imgCard={faPalette} /> */}
        {/* <Card title="Logo Design" imgCard={faPenNib} /> */}

        <Card title="Frontend" imgCard={faLaptopCode} />
        <Card title="Backend" imgCard={faCode} />
        <Card title="UX/UI Design" imgCard={faBarsProgress} />
        {/* <Card title="Motion" imgCard={faLaptopCode} /> */}
      </div>
    </div>
  )
}

export default Skills
