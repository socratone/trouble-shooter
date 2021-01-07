import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenuButton } from '../../store/reducers/nav';
import RightNavItem from './RightNavItem';
import styles from './RightNav.module.scss';

const RightNav = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleMenuButton());
  };

  return (  
    <div className={styles.wrap}>
      <div className={styles.margin} onClick={handleClick} />
      <nav className={styles.nav}>
        <RightNavItem to="/">Home</RightNavItem>
        <RightNavItem to="/beginner">Beginner</RightNavItem>
        <RightNavItem to="/troubles">Troubles</RightNavItem>
      </nav>
    </div>
  );
}
 
export default RightNav;