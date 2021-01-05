import React from 'react';
import styles from './PageFrame.module.scss';

const PageFrame = ({ children }) => {
  return (  
    <div className={styles.frameWrap}>
      <div className={styles.frame}>
        {children}
      </div>
    </div>
  );
}
 
export default PageFrame;