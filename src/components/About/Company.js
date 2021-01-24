import React from 'react';
import styles from './Company.module.scss';

const Company = ({ image, name, position, term }) => {
  return (  
    <article className={styles.company}>
      <img 
        src={image} 
        className={styles.image}
        width="100"/>
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.position}>{position}</p>
      <p className={styles.term}>{term}</p>
    </article>
  );
}
 
export default Company;