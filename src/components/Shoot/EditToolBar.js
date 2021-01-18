import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteItem } from '../../api/item';
import YesNoModal from '../modal/YesNoModal';
import PencilIcon from '../icon/PencilIcon';
import TrashIcon from '../icon/TrashIcon';
import styles from './EditToolBar.module.scss';

const EditToolBar = ({ id }) => {
  const [modal, setModal] = useState('');
  const history = useHistory();

  const handleEdit = () => {
    history.push('/editor/' + id);
  };

  const handleErase = () => {
    setModal('remove');
  };

  const requestRemoveItem = async () => {
    const result = await deleteItem(id);
    if (result.error) {
      setModal('');
      return alert(result.error.message);
    }
    history.push('/');
  };

  const showRemoveModal = () => (
    <YesNoModal 
      text="정말로 삭제하시겠습니까?"
      yes={() => requestRemoveItem()} 
      no={() => setModal('')} 
    />
  );

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
      {modal === 'remove' && showRemoveModal()}
    </>
  );
}
 
export default EditToolBar;