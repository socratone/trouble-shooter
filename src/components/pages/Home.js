import React from 'react';
import NormalPageFrame from '../common/NormalPageFrame';
import styles from './Home.module.scss';

const Home = () => {
  return (
    // <NormalPageFrame>
      <main className={styles.home}>
        <header className={styles.header}></header>
        <section></section>
      </main>
    // </NormalPageFrame>  
  );
}
 
export default Home;