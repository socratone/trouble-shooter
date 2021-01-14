import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageHead, setPage } from '../../store/reducers/troublesEditor';
import styles from './PageItem.module.scss';

const PageItem = ({ type, value, url, index }) => {
  const page = useSelector(state => state.ui.troublesEditor.page);
  const pageHead = useSelector(state => state.ui.troublesEditor.pageHead);
  const dispatch = useDispatch();

  const changeLineColor = () => {
    if (index === pageHead) return 'dodgerblue';
  };

  const handleLine = () => {
    dispatch(setPageHead({ pageHead: index }));
  };

  const handleInputChange = ({ target }) => {
    const items = [...page.items];
    const newPage = {...page};
    items[index] = { type: newPage.items[index].type, value: target.value };
    newPage.items = items;
    dispatch(setPage({ page: newPage }));
  };

  const handleLinkTextChange = ({ target }) => {
    const items = [...page.items];
    const newPage = {...page};
    items[index] = { type: newPage.items[index].type, value: target.value, url };
    newPage.items = items;
    dispatch(setPage({ page: newPage }));
  };

  const handleLinkURLChange = ({ target }) => {
    const items = [...page.items];
    const newPage = {...page};
    items[index] = { type: newPage.items[index].type, value, url: target.value };
    newPage.items = items;
    dispatch(setPage({ page: newPage }));
  };

  const handleX = () => {
    const items = [...page.items];
    const newPage = {...page};
    if (index <= pageHead) dispatch(setPageHead({ pageHead: pageHead - 1 }));
    items.splice(index, 1);
    newPage.items = items;
    dispatch(setPage({ page: newPage }));
  };

  const showInput = () => {
    if (type === 'text') {
      return <textarea 
        value={value} 
        onChange={handleInputChange}
        className={styles.textArea}/>
    } else if (type === 'link') {
      return <>
        <input
          type="text" 
          value={value} 
          onChange={handleLinkTextChange}
          className={styles.textInput}
          style={{ marginBottom: '10px' }}/>
        <input
          type="text" 
          value={url} 
          onChange={handleLinkURLChange}
          className={styles.textInput}/>
      </>
    } else {
      return <input
        type="text" 
        value={value} 
        onChange={handleInputChange}
        className={styles.textInput}/>
    }
  };

  return (
    <article className={styles.item}>
      <header className={styles.header}>
        <p>{type}</p>
        <button 
          className={styles.xButton} 
          onClick={handleX}>
            X
        </button>
      </header>
      {showInput()}
      <div 
        className={styles.line} 
        onClick={handleLine}
        style={{ background: changeLineColor() }} />
    </article>
  );
}

export default PageItem;