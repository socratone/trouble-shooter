import React from 'react';
import styles from './Dropdown.module.scss';

const Dropdown = ({ top, left, width, children }) => {
  return (  
    <ul 
      className={styles.dropdown}
      style={{ 
        top,
        left,
        width
      }}
    >
      <div className={styles.after} />
      {children}
    </ul>
  );
}
 
export default Dropdown;