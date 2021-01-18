import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { putImageFile, listImageFiles, deleteImageFile } from '../../api/S3';
import { setPageHead, setPage } from '../../store/reducers/editor';
import XIcon from '../icon/XIcon';
import styles from './PageItem.module.scss';

const s3URL = process.env.REACT_APP_S3_URL;

const PageItem = ({ type, value, url, width, index }) => {
  const [previewImage, setPreviewImage] = useState('');
  const page = useSelector(state => state.entities.editor.page);
  const pageHead = useSelector(state => state.entities.editor.pageHead);
  const inputFile = useRef(null);
  const dispatch = useDispatch();

  const changeLineColor = () => {
    if (index === pageHead) return 'dodgerblue';
  };

  const handleLineClick = () => {
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
    items[index] = { type: 'link', value: target.value, url };
    newPage.items = items;
    dispatch(setPage({ page: newPage }));
  };

  const handleLinkURLChange = ({ target }) => {
    const items = [...page.items];
    const newPage = {...page};
    items[index] = { type: 'link', value, url: target.value };
    newPage.items = items;
    dispatch(setPage({ page: newPage }));
  };

  const validateImageFile = () => {
    if (type !== 'image') return true;
    if (!url) return true;
    return false;
  };

  const handleXButtonClick = () => {
    if (!validateImageFile()) return alert('업로드한 이미지 파일을 삭제해야 합니다.');
    const items = [...page.items];
    const newPage = {...page};
    if (index <= pageHead) dispatch(setPageHead({ pageHead: pageHead - 1 }));
    items.splice(index, 1);
    newPage.items = items;
    dispatch(setPage({ page: newPage }));
  };

  const previewImageFile = ({ target }) => {
    if (target.files && target.files[0]) {
      const reader = new FileReader();
      reader.onload = ({ target }) => {
        setPreviewImage(target.result);
      }
      reader.readAsDataURL(target.files[0]);
    } else {
      setPreviewImage('');
    }
  };

  const handleImageWidthChange = ({ target }) => { // width 수정
    const items = [...page.items];
    const newPage = {...page};
    items[index] = { type: 'image', value, url, width: target.value };
    newPage.items = items;
    dispatch(setPage({ page: newPage }));
  };

  const handleImageKeyChange = () => { // value 수정
    const file = inputFile.current.files[0];
    const items = [...page.items];
    const newPage = {...page};
    if (file) {
      items[index] = { type: 'image', value: file.name, url, width };
    } else {
      items[index] = { type: 'image', value: '', url, width };
    }
    newPage.items = items;
    dispatch(setPage({ page: newPage }));
  };

  const uploadImage = async () => { // url 수정
    const file = inputFile.current.files[0];
    if (!file) return alert('파일이 존재하지 않습니다.');
    
    const key = 'assets/troubles/' + file.name;

    // 같은 이름의 이미지 파일이 S3에 있는지 확인
    const s3Files = await listImageFiles('/assets/troubles/');
    if (s3Files.error) return alert(s3Files.error.message);
    const [sameFile] = s3Files.filter(s3File => s3File.Key === key);
    if (sameFile) return alert('같은 이름의 이미지 파일이 이미 존재합니다.');
    
    // 이미지 파일 S3에 업로드
    const result = await putImageFile({ file, key });
    if (result.error) return alert(result.error.message);

    // state 업데이트
    setPreviewImage('');

    const items = [...page.items];
    const newPage = {...page};
    items[index] = { type: 'image', value, url: key, width };
    newPage.items = items;
    dispatch(setPage({ page: newPage }));
  };

  const removeImage = async () => {
    const result = await deleteImageFile(url);
    if (result.error) return alert(result.error.message);

    // state 업데이트
    const items = [...page.items];
    const newPage = {...page};
    items[index] = { type: 'image', value: '', url: '', width };
    newPage.items = items;
    dispatch(setPage({ page: newPage }));
  };

  const showInput = () => {
    if (type === 'text') {
      return <textarea 
        value={value} 
        onChange={handleInputChange}
        className={styles.textArea}/>
    } else if (type === 'html' || type === 'css' || type === 'js') {
      return <textarea 
        value={value} 
        onChange={handleInputChange}
        className={styles.code}/>
    } else if (type === 'link') {
      return <>
        <input
          type="text" 
          value={value} 
          onChange={handleLinkTextChange}
          className={styles.textInput}
          style={{ marginBottom: '10px' }}
          placeholder="제목"/>
        <input
          type="text" 
          value={url} 
          onChange={handleLinkURLChange}
          className={styles.textInput}
          placeholder="URL"/>
      </>
    } else if (type === 'image') {
      return <>
        {!url && <input 
          ref={inputFile} 
          className={styles.fileInput} 
          type="file" 
          accept="image/png, image/jpeg"
          onChange={e => {
            previewImageFile(e);
            handleImageKeyChange();
          }}
        />}
        <input
          type="text" 
          value={width} 
          onChange={handleImageWidthChange}
          className={styles.textInput}
          style={{ marginBottom: '10px' }}
          placeholder="width"/>
        {previewImage && !url && <>
          <button onClick={uploadImage} className={styles.imagehandleButton}>이미지 올리기</button>
          <p className={styles.imageText}>업로드 할 이미지 미리보기</p>
          <img src={previewImage} className={styles.image} style={{ width }} />
        </>}
        {url && <>
          <button onClick={removeImage} className={styles.imagehandleButton}>이미지 삭제하기</button>
          <p className={styles.imageText}>업로드된 이미지</p>
          <img src={s3URL + '/' + url} className={styles.image} style={{ width }} />
        </>}
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
          onClick={handleXButtonClick}>
            <XIcon size="10" color="grey"/>
        </button>
      </header>
      {showInput()}
      <div 
        className={styles.line} 
        onClick={handleLineClick}
        style={{ background: changeLineColor() }} />
    </article>
  );
}

export default PageItem;