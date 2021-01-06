import React from 'react';
import styles from './List.module.scss';

const List = ({ children }) => {
  return (  
    <li className={styles.li}>
      <div className={styles.dotWrap}>
        <div className={styles.dot}>•</div>
      </div>
      <p className={styles.text}>{children}</p>
    </li>
  );
}
 
export default List;