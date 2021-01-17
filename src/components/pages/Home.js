import React from 'react';
import NormalPageFrame from '../common/NormalPageFrame';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
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
      <Footer />
    </main>
  );
}
 
export default Home;