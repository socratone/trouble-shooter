import React from 'react';
import { useHistory } from 'react-router-dom';
import getStackThumbnail from '../../helper/getStackThumbnail';
import Stack from './Stack';
import styles from './TroublesItem.module.scss';

const TroublesItem = ({ item }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/shoot/' + item.id);
  }

  const setThumbnail = () => {
    if (item.thumbnail) return item.thumbnail;
    return getStackThumbnail(item.category);
  }

  return (
    <div>
      <article className={styles.item} onClick={handleClick}>
        <div className={styles.imageArea}>
          <div className={styles.imageWrap}>
            <div className={styles.imageCover} />
            <div 
              className={styles.image} 
              style={{ backgroundImage: `url('${setThumbnail()}')` }} 
            />
          </div>
        </div>
        <div className={styles.textArea}>
          <Stack item={item} margin="0 8px 0 0" />
          <p className={styles.title}>{item.title}</p>
        </div>
      </article>
    </div>
  );
}
 
export default TroublesItem;