import React from 'react';
import NormalPageFrame from '../common/NormalPageFrame';
import TroublesItem from '../Troubles/TroublesItem';
import styles from './Troubles.module.scss';
import { troublesItems } from '../../fakeData';

const Troubles = () => {
  return (
    <NormalPageFrame>
      <main>
        <section className={styles.grid}>
          {troublesItems.map(item => <TroublesItem key={item.id} item={item} />)}
        </section>
      </main>
    </NormalPageFrame>  
  );
}
 
export default Troubles;