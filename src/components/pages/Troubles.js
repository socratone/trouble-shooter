import React, { useState } from 'react';
import convertCategoryName from '../../helper/convertCategoryName';
import NormalPageFrame from '../common/NormalPageFrame';
import TroublesItem from '../Troubles/TroublesItem';
import Button from '../common/Button';
import ArrowIcon from '../icon/ArrowIcon';
import Dropdown from '../common/Dropdown';
import styles from './Troubles.module.scss';

import { troublesItems } from '../../fakeData';

const Troubles = () => {
  const [category, setCategory] = useState('all');
  const [clickCategory, setClickCategory] = useState(false);

  const getFilteredItems = () => {
    const filteredItems = troublesItems.filter(item => {
      if (category === 'all') return true;
      if (item.category === category) return true;
    });

    return filteredItems.map(item => <TroublesItem key={item.id} item={item} />)
  };

  const toggleCategory = () => {
    if (clickCategory) setClickCategory(false);
    else setClickCategory(true);
  };

  const handleCategoryBlur = () => {
    setTimeout(() => setClickCategory(false), 200);
  }

  const selectCategory = category => {
    setCategory(category);
    setClickCategory(false);
  }

  return (
    <NormalPageFrame>
      <main>
        <header className={styles.header}>
          <div className={styles.categoryWrap}>
            <Button onClick={toggleCategory} onBlur={handleCategoryBlur}>
              {convertCategoryName(category)} <ArrowIcon size="10" />
            </Button>
            {clickCategory && <Dropdown top="40px">
              <li onClick={() => selectCategory('all')}>전체</li>
              <li onClick={() => selectCategory('js')}>JavaScript</li>
              <li onClick={() => selectCategory('css')}>CSS</li>
              <li onClick={() => selectCategory('s3')}>S3</li>
            </Dropdown>}
          </div>
        </header>
        <section className={styles.grid}>
          {getFilteredItems()}
        </section>
      </main>
    </NormalPageFrame>  
  );
}
 
export default Troubles;