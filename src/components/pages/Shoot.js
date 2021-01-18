import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPreviewCode } from '../../store/reducers/previewCode';
import applySpacesAndLineBreaksToText from '../../helper/applySpacesAndLineBreaksToText';
import { getItem } from '../../api/item';
import Title from '../common/Title';
import Text from '../common/Text';
import Image from '../common/Image';
import Preview from '../common/Preview';
import Code from '../common/Code';
import PreviewCode from '../common/PreviewCode';
import List from '../common/List';
import Link from '../common/Link';
import ResizeIcon from '../icon/ResizeIcon';
import EditToolBar from '../Shoot/EditToolBar';
import styles from './Shoot.module.scss';

const Shoot = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [leftWidthRate, setLeftWidthRate] = useState(60); // %
  const [isMouseDown, setMouseDown] = useState(false);
  const user = useSelector(state => state.entities.user);
  const previewCode = useSelector(state => state.entities.previewCode);
  const isFullScreen = useSelector(state => state.ui.preview.isFullScreen);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const item = await getItem(id);
      if (item.error) return alert(item.error.message);
      const page = JSON.parse(item.page);
      item.page = page;
      
      setData(item);
      dispatch(setPreviewCode({
        html: page.previewCode.html,
        css: page.previewCode.css,
        js: page.previewCode.js
      }));
    })();
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
    else if (item.type === 'subTitle') 
      return <Title key={key} sub>{item.value}</Title>
    else if (item.type === 'text') 
      return <Text key={key}>{applySpacesAndLineBreaksToText(item.value)}</Text>
    else if (item.type === 'list') 
      return <List key={key}>{item.value}</List>
    else if (item.type === 'link') 
      return <Link key={key} url={item.url}>{item.value}</Link>
    else if (item.type === 'js' || item.type === 'html' || item.type === 'css')
      return <Code key={key} type={item.type}>{item.value}</Code>
    else if (item.type === 'image') 
      return <Image key={key} url={item.url} width={item.width} />
  };

  return (  
    <main 
      className={styles.shoot} 
      onMouseUp={handleMouseUp}
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <section className={styles.leftSection} style={{ width: `${leftWidthRate}%`}}>
        {user.isAdmin && <EditToolBar id={id} />}
        {!isFullScreen && <Title head>{data && data.title}</Title>}
        {!isFullScreen && data && 
          data.page.items.map((item, i) => setShootItem(item, i))}
        {isFullScreen && <Title sub head>Preview</Title>}
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
        {!isFullScreen && <Title sub head>Preview</Title>}
        {!isFullScreen && <Preview code={previewCode} />}
        {!isFullScreen && <Title sub>Full Codes</Title>}
        {isFullScreen && <Title sub head>Full Codes</Title>}
        {previewCode.html && <PreviewCode key="html" type="html" />}
        {previewCode.css && <PreviewCode key="css" type="css" />}
        {previewCode.js && <PreviewCode key="js" type="js" />}
      </section>
    </main>
  );
}
 
export default Shoot;