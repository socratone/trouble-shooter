import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPreviewCode, removePreviewCode } from '../../store/reducers/previewCode';
import Dropdown from '../common/Dropdown';
import adoptJSColor from '../../helper/adoptJSColor';
import adoptCSSColor from '../../helper/adoptCSSColor';
import adoptHTMLColor from '../../helper/adoptHTMLColor';
import styles from './Code.module.scss';

const Pre = ({ type, setCurrentCode }) => {
  const pre = useRef(null);
  const previewCode = useSelector(state => state.entities.previewCode);
  const [initialCode, setInitialCode] = useState('');

  useEffect(() => {
    if (type === 'html') setInitialCode(previewCode.html);
    else if (type === 'css') setInitialCode(previewCode.css);
    else if (type === 'js') setInitialCode(previewCode.js);
  }, []);

  const handleKeyUp = () => {
    setCurrentCode(pre.current.textContent);
  };

  return (  
    <pre 
      ref={pre}
      className={styles.code} 
      onKeyUp={handleKeyUp} 
      contentEditable
    >
      {type === 'html' && adoptHTMLColor(initialCode)}
      {type === 'css' && adoptCSSColor(initialCode)}
      {type === 'js' && adoptJSColor(initialCode)}
    </pre>
  );
}

const PreviewCode = ({ type }) => {
  const [dropdown, setDropdown] = useState('');
  const [currentCode, setCurrentCode] = useState('');
  const dispatch = useDispatch();

  const showTitle = () => {
    if (type === 'html') return <p className={styles.htmlTitle}>Html</p>
    if (type === 'js') return <p className={styles.jsTitle}>JS</p>
    if (type === 'css') return <p className={styles.cssTitle}>CSS</p>
  };

  const copyCodeToClipboard = () => {
    console.log('clicked')
  };

  const saveCodeAsFile = () => {
    console.log('clicked')
  };

  const applyCodeToPreview = () => {
    if (currentCode) {
      dispatch(setPreviewCode({
        [type]: currentCode
      }));
    }
  };

  const handleButtonClick = color => {
    if (dropdown !== '') setDropdown('');
    else setDropdown(color);
  };

  const handleButtonBlur = color => {
    setTimeout(() => {
      if (dropdown === color) setDropdown('');
    }, 200);
  }

  return (
    <div className={styles.codeWrap}>
      <header className={styles.header}>
        <div className={styles.buttonWrap}>
          <button 
            className={styles.redButton} 
            onClick={() => handleButtonClick('red')} 
            onBlur={() => handleButtonBlur('red')} 
          >
            {dropdown === 'red' && <Dropdown top="27px" left="-18.5px">
              <li onClick={copyCodeToClipboard}>클립보드에 복사</li>
            </Dropdown>}
          </button>
          <button 
            className={styles.orangeButton} 
            onClick={() => handleButtonClick('orange')} 
            onBlur={() => handleButtonBlur('orange')}
          >
            {dropdown === 'orange' && <Dropdown top="27px" left="-18.5px">
              <li onClick={saveCodeAsFile}>파일로 저장</li>
            </Dropdown>}
          </button>
          <button 
            className={styles.greenButton} 
            onClick={() => handleButtonClick('blue')} 
            onBlur={() => handleButtonBlur('blue')} 
          >
            {dropdown === 'blue' && <Dropdown top="27px" left="-18.5px">
              <li onClick={applyCodeToPreview}>Preview에 적용</li>
            </Dropdown>}
          </button>
        </div>
        {showTitle()}
      </header>
      <Pre type={type} setCurrentCode={setCurrentCode} />
    </div>
  );
}
 
export default PreviewCode;