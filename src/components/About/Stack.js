import React from 'react';
import styles from './Stack.module.scss';

const Stack = ({ children }) => {
  return (  
    <li className={styles.stack}>
      {children}
    </li>
  );
}
 
export default Stack;