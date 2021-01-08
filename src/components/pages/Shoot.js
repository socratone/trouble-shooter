import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../shoot/Title';
import Text from '../shoot/Text';
import Image from '../shoot/Image';
import Preview from '../shoot/Preview';
import Code from '../shoot/Code';
import List from '../shoot/List';
import Link from '../shoot/Link';
import ResizeIcon from '../icon/ResizeIcon';
import styles from './Shoot.module.scss';

import { troublesItems } from '../../fakeData';

const Shoot = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [previewCode, setPreviewCode] = useState(null); // { html, css, js } 
  const [leftWidthRate, setLeftWidthRate] = useState(60); // %
  const [isMouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    const [item] = troublesItems.filter(item => item.id === Number(id));
    setItem(item);
    setPreviewCode(item.shoot.previewCode);
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

  const showFullCodes = () => ([
    <Code key="html" type="html">{previewCode.html}</Code>,
    <Code key="css" type="css">{previewCode.css}</Code>,
    <Code key="js" type="js">{previewCode.js}</Code>,
  ]);

  return (  
    <main 
      className={styles.shoot} 
      onMouseUp={handleMouseUp}
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <section className={styles.leftSection} style={{ width: `${leftWidthRate}%`}}>
        <h3 className={styles.title}>{item && item.title}</h3>
        {item && item.shoot.items.map((item, i) => setShootItem(item, i))}
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
        <Title head>Preview</Title>
        <Preview code={previewCode} />
        <Title>Full Codes</Title>
        {item && showFullCodes()}
      </section>
    </main>
  );
}
 
export default Shoot;