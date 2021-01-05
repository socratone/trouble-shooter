import React from 'react';
import styles from './TroublesItem.module.scss';

const TroublesItem = ({ item }) => {
  return (
    <article className={styles.item}>
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