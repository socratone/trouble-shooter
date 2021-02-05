import React, { useEffect, useRef } from 'react';
import filterNumber from '../../helper/filterNumber';
import styles from './Dropdown.module.scss';

const SLIDE_LENGTH = 10;

const Dropdown = ({ top, left, right, children }) => {
  const dropdown = useRef(null);
  useEffect(() => {
    if (dropdown.current) dropdown.current.style.top = top;
  }, [dropdown, top]);

  const setArrowDirection = () => {
    if (right === undefined) return { left: '16px' };
    else return { right: '16px' };
  };

  return (  
    <ul 
      ref={dropdown}
      className={styles.dropdown}
      style={{ top: (filterNumber(top) - SLIDE_LENGTH) + 'px', left, right }}
    >
      <div className={styles.after} style={setArrowDirection()} />
      {children}
    </ul>
  );
}
 
export default Dropdown;