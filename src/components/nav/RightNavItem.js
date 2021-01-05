import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toggleMenuButton } from '../../store/reducers/nav';
import styles from './RightNavItem.module.scss';

const RightNavItem = ({ to, children }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleItemClick = () => {
    history.push(to);
    dispatch(toggleMenuButton());
  };

  return (  
    <li className={styles.wrap}>
      <p className={styles.item} onClick={handleItemClick}>
        {children}
      </p>
    </li>
  );
}
 
export default RightNavItem;