import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  const history = useHistory();

  const handleAdminButton = () => {
    history.push('/admin');
  };
  
  return (  
    <footer className={styles.footer}>
      <div className={styles.item}>© 2021 Socratone</div>
      <div className={styles.item}>
        <a className={styles.admin} onClick={handleAdminButton}>admin</a>
      </div>
    </footer>
  );
}
 
export default Footer;