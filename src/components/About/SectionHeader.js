import React from 'react';
import styles from './SectionHeader.module.scss';

const SectionHeader = ({ title, children, bright }) => {
  const setBackground = () => {
    if (bright) return 'whitesmoke';
  };

  const setColor = () => {
    if (bright) return 'black';
  };

  return (  
    <header className={styles.header} style={{ background: setBackground()}}>
      <h2 className={styles.headerTitle} style={{ color: setColor() }}>
        {title}
      </h2>
      <p className={styles.headerText} style={{ color: setColor() }}>
        {children}
      </p>
    </header>
  );
}
 
export default SectionHeader;