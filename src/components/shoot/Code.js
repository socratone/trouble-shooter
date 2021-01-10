import React from 'react';
import adoptJSColor from '../../helper/adoptJSColor';
import adoptCSSColor from '../../helper/adoptCSSColor';
import adoptHTMLColor from '../../helper/adoptHTMLColor';
import CopyIcon from '../icon/CopyIcon';
import styles from './Code.module.scss';

const Pre = ({ type, children }) => (  
  <pre className={styles.code} >
    {type === 'html' && adoptHTMLColor(children)}
    {type === 'css' && adoptCSSColor(children)}
    {type === 'js' && adoptJSColor(children)}
  </pre>
);

const Code = ({ type, children }) => {
  const showTitle = () => {
    if (type === 'html') return <p className={styles.title}>Html</p>
    if (type === 'js') return <p className={styles.title}>JS</p>
    if (type === 'css') return <p className={styles.title}>CSS</p>
  };

  const copyCodeToClipboard = () => {
    console.log('clicked')
  };

  return (
    <div className={styles.codeWrap}>
      <header className={styles.header}>
        {showTitle()}
        <p className={styles.copy} onClick={copyCodeToClipboard}>
          <CopyIcon size="12" />
        </p>
      </header>
      <Pre type={type}>{children}</Pre>
    </div>
  );
}
 
export default Code;