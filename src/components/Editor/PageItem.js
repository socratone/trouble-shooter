import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageHead } from '../../store/reducers/editor';
import styles from './PageItem.module.scss';

const PageItem = ({ type, value, handlePageItemInput, handlePageItemX, index }) => {
  const pageHead = useSelector(state => state.ui.editor.pageHead);
  const dispatch = useDispatch();

  const changeLineColor = () => {
    if (index === pageHead) return 'dodgerblue';
  };

  const handleLine = () => {
    dispatch(setPageHead({ pageHead: index }));
  };

  return (
    <article className={styles.item}>
      <header className={styles.header}>
        <p>{type}</p>
        <button 
          className={styles.xButton} 
          onClick={() => handlePageItemX(index)}>
            X
        </button>
      </header>
      {type !== 'text' && <input
        type="text" 
        value={value} 
        onChange={({ target }) => handlePageItemInput({ target, index })}
        className={styles.text}/>}
      {type === 'text' && <textarea 
        value={value} 
        onChange={({ target }) => handlePageItemInput({ target, index })}
        className={styles.textArea}/>}
      <div 
        className={styles.line} 
        onClick={handleLine}
        style={{ background: changeLineColor() }} />
    </article>
  );
}

export default PageItem;