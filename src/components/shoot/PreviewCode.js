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
      onKeyUp={() => handleKeyUp(pre.current)} 
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
    navigator.clipboard.writeText(currentCode).then(() => {
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

  const applyCodeToPreview = code => {
    dispatch(setPreviewCode({ [type]: code }));
  };

  const getCursorLocatedNode = () => {
    const selection = document.getSelection();
    const nodeName = selection.anchorNode.parentElement.nodeName;
    if (nodeName === 'SPAN') return selection.anchorNode.parentElement; // SPAN
    return selection.anchorNode; // textNode
  }
  
  const getCursorLocatedNodeIndex = element => {
    const cursorLocatedNode = getCursorLocatedNode();
    for (let i = 0; i < element.childNodes.length; i++) {
      if (element.childNodes[i] === cursorLocatedNode) {
        return i;
      }
    }
  }

  // const getTextsUpToCurrentPosition = (element, nodeIndex, charPosition) => {
  //   let text = '';
  //   for (let i = 0; i < nodeIndex; i++) {
  //     const node = element.childNodes[i];
  //     if (node.nodeType === 1) { // element
  //       text += node.textContent;
  //     } else if (node.nodeType === 3 && node.nodeValue) { // textNode
  //       text += node.nodeValue;
  //     }
  //   }

  //   const lastNode = element.childNodes[nodeIndex];
  //   let lastText = '';
  //   if (lastNode.nodeType === 1) {
  //     lastText = lastNode.textContent.substring(0, charPosition)
  //   } else if (lastNode.nodeType === 3 && lastNode.nodeValue) {
  //     lastText = lastNode.nodeValue;
  //   }
  //   return text + lastText;
  // }

  const setCursor = (element, nodeIndex, charPosition) => {
    const range = document.createRange();
    const selection = window.getSelection();

    const node = element.childNodes[nodeIndex];
    if (node.nodeType === 1) {
      range.setStart(node.childNodes[0], charPosition)
    } else if (node.nodeType === 3) {
      range.setStart(node, charPosition)
    }
    
    selection.removeAllRanges()
    selection.addRange(range)
  }

  const handleCodeKeyUp = (pre, e) => {
    dispatch(setIndicator({ isIndicator: true }));
    setCurrentCode(pre.textContent);
    clearTimeout(codeTimer);
    codeTimer = setTimeout(() => {
      const nodeIndex = getCursorLocatedNodeIndex(pre);
      const charPosition = window.getSelection().getRangeAt(0).endOffset;

      applyCodeToPreview(pre.textContent);
      dispatch(setIndicator({ isIndicator: false }));
      
      setCursor(pre, nodeIndex, charPosition)
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