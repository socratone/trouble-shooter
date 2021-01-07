import React from 'react';
import styles from './Dropdown.module.scss';

const Dropdown = ({ top, left, children }) => {
  return (  
    <ul 
      className={styles.dropdown}
      style={{ top, left }}
    >
      <div className={styles.after} />
      {children}
    </ul>
  );
}
 
export default Dropdown;