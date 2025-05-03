import Card from './card/Card';
import styles from './Skills.module.scss';
import { faCode, faPalette, faPenNib, faBarsProgress, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  return (
    <div className={styles.skills}>
      <Card title="Product Design" imgCard={faPenNib} />
      <Card title="UX/UI Design" imgCard={faBarsProgress} />
      <Card title="Icon Design" imgCard={faPalette} />
      <Card title="Logo Design" imgCard={faPenNib} />
      <Card title="Backend" imgCard={faCode} />
      <Card title="Frontend" imgCard={faLaptopCode} />
      <Card title="Motion" imgCard={faLaptopCode} />
    </div>
  )
}

export default Skills
