import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  const history = useHistory();

  const handleAdminButton = () => {
    history.push('/admin');
  };

  const handleEditorButton = () => {
    history.push('/editor');
  };
  
  return (  
    <footer className={styles.footer}>
      <div className={styles.item}>© 2021 Socratone</div>
      <div className={styles.item}>
        <button className={styles.admin} onClick={handleAdminButton}>
          admin
        </button>
        <button className={styles.editor} onClick={handleEditorButton}>
          editor
        </button>
      </div>
    </footer>
  );
}
 
export default Footer;