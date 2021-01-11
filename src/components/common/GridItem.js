import React from 'react';
import { useHistory } from 'react-router-dom';
import getStackThumbnail from '../../helper/getStackThumbnail';
import styles from './GridItem.module.scss';

const GridItem = ({ item, page }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/${page}/` + item.id);
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
          <p className={styles.title}>{item.title}</p>
          <div className={styles.bottomWrap}>
            <p className={styles.category}>{item.category}</p>
            <p className={styles.date}>{item.createdAt}</p>
          </div>
        </div>
      </article>
    </div>
  );
}
 
export default GridItem;