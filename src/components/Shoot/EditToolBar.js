import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteTroublesItem } from '../../api/troubles';
import YesNoModal from '../modal/YesNoModal';
import styles from './EditToolBar.module.scss';

const EditToolBar = ({ page, id }) => {
  const [modal, setModal] = useState('');
  const history = useHistory();

  const handleEdit = () => {
    history.push('/' + page + '-editor/' + id);
  };

  const handleErase = () => {
    setModal('remove');
  };

  const requestRemoveItem = async () => {
    console.log('삭제 요청');
    const result = await deleteTroublesItem(id);
    if (result.error) {
      setModal('');
      return alert(result.error.message);
    }
    history.push('/' + page);
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
        <button className={styles.editButton} onClick={handleEdit}>edit</button>
        <button className={styles.eraseButton} onClick={handleErase} >erase</button>
      </div>
      {modal === 'remove' && showRemoveModal()}
    </>
  );
}
 
export default EditToolBar;