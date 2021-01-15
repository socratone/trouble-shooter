import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postTroublesItem } from '../../api/troubles';
import { setPageHead, setPage, setTitle, setCategory } from '../../store/reducers/troublesEditor';
import AddPageItemButton from '../Editor/AddPageItemButton';
import PageItem from '../Editor/PageItem';
import styles from './Editor.module.scss';

const TroublesEditor = () => {
  const title = useSelector(state => state.ui.troublesEditor.title);
  const category = useSelector(state => state.ui.troublesEditor.category);
  const page = useSelector(state => state.ui.troublesEditor.page);
  const pageHead = useSelector(state => state.ui.troublesEditor.pageHead);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageHead({ pageHead: -1 }));
  }, []);
  
  const handleTitleInput = ({ target }) => {
    dispatch(setTitle({ title: target.value }));
  };
  
  const handleCategoryInput = ({ target }) => {
    dispatch(setCategory({ category: target.value }));
  };

  const handleSubmitButton = async () => {
    if (title.length < 1) return alert('제목을 입력하세요.');
    if (page.items.length < 1) return alert('본문을 입력하세요.')
    const result = await postTroublesItem({ title, category, page });
    console.log('result:', result)
  };

  const addPageItem = type => {
    const items = [...page.items];
    const newPage = {...page};
    items.splice(pageHead + 1, 0, { type: type, value: '' }); // url은 생성하지 않는다.
    newPage.items = items;
    dispatch(setPage({ page: newPage }));
    dispatch(setPageHead({ pageHead: pageHead + 1 }));
  };

  const handleHTMLInput = ({ target }) => {
    const newPage = {...page};
    newPage.previewCode.html = target.value;
    dispatch(setPage({ page: newPage }));
  };

  const handleCSSInput = ({ target }) => {
    const newPage = {...page};
    newPage.previewCode.css = target.value;
    dispatch(setPage({ page: newPage }));
  };

  const handleJSInput = ({ target }) => {
    const newPage = {...page};
    newPage.previewCode.js = target.value;
    dispatch(setPage({ page: newPage }));
  };

  return (  
    <main className={styles.editor}>
      <div className={styles.item}>
        <p className={styles.title}>제목</p>
        <input type="text" className={styles.textInput} value={title} onChange={handleTitleInput}/>
      </div>
      <div className={styles.item}>
        <p className={styles.title}>카테고리</p>
        <select name="cars" id="cars" className={styles.select} value={category} onChange={handleCategoryInput}>
          <optgroup label="카테고리">
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">JavaScript</option>
          </optgroup>
        </select>
      </div>
      <div className={styles.item}>
        <div className={styles.pageHead}>
          <p className={styles.title}>본문</p>
          <div className={styles.addPageItemButtonWrap}>
            <AddPageItemButton name="Title" onClick={() => addPageItem('title')}/>
            <AddPageItemButton name="SubTitle" onClick={() => addPageItem('subTitle')}/>
            <AddPageItemButton name="Text" onClick={() => addPageItem('text')}/>
            <AddPageItemButton name="List" onClick={() => addPageItem('list')}/>
            <AddPageItemButton name="Link" onClick={() => addPageItem('link')}/>
            <AddPageItemButton name="HTML" onClick={() => addPageItem('html')}/>
            <AddPageItemButton name="CSS" onClick={() => addPageItem('css')}/>
            <AddPageItemButton name="JavaScript" onClick={() => addPageItem('js')}/>
          </div>
        </div>
        <div className={styles.pageItemWrap}>
          {page.items.map((item, i) => <PageItem 
            key={i} 
            type={item.type} 
            value={item.value} 
            url={item.url}
            index={i} 
          />)}
        </div>
      </div>
      <div className={styles.item}>
        <p className={styles.title}>HTML</p>
        <textarea type="text" className={styles.textArea} onChange={handleHTMLInput}/>
      </div>
      <div className={styles.item}>
        <p className={styles.title}>CSS</p>
        <textarea type="text" className={styles.textArea} onChange={handleCSSInput}/>
      </div>
      <div className={styles.item}>
        <p className={styles.title}>JavaScript</p>
        <textarea type="text" className={styles.textArea} onChange={handleJSInput}/>
      </div>
      <div className={styles.submitWrap}>
        <button 
          className={styles.submit} 
          onClick={handleSubmitButton}>
            Submit
        </button>
      </div>
    </main>
  );
}
 
export default TroublesEditor;