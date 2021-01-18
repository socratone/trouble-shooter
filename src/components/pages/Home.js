import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../../store/reducers/homeItems';
import { getHomeItems } from '../../api/item';
import NormalPageFrame from '../common/NormalPageFrame';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import styles from './Home.module.scss';
import HomeItem from '../Home/HomeItem';

const Home = () => {
  const homeItems = useSelector(state => state.entities.homeItems);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const items = await getHomeItems();
      if (items.error) return alert(items.error.message);
      dispatch(setItems(items));
    })();
  }, []);

  return (
    <main className={styles.home}>
      <Header />
      <NormalPageFrame>
        <section>
          {homeItems.map(item => <HomeItem key={item.id} item={item} />)}
        </section>
      </NormalPageFrame> 
      <Footer />
    </main>
  );
}
 
export default Home;