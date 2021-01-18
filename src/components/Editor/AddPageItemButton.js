import React from 'react';
import styles from './AddPageItemButton.module.scss';

const AddPageItemButton = ({ name, onClick }) => {
  return (  
    <div className={styles.wrap}>
      <button 
        className={styles.button} 
        onClick={onClick}>
          {name}
      </button>
    </div>
  );
}
 
export default AddPageItemButton;