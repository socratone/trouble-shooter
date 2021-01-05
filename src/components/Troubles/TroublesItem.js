import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './TroublesItem.module.scss';

const TroublesItem = ({ item }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/shoot/' + item.id);
  }

  return (
    <article className={styles.item} onClick={handleClick}>
      <div className={styles.imageArea}>
        <div className={styles.imageWrap}>
          <div 
            className={styles.image} 
            style={{ backgroundImage: `url('${item.image}')` }} 
          />
        </div>
      </div>
      <div className={styles.textArea}>
        <div className={styles.titleWrap}>
          <h4 className={styles.title}>{item.title}</h4>
        </div>
        <div className={styles.descriptionWrap}>
          <p className={styles.description}>{item.description}</p>
        </div>
      </div>
    </article>
  );
}
 
export default TroublesItem;