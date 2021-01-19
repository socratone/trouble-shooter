import React, { useState } from 'react';
import adoptJSColor from '../../helper/adoptJSColor';
import adoptCSSColor from '../../helper/adoptCSSColor';
import adoptHTMLColor from '../../helper/adoptHTMLColor';
import CopyIcon from '../icon/CopyIcon';
import styles from './Code.module.scss';

let clipboardTimer;

const Pre = ({ type, children, style }) => (  
  <pre className={styles.code} style={style}>
    {type === 'html' && adoptHTMLColor(children)}
    {type === 'css' && adoptCSSColor(children)}
    {type === 'js' && adoptJSColor(children)}
    {type === 'terminal' && children}
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
    const textarea = document.createElement('textarea');
    textarea.textContent = children;
    document.body.append(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();

    setMessage('');
    clearTimeout(clipboardTimer);
    setMessage('clipboard에 복사했습니다.');
    clipboardTimer = setTimeout(() => setMessage(''), 2000);
  };

  if (type === 'terminal') return (
    <div className={styles.codeWrap}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        position: 'absolute', 
        right: '20px', 
        height: '100%' }}>
          <p className={styles.copy} onClick={copyCodeToClipboard}>
            <CopyIcon size="12" />
          </p>
      </div>
      <Pre type={type} style={{ padding: '16px 20px' }}>{children}</Pre>
    </div>
  );

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