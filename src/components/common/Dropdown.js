import React, { useEffect, useRef } from 'react';
import filterNumber from '../../helper/filterNumber';
import styles from './Dropdown.module.scss';

const SLIDE_LENGTH = 10;

const Dropdown = ({ top, left, children }) => {
  const dropdown = useRef(null);
  useEffect(() => {
    if (dropdown.current) dropdown.current.style.top = top;
  }, [dropdown]);

  return (  
    <ul 
      ref={dropdown}
      className={styles.dropdown}
      style={{ top: (filterNumber(top) - SLIDE_LENGTH) + 'px', left }}
    >
      <div className={styles.after} />
      {children}
    </ul>
  );
}
 
export default Dropdown;