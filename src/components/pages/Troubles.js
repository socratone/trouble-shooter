import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pushItems } from '../../store/reducers/troublesItems';
import convertCategoryName from '../../helper/convertCategoryName';
import { getTroublesItems } from '../../api/item';
import NormalPageFrame from '../common/NormalPageFrame';
import GridItem from '../common/GridItem';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import ArrowIcon from '../icon/ArrowIcon';
import Dropdown from '../common/Dropdown';
import styles from './Troubles.module.scss';

const Troubles = () => {
  const [category, setCategory] = useState('all');
  const [clickCategory, setClickCategory] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState('');
  const items = useSelector(state => state.entities.troublesItems);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const items = await getTroublesItems(); 
      dispatch(pushItems({ items }));
    })();
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
      // TODO: 본문 검색
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
              <li onClick={() => selectCategory('html')}>HTML</li>
              <li onClick={() => selectCategory('css')}>CSS</li>
              <li onClick={() => selectCategory('js')}>JavaScript</li>
              <li onClick={() => selectCategory('aws')}>AWS</li>
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
            <GridItem key={item.id} item={item} page="troubles" />
          )}
        </section>
      </main>
    </NormalPageFrame>  
  );
}
 
export default Troubles;