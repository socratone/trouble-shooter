import React from 'react';
import styles from './Preview.module.scss';

const Preview = ({ code }) => {
  // TODO: validateCode
  const setCode = () => {
    return `
      <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview</title>
        <style>${code.css}</style>
      </head>
      <body>
        ${code.html}
        <script>${code.js}</script>
      </body>
      </html>
    `;
  };

  if (!code || !code.html || !code.css || !code.js) return null 

  return (  
    <div className={styles.wrap}>
      <iframe className={styles.iframe} srcDoc={setCode()} />
    </div>
  );
}
 
export default Preview;