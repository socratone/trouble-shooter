import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageHead, setPage } from '../../store/reducers/troublesEditor';
import styles from './AddPageItemButton.module.scss';

const AddPageItemButton = ({ type }) => {
  const page = useSelector(state => state.ui.troublesEditor.page);
  const pageHead = useSelector(state => state.ui.troublesEditor.pageHead);
  const dispatch = useDispatch();

  const handleClick = type => {
    const items = [...page.items];
    const newPage = {...page};
    items.splice(pageHead + 1, 0, { type: type, value: '' }); // url은 생성하지 않는다.
    newPage.items = items;
    dispatch(setPage({ page: newPage }));
    dispatch(setPageHead({ pageHead: pageHead + 1 }));
  };

  return (  
    <button 
      className={styles.addPageItemButton} 
      onClick={() => handleClick(type)}>
        {type}
    </button>
  );
}
 
export default AddPageItemButton;