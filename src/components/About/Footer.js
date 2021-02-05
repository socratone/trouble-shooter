import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (  
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        © 2021 Socratone
      </p>
    </footer>
  );
}
 
export default Footer;