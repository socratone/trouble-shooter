import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavItem.module.scss';

const NavItem = ({ to, children }) => {
  return (  
    <div className={styles.wrap}>
      <Link 
        to={to} 
        className={styles.item}
      >
        {children}
      </Link>   
    </div>
  );
}
 
export default NavItem;