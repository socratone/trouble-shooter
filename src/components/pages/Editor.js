import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postTroublesItem } from '../../api/troubles';
import { setPageHead } from '../../store/reducers/editor';
import PageItem from '../Editor/PageItem';
import styles from './Editor.module.scss';

const Editor = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('js');
  const [page, setPage] = useState({ 
    items: [], 
    previewCode: { 
      html: '',
      css: '',
      js: ''
    }
  });
  const pageHead = useSelector(state => state.ui.editor.pageHead);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageHead({ pageHead: -1 }));
  }, []);
  
  const handleTitleInput = ({ target }) => {
    setTitle(target.value);
  };

  const handleCategoryInput = ({ target }) => {
    setCategory(target.value);
  };

  const handlePlusButton = type => {
    const newPage = {...page};
    newPage.items.splice(pageHead + 1, 0, { type: type, value: '' });
    setPage(newPage);
    dispatch(setPageHead({ pageHead: pageHead + 1 }));
  };

  const handlePageItemInput = ({ target, index }) => {
    const newPage = {...page};
    newPage.items[index] = { type: newPage.items[index].type, value: target.value };
    setPage(newPage);
  };

  const handlePageItemX = index => {
    if (index > pageHead) {
      const newPage = {...page};
      newPage.items.splice(index, 1);
      setPage(newPage);
    } else {
      dispatch(setPageHead({ pageHead: pageHead - 1 }));
      const newPage = {...page};
      newPage.items.splice(index, 1);
      setPage(newPage);
    }
  };

  const handleSubmitButton = async () => {
    if (title.length < 1) return alert('제목을 입력하세요.');
    if (page.items.length < 1) return alert('본문을 입력하세요.')
    const result = await postTroublesItem({ title, category, page });
    console.log('result:', result)
  };

  const handleHTMLInput = ({ target }) => {
    const newPage = {...page};
    newPage.previewCode.html = target.value;
    setPage(newPage);
  };

  const handleCSSInput = ({ target }) => {
    const newPage = {...page};
    newPage.previewCode.css = target.value;
    setPage(newPage);
  };

  const handleJSInput = ({ target }) => {
    const newPage = {...page};
    newPage.previewCode.js = target.value;
    setPage(newPage);
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
          <div className={styles.pageItemButtonWrap}>
            <button className={styles.addPageItemButton} onClick={() => handlePlusButton('title')}>
              Title
            </button>
            <button className={styles.addPageItemButton} onClick={() => handlePlusButton('text')}>
              Text
            </button>
            <button className={styles.addPageItemButton} onClick={() => handlePlusButton('subTitle')}>
              SubTitle
            </button>
            <button className={styles.addPageItemButton} onClick={() => handlePlusButton('list')}>
              List
            </button>
            <button className={styles.addPageItemButton} onClick={() => handlePlusButton('html')}>
              HTML
            </button>
            <button className={styles.addPageItemButton} onClick={() => handlePlusButton('css')}>
              CSS
            </button>
            <button className={styles.addPageItemButton} onClick={() => handlePlusButton('js')}>
              JavaScript
            </button>
          </div>
        </div>
        <div className={styles.pageItemWrap}>
          {page.items.map((input, i) => <PageItem 
            key={i} 
            type={input.type} 
            value={input.value} 
            handlePageItemInput={handlePageItemInput} 
            handlePageItemX={handlePageItemX}
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
 
export default Editor;