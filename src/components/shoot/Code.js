import React, { useState } from 'react';
import Dropdown from '../common/Dropdown';
import adoptJSColor from '../../helper/adoptJSColor';
import adoptCSSColor from '../../helper/adoptCSSColor';
import adoptHTMLColor from '../../helper/adoptHTMLColor';
import CircleButton from '../common/CircleButton';
import styles from './Code.module.scss';

const Code = ({ type, fullCode, children }) => {
  const [dropdown, setDropdown] = useState('');

  const setPre = () => {
    if (type === 'html')
      return <pre className={styles.code}>{adoptHTMLColor(children)}</pre>
    else if (type === 'js')
      return <pre className={styles.code}>{adoptJSColor(children)}</pre>
    else if (type === 'css')
      return <pre className={styles.code}>{adoptCSSColor(children)}</pre>
  };

  const setTitle = () => {
    if (type === 'html') return <p className={styles.htmlTitle}>Html</p>
    if (type === 'js') return <p className={styles.jsTitle}>JS</p>
    if (type === 'css') return <p className={styles.cssTitle}>CSS</p>
  };

  const removeCode = () => {
    console.log('clicked')
  };

  const adoptPreview = () => {

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
          <CircleButton 
            red
            onClick={() => handleButtonClick('red')} 
            onBlur={() => handleButtonBlur('red')} >
              {dropdown === 'red' && <Dropdown top="27px" left="-18.5px">
                <li onClick={removeCode}>클립보드에 복사</li>
              </Dropdown>}
          </CircleButton>
          <CircleButton  
            onClick={() => handleButtonClick('orange')} 
            onBlur={() => handleButtonBlur('orange')} >
              {dropdown === 'orange' && <Dropdown top="27px" left="-18.5px">
                <li onClick={removeCode}>파일로 저장</li>
              </Dropdown>}
          </CircleButton>
          <CircleButton 
            green
            onClick={() => handleButtonClick('blue')} 
            onBlur={() => handleButtonBlur('blue')} >
              {dropdown === 'blue' && <Dropdown top="27px" left="-18.5px">
                <li onClick={adoptPreview}>Preview에 적용</li>
              </Dropdown>}
          </CircleButton>
        </div>
        {setTitle()}
      </header>
      {setPre()}
    </div>
  );
}
 
export default Code;