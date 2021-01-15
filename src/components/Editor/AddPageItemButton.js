import React from 'react';
import styles from './AddPageItemButton.module.scss';

const AddPageItemButton = ({ name, onClick }) => {
  return (  
    <button 
      className={styles.addPageItemButton} 
      onClick={onClick}>
        {name}
    </button>
  );
}
 
export default AddPageItemButton;