import React from 'react';
import NormalPageFrame from '../common/NormalPageFrame';
import Header from '../Home/Header';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <main className={styles.home}>
      <Header />
      <NormalPageFrame>
        <section>
          hello world
        </section>
      </NormalPageFrame>  
    </main>
  );
}
 
export default Home;