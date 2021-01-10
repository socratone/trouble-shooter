import React, { useState } from 'react';
import adoptJSColor from '../../helper/adoptJSColor';
import adoptCSSColor from '../../helper/adoptCSSColor';
import adoptHTMLColor from '../../helper/adoptHTMLColor';
import CopyIcon from '../icon/CopyIcon';
import styles from './Code.module.scss';

let clipboardTimer;

const Pre = ({ type, children }) => (  
  <pre className={styles.code} >
    {type === 'html' && adoptHTMLColor(children)}
    {type === 'css' && adoptCSSColor(children)}
    {type === 'js' && adoptJSColor(children)}
  </pre>
);

const Code = ({ type, children }) => {
  const [message, setMessage] = useState('');

  const showTitle = () => {
    if (type === 'html') return <p className={styles.title}>Html</p>
    if (type === 'js') return <p className={styles.title}>JS</p>
    if (type === 'css') return <p className={styles.title}>CSS</p>
  };

  const showMessage = () => {
    return <p className={styles.message}>{message}</p>
  };

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(children).then(() => {
      setMessage('');
      clearTimeout(clipboardTimer);
      setMessage('clipboard에 복사했습니다.');
      clipboardTimer = setTimeout(() => setMessage(''), 2000);
    }, () => {
      setMessage('');
      clearTimeout(clipboardTimer);
      setMessage('다시 시도해주세요.');
      setTimeout(() => setMessage(''), 2000);
    });
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
      <Pre type={type}>{children}</Pre>
    </div>
  );
}
 
export default Code;