import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../../store/reducers/beginnerItems';
import convertCategoryName from '../../helper/convertCategoryName';
import filterItemsByCategory from '../../helper/filterItemsByCategory';
import filterItemsByQuery from '../../helper/filterItemsByQuery';
import { getBeginnerItems } from '../../api/item';
import NormalPageFrame from '../common/NormalPageFrame';
import GridItem from '../common/GridItem';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import ArrowIcon from '../icon/ArrowIcon';
import Dropdown from '../common/Dropdown';
import styles from './Items.module.scss';

const Beginner = () => {
  const [category, setCategory] = useState('all');
  const [clickCategory, setClickCategory] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState('');
  const items = useSelector(state => state.entities.beginnerItems);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const items = await getBeginnerItems(); 
      dispatch(setItems(items));
    })();
  }, []);

  const getFilteredItems = items => {
    items = filterItemsByCategory({ items , category });
    if (query !== '') items = filterItemsByQuery({ items, query });
    return items;
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
            <GridItem key={item.id} item={item} page="beginner" />
          )}
        </section>
      </main>
    </NormalPageFrame>  
  );
}
 
export default Beginner;