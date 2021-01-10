import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPreviewCode } from '../../store/reducers/previewCode';
import adoptJSColor from '../../helper/adoptJSColor';
import adoptCSSColor from '../../helper/adoptCSSColor';
import adoptHTMLColor from '../../helper/adoptHTMLColor';
import CopyIcon from '../icon/CopyIcon';
import styles from './Code.module.scss';

const SAVE_INTERVAL = 2000;

let timer;
const Pre = ({ type, handleKeyUp }) => {
  const pre = useRef(null);
  const previewCode = useSelector(state => state.entities.previewCode);
  const [initialCode, setInitialCode] = useState('');

  useEffect(() => {
    if (type === 'html') setInitialCode(previewCode.html);
    else if (type === 'css') setInitialCode(previewCode.css);
    else if (type === 'js') setInitialCode(previewCode.js);
  }, []);

  return (  
    <pre 
      ref={pre}
      className={styles.code} 
      onKeyUp={() => handleKeyUp(pre.current.textContent)} 
      contentEditable
      suppressContentEditableWarning
    >
      {type === 'html' && adoptHTMLColor(initialCode)}
      {type === 'css' && adoptCSSColor(initialCode)}
      {type === 'js' && adoptJSColor(initialCode)}
    </pre>
  );
}

const PreviewCode = ({ type }) => {
  const dispatch = useDispatch();

  const showTitle = () => {
    if (type === 'html') return <p className={styles.title}>HTML</p>
    if (type === 'css') return <p className={styles.title}>CSS</p>
    if (type === 'js') return <p className={styles.title}>JavaScript</p>
  };

  const copyCodeToClipboard = () => {
    console.log('clicked')
  };

  const applyCodeToPreview = code => {
    dispatch(setPreviewCode({ [type]: code }));
  };

  const handleCodeKeyUp = code => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      applyCodeToPreview(code);
    }, SAVE_INTERVAL);
  };

  return (
    <div className={styles.codeWrap}>
      <header className={styles.header}>
        {showTitle()}
        <p className={styles.copy} onClick={copyCodeToClipboard}>
          <CopyIcon size="12" />
        </p>
      </header>
      <Pre type={type} handleKeyUp={handleCodeKeyUp} />
    </div>
  );
}
 
export default PreviewCode;