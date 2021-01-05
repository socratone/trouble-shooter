import React from 'react';
import LogoIcon from '../icon/LogoIcon';
import NavItem from './NavItem';
import MenuButton from './MenuButton';
import RightNav from './RightNav';
import styles from './Nav.module.scss';
import { useSelector } from 'react-redux';

const Nav = () => {
  const isMenu = useSelector(state => state.ui.nav.isMenu);

  return (  
    <header className={styles.wrap}>
      <nav className={styles.nav}>
        <div className={styles.logoWrap}>
          <NavItem to="/" margin={0}>
            <LogoIcon size="28" color="white" />
          </NavItem>
        </div>
        <div className={styles.itemWrap}>
          <NavItem to="/beginner">
            Beginner
          </NavItem>
          <NavItem to="/troubles">
            Troubles
          </NavItem>
        </div>
      </nav>
      <MenuButton />
      {isMenu && <RightNav />}
    </header>
  );
}
 
export default Nav;