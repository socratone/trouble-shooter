import React from 'react';
import SectionHeader from './SectionHeader';
import styles from './Footer.module.scss';

const Footer = () => {
  return (  
    <footer className={styles.footer}>
      <SectionHeader title="Thank You" bright>
      </SectionHeader>
    </footer>
  );
}
 
export default Footer;