import React from 'react';
import NormalPageFrame from '../common/NormalPageFrame';
import TroublesItem from '../Troubles/TroublesItem';
import { troublesItems } from '../../fakeData';
import styles from './Troubles.module.scss';

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