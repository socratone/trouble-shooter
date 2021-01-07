import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Title from '../shoot/Title';
import Text from '../shoot/Text';
import Image from '../shoot/Image';
import Preview from '../shoot/Preview';
import Code from '../shoot/Code';
import List from '../shoot/List';
import Link from '../shoot/Link';
import ResizeIcon from '../icon/ResizeIcon';
import styles from './Shoot.module.scss';

const Shoot = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const items = useSelector(state => state.entities.troublesItems);
  const [leftWidthRate, setLeftWidthRate] = useState(60); // %
  const [isMouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    const [item] = items.filter(item => item.id === Number(id));
    setItem(item);
  }, [items]);

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

  return (  
    <main 
      className={styles.shoot} 
      onMouseUp={handleMouseUp}
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <section className={styles.leftSection} style={{ width: `${leftWidthRate}%`}}>
        <h3 className={styles.title}>{item && item.title}</h3>
        {item && item.shoot.items.map((item, i) => {
          if (item.type === 'title') 
            return <Title key={i}>{item.value}</Title>
          else if (item.type === 'text') 
            return <Text key={i}>{item.value}</Text>
          else if (item.type === 'list') 
            return <List key={i}>{item.value}</List>
          else if (item.type === 'link') 
            return <Link key={i} url={item.url}>{item.value}</Link>
          else if (item.type === 'js' || item.type === 'html' || item.type === 'css')
            return <Code key={i} type={item.type}>{item.value}</Code>
          else if (item.type === 'image') 
            return <Image 
              key={i} 
              src={item.value} 
              width={item.width} 
              align={item.align} />
        })}
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
        <Preview />
        <Title>Full Code</Title>
        {item && item.shoot.fullCodes.map((code, i) => 
          <Code key={i} type={code.type} itemId={id}>{code.value}</Code>
        )}
      </section>
    </main>
  );
}
 
export default Shoot;