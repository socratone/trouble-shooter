import React from 'react';
import { useHistory } from 'react-router-dom';
import getThumbnail from '../../helper/getThumbnail';
import convertSQLDate from '../../helper/convertSQLDate';
import categoryJSON from '../../data/categoryJSON';
import styles from './GridItem.module.scss';

const GridItem = ({ item, page }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/${page}/` + item.id);
  }

  const setThumbnail = () => {
    return getThumbnail(item.category);
  }

  const convertCategory = category => {
    const [item] = categoryJSON[page].filter(item => item.id === category);
    if (item) return item.name;
    return '';
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
            <p className={styles.category}>{convertCategory(item.category)}</p>
            <p className={styles.date}>{convertSQLDate(item.createdAt)}</p>
          </div>
        </div>
      </article>
    </div>
  );
}
 
export default GridItem;