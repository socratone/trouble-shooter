import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIndicator } from '../../store/reducers/preview';
import { toggleScreenButton } from '../../store/reducers/preview';
import SynchroIndicator from '../common/SynchroIndicator';
import FullScreenIcon from '../icon/FullScreenIcon';
import SmallScreenIcon from '../icon/SmallScreenIcon';
import styles from './Preview.module.scss';

const Preview = ({ code }) => {
  const isIndicator = useSelector(state => state.ui.preview.isIndicator);
  const isFullScreen = useSelector(state => state.ui.preview.isFullScreen);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(setIndicator({ isIndicator: false }));
  }, []);

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

  const handleClick = () => {
    dispatch(toggleScreenButton());
  };

  if (!code || !code.html || !code.css || !code.js) return null 

  return (  
    <div className={styles.wrap}>
      <button className={styles.fullScreenButton} onClick={handleClick}>
        {!isFullScreen && <FullScreenIcon size="24" color="grey" />}
        {isFullScreen && <SmallScreenIcon size="24" color="grey" />}
      </button>
      {isIndicator && <SynchroIndicator size="30" />}
      <iframe className={styles.iframe} srcDoc={setCode()} />
    </div>
  );
}
 
export default Preview;