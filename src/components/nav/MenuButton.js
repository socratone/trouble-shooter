import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenuButton } from '../../store/reducers/nav';
import MenuIcon from '../icon/MenuIcon';
import styles from './MenuButton.module.scss';

const MenuButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleMenuButton());
  };

  return (  
    <button onClick={handleClick} className={styles.button}>
      <MenuIcon size="18" color="#fdc073" />
    </button>
  );
}
 
export default MenuButton;