import React from 'react';
import styles from './Dropdown.module.scss';

const Dropdown = ({ top, right, width, children }) => {
  return (  
    <ul 
      className={styles.dropdown}
      style={{ 
        top,
        right: right ? 0 : undefined,
        width
      }}
    >
      {children}
    </ul>
  );
}
 
export default Dropdown;