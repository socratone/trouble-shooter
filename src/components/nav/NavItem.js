import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './NavItem.module.scss';

const NavItem = ({ to, margin, children }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(to);
  };

  return (  
    <div className={styles.wrap} style={{ margin }} onClick={handleClick}>
      <a className={styles.item}>
        {children}
      </a>   
    </div>
  );
}
 
export default NavItem;