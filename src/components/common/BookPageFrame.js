import React from 'react';
import styles from './BookPageFrame.module.scss';

const BookPageFrame = ({ children }) => {
  return (  
    <div className={styles.frameWrap}>
      <div className={styles.frame}>
        {children}
      </div>
    </div>
  );
}
 
export default BookPageFrame;