import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPreviewCode } from '../../store/reducers/previewCode';
import { setIndicator } from '../../store/reducers/preview';
import adoptJSColor from '../../helper/adoptJSColor';
import adoptCSSColor from '../../helper/adoptCSSColor';
import adoptHTMLColor from '../../helper/adoptHTMLColor';
import CopyIcon from '../icon/CopyIcon';
import styles from './Code.module.scss';

const SAVE_INTERVAL = 1000;
let codeTimer;
let clipboardTimer;

const Pre = ({ type, handleKeyUp }) => {
  const pre = useRef(null);
  const previewCode = useSelector(state => state.entities.previewCode);
  const [colorCode, setColorCode] = useState('');

  useEffect(() => {
    if (type === 'html') setColorCode(previewCode.html); 
    else if (type === 'css') setColorCode(previewCode.css);
    else if (type === 'js') setColorCode(previewCode.js);
  }, []);

  const handleBlur = async () => {
    const text = pre.current.textContent;
    await setColorCode('');
    console.log('text:', text)
    setColorCode(text);
  };

  if (!colorCode) return null;

  return (  
    <pre 
      ref={pre}
      className={styles.code} 
      onKeyUp={() => handleKeyUp(pre.current)} 
      // onBlur={handleBlur}
      contentEditable
      suppressContentEditableWarning
    >
      {type === 'html' && adoptHTMLColor(colorCode)}
      {type === 'css' && adoptCSSColor(colorCode)}
      {type === 'js' && adoptJSColor(colorCode)}
    </pre>
  );
}

const PreviewCode = ({ type }) => {
  const [currentCode, setCurrentCode] = useState('');
  const [message, setMessage] = useState('');
  const previewCode = useSelector(state => state.entities.previewCode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === 'html') setCurrentCode(previewCode.html);
    else if (type === 'css') setCurrentCode(previewCode.css);
    else if (type === 'js') setCurrentCode(previewCode.js);
  }, []);

  const showTitle = () => {
    if (type === 'html') return <p className={styles.title}>HTML</p>
    if (type === 'css') return <p className={styles.title}>CSS</p>
    if (type === 'js') return <p className={styles.title}>JavaScript</p>
  };

  const showMessage = () => {
    return <p className={styles.message}>{message}</p>
  };

  const copyCodeToClipboard = () => {
    const textarea = document.createElement('textarea');
    textarea.textContent = currentCode;
    document.body.append(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();

    setMessage('');
    clearTimeout(clipboardTimer);
    setMessage('clipboard에 복사했습니다.');
    clipboardTimer = setTimeout(() => setMessage(''), 2000);
  };

  const applyCodeToPreview = code => {
    dispatch(setPreviewCode({ [type]: code }));
  };

  const handleCodeKeyUp = pre => {
    dispatch(setIndicator({ isIndicator: true }));
    setCurrentCode(pre.textContent);
    clearTimeout(codeTimer);
    codeTimer = setTimeout(() => {
      applyCodeToPreview(pre.textContent);
      dispatch(setIndicator({ isIndicator: false }));
    }, SAVE_INTERVAL);
  };

  return (
    <div className={styles.codeWrap}>
      <header className={styles.header}>
        {showTitle()}
        {message && showMessage()}
        <p className={styles.copy} onClick={copyCodeToClipboard}>
          <CopyIcon size="12" />
        </p>
      </header>
      <Pre type={type} handleKeyUp={handleCodeKeyUp} />
    </div>
  );
}
 
export default PreviewCode;