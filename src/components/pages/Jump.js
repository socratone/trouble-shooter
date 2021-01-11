import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NormalPageFrame from '../common/NormalPageFrame';
import Title from '../common/Title';
import Text from '../common/Text';
import Image from '../common/Image';
import Code from '../common/Code';
import List from '../common/List';
import Link from '../common/Link';
import styles from './Jump.module.scss';

import { beginnerItems } from '../../fakeData';

const Jump = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    // TODO: get api
    const [data] = beginnerItems.filter(item => item.id === Number(id));
    setData(data);
  }, []);

  const setJumpItem = (item, key) => {
    if (item.type === 'title') 
      return <Title key={key}>{item.value}</Title>
    else if (item.type === 'subTitle') 
      return <Title key={key} sub>{item.value}</Title>
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
    <NormalPageFrame>
      <main className={styles.jump}>
        <Title head>{data && data.title}</Title>
        {data && data.page.items.map((item, i) => setJumpItem(item, i))}
      </main>
    </NormalPageFrame>
  );
}
 
export default Jump;