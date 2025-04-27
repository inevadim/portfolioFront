import styles from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ChildProps = {
  title: any;
  imgCard: any; 
};

function Card({title,imgCard}:ChildProps) {
  
    return (
        <div className={styles.card}>        
          <FontAwesomeIcon icon={imgCard} />
        
          <span className={styles.title}>{title}</span>
          
        </div>
    )
    
}

export default Card