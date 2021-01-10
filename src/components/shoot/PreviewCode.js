import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPreviewCode, removePreviewCode } from '../../store/reducers/previewCode';
import Dropdown from '../common/Dropdown';
import adoptJSColor from '../../helper/adoptJSColor';
import adoptCSSColor from '../../helper/adoptCSSColor';
import adoptHTMLColor from '../../helper/adoptHTMLColor';
import CircleButton from '../common/CircleButton';
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
  const [dropdown, setDropdown] = useState('');
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

  const applyCodeToPreview = code => {
    dispatch(setPreviewCode({
      [type]: code
    }));
  };

  const handleButtonClick = color => {
    if (dropdown !== '') setDropdown('');
    else setDropdown(color);
  };

  const handleButtonBlur = color => {
    setTimeout(() => {
      if (dropdown === color) setDropdown('');
    }, 200);
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
        <div className={styles.buttonWrap}>
          <CircleButton 
            red
            onClick={() => handleButtonClick('red')} 
            onBlur={() => handleButtonBlur('red')} >
              {dropdown === 'red' && <Dropdown top="27px" left="-18.5px">
                <li onClick={copyCodeToClipboard}>클립보드에 복사</li>
              </Dropdown>}
          </CircleButton>
          <CircleButton 
            onClick={() => handleButtonClick('orange')} 
            onBlur={() => handleButtonBlur('orange')} />
          <CircleButton 
            green
            onClick={() => handleButtonClick('blue')} 
            onBlur={() => handleButtonBlur('blue')} />
        </div>
        {showTitle()}
      </header>
      <Pre type={type} handleKeyUp={handleCodeKeyUp} />
    </div>
  );
}
 
export default PreviewCode;