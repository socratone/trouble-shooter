import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Title from '../shoot/Title';
import Text from '../shoot/Text';
import Image from '../shoot/Image';
import Preview from '../shoot/Preview';
import Code from '../shoot/Code';
import List from '../shoot/List';
import styles from './Shoot.module.scss';

const Shoot = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const items = useSelector(state => state.entities.troublesItems);

  useEffect(() => {
    const [item] = items.filter(item => item.id === Number(id));
    setItem(item);
  }, [items])

  return (  
    <main className={styles.shoot}>
      <section className={styles.leftSection}>
        <h3 className={styles.title}>{item && item.title}</h3>
        {item && item.shoot.items.map((item, i) => {
          if (item.type === 'title') 
            return <Title key={i}>{item.value}</Title>
          else if (item.type === 'text') 
            return <Text key={i}>{item.value}</Text>
          else if (item.type === 'list') 
            return <List key={i}>{item.value}</List>
          else if (item.type === 'code')
            return <Code key={i}>{item.value}</Code>
          else if (item.type === 'image') 
            return <Image 
              key={i} 
              src={item.value} 
              width={item.width} 
              align={item.align} />
        })}
      </section>
      <section className={styles.rightSection}>
        <Title head>Preview</Title>
        <Preview />
        <Title>Full Code</Title>
        {item && item.shoot.fullCodes.map((code, i) => 
          <Code key={i}>{code.value}</Code>
        )}
      </section>
    </main>
  );
}
 
export default Shoot;