import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { postItem, putItem, getItem } from '../../api/item';
import { setPageHead, setPage, setTitle, setCategory } from '../../store/reducers/troublesEditor';
import NormalPageFrame from '../common/NormalPageFrame';
import AddPageItemButton from '../TroublesEditor/AddPageItemButton';
import PageItem from '../TroublesEditor/PageItem';
import styles from './TroublesEditor.module.scss';

const TroublesEditor = () => {
  const { id } = useParams();
  const user = useSelector(state => state.entities.user);
  const title = useSelector(state => state.entities.troublesEditor.title);
  const category = useSelector(state => state.entities.troublesEditor.category);
  const page = useSelector(state => state.entities.troublesEditor.page);
  const pageHead = useSelector(state => state.entities.troublesEditor.pageHead);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      if (id) { // 수정할 때
        const troublesItem = await getItem(id);
        if (troublesItem.error) return alert(troublesItem.error.message);
        const page = JSON.parse(troublesItem.page);

        dispatch(setTitle({ title: troublesItem.title }));
        dispatch(setCategory({ category: troublesItem.category }));
        dispatch(setPage({ page }));
        dispatch(setPageHead({ pageHead: page.items.length - 1 }));
      } else { // 새로운 글을 쓸 때
        dispatch(setPageHead({ pageHead: -1 }));
      }
    })();
  }, []);
  
  const handleTitleInput = ({ target }) => {
    dispatch(setTitle({ title: target.value }));
  };
  
  const handleCategoryInput = ({ target }) => {
    dispatch(setCategory({ category: target.value }));
  };

  const validateImageFile = () => {
    const images = page.items.filter(item => item.type === 'image');
    const incompletes = images.filter(item => !item.value || !item.url)
    if (incompletes.length > 0) return false;
    return true;
  };

  const handlePostButton = async () => {
    if (!validateImageFile()) return alert('이미지 파일 정보가 부족합니다.');
    if (title.length < 1) return alert('제목을 입력하세요.');
    if (page.items.length < 1) return alert('본문을 입력하세요.')
    const result = await postItem({ title, category, page });
    if (result.error) {
      console.log('error:', result.error)
      return alert(result.error.message); 
    }
    history.push('/troubles/' + result.insertId);
  };

  const handlePutButton = async () => {
    if (!validateImageFile()) return alert('이미지 파일 정보가 부족합니다.');
    if (title.length < 1) return alert('제목을 입력하세요.');
    if (page.items.length < 1) return alert('본문을 입력하세요.')
    const result = await putItem({ title, category, page }, id);
    if (result.error) {
      console.log('error:', result.error)
      return alert(result.error.message); 
    }
    history.push('/troubles/' + id);
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
    const previewCode = {...page.previewCode};
    const newPage = {...page};
    newPage.previewCode = previewCode;
    previewCode.html = target.value;
    dispatch(setPage({ page: newPage }));
  };

  const handleCSSInput = ({ target }) => {
    const previewCode = {...page.previewCode};
    const newPage = {...page};
    newPage.previewCode = previewCode;
    previewCode.css = target.value;
    dispatch(setPage({ page: newPage }));
  };

  const handleJSInput = ({ target }) => {
    const previewCode = {...page.previewCode};
    const newPage = {...page};
    newPage.previewCode = previewCode;
    previewCode.js = target.value;
    dispatch(setPage({ page: newPage }));
  };

  if (!user.isAdmin) return (
    <p style={{ padding: '20px', textAlign: 'center' }}>admin 인증이 필요합니다.</p>
  );

  return (  
    <NormalPageFrame>
      <main className={styles.editor}>
        <div className={styles.item}>
          <p className={styles.title}>제목</p>
          <input type="text" className={styles.textInput} value={title} onChange={handleTitleInput}/>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>카테고리</p>
          <select className={styles.select} value={category} onChange={handleCategoryInput}>
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
              <AddPageItemButton name="Image" onClick={() => addPageItem('image')}/>
            </div>
          </div>
          <div className={styles.pageItemWrap}>
            {page.items.map((item, i) => <PageItem 
              key={i} 
              type={item.type} 
              value={item.value} 
              url={item.url}
              width={item.width}
              index={i} 
            />)}
          </div>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>HTML</p>
          <textarea 
            type="text" 
            className={styles.code} 
            onChange={handleHTMLInput}
            value={page.previewCode.html}/>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>CSS</p>
          <textarea 
            type="text" 
            className={styles.code} 
            onChange={handleCSSInput}
            value={page.previewCode.css}/>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>JavaScript</p>
          <textarea 
            type="text" 
            className={styles.code} 
            onChange={handleJSInput}
            value={page.previewCode.js}/>
        </div>
        <div className={styles.submitWrap}>
          {!id && <button 
            className={styles.submit} 
            onClick={handlePostButton}>
              등록하기
          </button>}
          {id && <button 
            className={styles.submit} 
            onClick={handlePutButton}>
              수정하기
          </button>}
        </div>
      </main>
    </NormalPageFrame>
  );
}
 
export default TroublesEditor;