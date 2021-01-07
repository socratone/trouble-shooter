import React from 'react';

import NavItem from './NavItem';
import Logo from './Logo';
import MenuButton from './MenuButton';
import RightNav from './RightNav';
import styles from './Nav.module.scss';
import { useSelector } from 'react-redux';

const Nav = () => {
  const isMenu = useSelector(state => state.ui.nav.isMenu);

  return (  
    <header className={styles.wrap}>
      <nav className={styles.nav}>
        <div className={styles.homeWrap}>
          <Logo />
        </div>
        <ul className={styles.itemWrap}>
          <NavItem to="/beginner">
            Beginner
          </NavItem>
          <NavItem to="/troubles">
            Troubles
          </NavItem>
        </ul>
      </nav>
      <MenuButton />
      {isMenu && <RightNav />}
    </header>
  );
}
 
export default Nav;