import styles from './Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


type ChildProps = {
  title: string;
  imgCard: any;
};



function Card({ title, imgCard }: ChildProps) {

  return (
    <div

      className={styles.card}>
      <FontAwesomeIcon icon={imgCard} />
      <span>{title}</span>
    </div>
  )
}

export default Card