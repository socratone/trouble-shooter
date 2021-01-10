import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPreviewCode } from '../../store/reducers/previewCode';
import Title from '../shoot/Title';
import Text from '../shoot/Text';
import Image from '../shoot/Image';
import Preview from '../shoot/Preview';
import Code from '../shoot/Code';
import PreviewCode from '../shoot/PreviewCode';
import List from '../shoot/List';
import Link from '../shoot/Link';
import ResizeIcon from '../icon/ResizeIcon';
import styles from './Shoot.module.scss';

import { troublesItems } from '../../fakeData';

const Shoot = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [leftWidthRate, setLeftWidthRate] = useState(60); // %
  const [isMouseDown, setMouseDown] = useState(false);
  const previewCode = useSelector(state => state.entities.previewCode);
  const isFullScreen = useSelector(state => state.ui.preview.isFullScreen);
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: get api
    const [data] = troublesItems.filter(item => item.id === Number(id));
    setData(data);
    dispatch(setPreviewCode({
      html: data.shoot.previewCode.html,
      css: data.shoot.previewCode.css,
      js: data.shoot.previewCode.js
    }));
  }, []);

  const handleResizerMouseDown = () => {
    setMouseDown(true);
  };
  
  const handleMouseUp = () => {
    setMouseDown(false);
  };

  const handleMouseMove = e => {
    if (!isMouseDown) return;
    const x = e.clientX;
    const rate = x / window.innerWidth * 100;
    setLeftWidthRate(rate.toFixed(2))
  };

  const setShootItem = (item, key) => {
    if (item.type === 'title') 
      return <Title key={key}>{item.value}</Title>
    else if (item.type === 'text') 
      return <Text key={key}>{item.value}</Text>
    else if (item.type === 'list') 
      return <List key={key}>{item.value}</List>
    else if (item.type === 'link') 
      return <Link key={key} url={item.url}>{item.value}</Link>
    else if (item.type === 'js' || item.type === 'html' || item.type === 'css')
      return <Code key={key} type={item.type}>{item.value}</Code>
    else if (item.type === 'image') 
      return <Image key={key} src={item.value} width={item.width} align={item.align} />
  };

  return (  
    <main 
      className={styles.shoot} 
      onMouseUp={handleMouseUp}
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <section className={styles.leftSection} style={{ width: `${leftWidthRate}%`}}>
        {!isFullScreen && <h3 className={styles.title}>{data && data.title}</h3>}
        {!isFullScreen && data && 
          data.shoot.items.map((item, i) => setShootItem(item, i))}
        {isFullScreen && <Title head>Preview</Title>}
        {isFullScreen && <Preview code={previewCode} />}
      </section>
      <div className={styles.resizer}
        onMouseDown={handleResizerMouseDown}
      >
        <ResizeIcon width="10px" height="50px" color="#ceced5" />
      </div>
      <section 
        className={styles.rightSection} 
        style={{ width: `${100 - leftWidthRate}%`}}
      >
        {!isFullScreen && <Title head>Preview</Title>}
        {!isFullScreen && <Preview code={previewCode} />}
        {!isFullScreen && <Title>Full Codes</Title>}
        {isFullScreen && <Title head>Full Codes</Title>}
        {previewCode.html && <PreviewCode key="html" type="html" />}
        {previewCode.css && <PreviewCode key="css" type="css" />}
        {previewCode.js && <PreviewCode key="js" type="js" />}
      </section>
    </main>
  );
}
 
export default Shoot;