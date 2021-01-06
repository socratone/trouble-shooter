import React from 'react';
import LinkArrowIcon from '../icon/LinkArrowIcon';
import styles from './Link.module.scss';

const Link = ({ children }) => {
  return (  
    <li className={styles.li}>
      <div className={styles.arrowWrap}>
        <div className={styles.arrow}><LinkArrowIcon size={13}/></div>
      </div>
      <a 
        className={styles.text} 
        href={children}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    </li>
  );
}
 
export default Link;