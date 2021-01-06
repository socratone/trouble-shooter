import React from 'react';
import LinkArrowIcon from '../icon/LinkArrowIcon';
import styles from './Link.module.scss';

const Link = ({ url, children }) => {
  return (  
    <li className={styles.li}>
      <div className={styles.arrowWrap}>
        <div className={styles.arrow}><LinkArrowIcon size={13}/></div>
      </div>
      {children && <a 
        className={styles.title}
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {children + ' '}
      </a>}
      <a 
        className={styles.link} 
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {url}
      </a>
    </li>
  );
}
 
export default Link;