import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTroublesItems } from '../../store/reducers/troublesItems';
import convertCategoryName from '../../helper/convertCategoryName';
import NormalPageFrame from '../common/NormalPageFrame';
import TroublesItem from '../Troubles/TroublesItem';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import ArrowIcon from '../icon/ArrowIcon';
import Dropdown from '../common/Dropdown';
import styles from './Troubles.module.scss';

import { troublesItems } from '../../fakeData';

const Troubles = () => {
  const [category, setCategory] = useState('all');
  const [clickCategory, setClickCategory] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState('');
  const items = useSelector(state => state.entities.troublesItems);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTroublesItems(troublesItems));
  }, []);

  const filterItemsByCategory = items => {
    return items.filter(item => {
      if (category === 'all') return true;
      if (item.category === category) return true;
    });
  };

  const filterItemsByQuery = items => {
    return items.filter(item => {
      if (item.title.toLowerCase().indexOf(query) >= 0) return true;
      if (item.description.toLowerCase().indexOf(query) >= 0) return true;
    });
  };

  const getFilteredItems = items => {
    let filteredItems = filterItemsByCategory(items);
    if (query !== '') filteredItems = filterItemsByQuery(filteredItems);
    return filteredItems;
  };

  const toggleCategory = () => {
    if (clickCategory) setClickCategory(false);
    else setClickCategory(true);
  };

  const handleCategoryBlur = () => {
    setTimeout(() => setClickCategory(false), 200);
  };

  const selectCategory = category => {
    setCategory(category);
    setClickCategory(false);
  };

  const handleSearchInputChange = e => {
    setSearchValue(e.target.value);
  };

  const handleSearchButtonClick = () => {
    setQuery(searchValue.toLowerCase());
  };

  return (
    <NormalPageFrame>
      <main>
        <header className={styles.header}>
          <div className={styles.categoryWrap}>
            <Button onClick={toggleCategory} onBlur={handleCategoryBlur}>
              {convertCategoryName(category)} <ArrowIcon size="10" />
            </Button>
            {clickCategory && <Dropdown top="52px">
              <li onClick={() => selectCategory('all')}>전체</li>
              <li onClick={() => selectCategory('js')}>JavaScript</li>
              <li onClick={() => selectCategory('css')}>CSS</li>
              <li onClick={() => selectCategory('s3')}>S3</li>
            </Dropdown>}
          </div>
          <div className={styles.searchWrap}>
            <TextInput 
              type="text" 
              width="200px" 
              margin="0 10px 0 0" 
              value={searchValue} 
              onChange={handleSearchInputChange}
            />
            <Button onClick={handleSearchButtonClick}>찾기</Button>
          </div>
        </header>
        <section className={styles.grid}>
          {getFilteredItems(items).map(item => 
            <TroublesItem key={item.id} item={item} />
          )}
        </section>
      </main>
    </NormalPageFrame>  
  );
}
 
export default Troubles;