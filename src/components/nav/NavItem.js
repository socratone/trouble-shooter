import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './NavItem.module.scss';

const NavItem = ({ to, margin, children }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(to);
  };

  return (  
    <li className={styles.wrap} style={{ margin }} onClick={handleClick}>
      <p className={styles.item} href="#" >
        {children}
      </p>   
    </li>
  );
}
 
export default NavItem;