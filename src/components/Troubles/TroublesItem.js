import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './TroublesItem.module.scss';

const TroublesItem = ({ item }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/shoot/' + item.id);
  }

  return (
    <div>
      <article className={styles.item} onClick={handleClick}>
        <div className={styles.imageArea}>
          <div className={styles.imageWrap}>
            <div className={styles.imageCover} />
            <div 
              className={styles.image} 
              style={{ backgroundImage: `url('${item.thumbnail}')` }} 
            />
          </div>
        </div>
        <div className={styles.textArea}>
          <p className={styles.title}>{item.title}</p>
        </div>
      </article>
    </div>
  );
}
 
export default TroublesItem;