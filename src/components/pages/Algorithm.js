import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../../store/reducers/algorithmItems';
import filterItemsByCategory from '../../helper/filterItemsByCategory';
import filterItemsByQuery from '../../helper/filterItemsByQuery';
import { getAlgorithmItems } from '../../api/item';
import categoryJSON from '../../data/categoryJSON'; 
import NormalPageFrame from '../common/NormalPageFrame';
import GridItem from '../common/GridItem';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import ArrowIcon from '../icon/ArrowIcon';
import Dropdown from '../common/Dropdown';
import styles from './Items.module.scss';

const Algorithm = () => {
  const [category, setCategory] = useState('all');
  const [clickCategory, setClickCategory] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState('');
  const items = useSelector(state => state.entities.algorithmItems);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const items = await getAlgorithmItems(); 
      if (items.error) return alert(items.error.message);
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

  const setButtonName = () => {
    const [item] = categoryJSON.algorithm.filter(item => item.id === category);
    if (item) return item.name;
    return '전체';
  };

  return (
    <NormalPageFrame>
      <main>
        <header className={styles.header}>
          <div className={styles.categoryWrap}>
            <Button onClick={toggleCategory} onBlur={handleCategoryBlur}>
              {setButtonName()} <ArrowIcon size="10" />
            </Button>
            {clickCategory && <Dropdown top="52px">
              <li onClick={() => selectCategory('all')}>전체</li>
              {categoryJSON.algorithm.map(item =>
                <li key={item.id} onClick={() => selectCategory(item.id)}>
                  {item.name}
                </li>
              )}
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
            <GridItem key={item.id} item={item} page="algorithm" />
          )}
        </section>
      </main>
    </NormalPageFrame>  
  );
}
 
export default Algorithm;