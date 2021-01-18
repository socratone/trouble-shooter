import React from 'react';
import { useHistory } from 'react-router-dom';
import convertSQLDate from '../../helper/convertSQLDate';
import categoryJSON from '../../data/categoryJSON';
import styles from './HomeItem.module.scss';

const HomeItem = ({ item }) => {
  const history = useHistory();
  const convertCategory = category => {
    const [item] = categoryJSON.troubles.filter(item => item.id === category);
    if (item) return item.name;
    return '';
  };

  const handleClick = id => {
    history.push('/troubles/' + id);
  };

  return (  
    <div className={styles.wrap}>
      <article className={styles.item} onClick={() => handleClick(item.id)}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.category}>{convertCategory(item.category)}</span>
        <span className={styles.date}>{convertSQLDate(item.createdAt)}</span>
      </article>
    </div>
  );
}
 
export default HomeItem;