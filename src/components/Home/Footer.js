import React from 'react';
import { useHistory } from 'react-router-dom';
import NormalPageFrame from '../common/NormalPageFrame';
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
    <div className={styles.wrap}>
      <NormalPageFrame>
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
      </NormalPageFrame>
    </div>
  );
}
 
export default Footer;