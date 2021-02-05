import React from 'react';
import { useHistory } from 'react-router-dom';
import PencilIcon from '../icon/PencilIcon';
import TrashIcon from '../icon/TrashIcon';
import styles from './EditToolBar.module.scss';

const EditToolBar = ({ id }) => {
  const history = useHistory();

  const handleEdit = () => {
    history.push('/editor/' + id);
  };

  const handleErase = () => {
    history.push('/delete/' + id);
  };

  return (  
    <>
      <div className={styles.wrap}>
        <button className={styles.button} onClick={handleEdit}>
          <PencilIcon size="18" color="grey" />
        </button>
        <button className={styles.button} onClick={handleErase}>
          <TrashIcon size="18" color="grey" />
        </button>
      </div>
    </>
  );
}
 
export default EditToolBar;