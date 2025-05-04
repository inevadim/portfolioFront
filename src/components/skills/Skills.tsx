import Card from './card/Card';
import styles from './Skills.module.scss';
import { faCode, faPalette, faPenNib, faBarsProgress, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  return (
    <div className={styles.skills} id="aboutMe">
      <span>Skills</span>
      <div className={styles.wrapper}>
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
