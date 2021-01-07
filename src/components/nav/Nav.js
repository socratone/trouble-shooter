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
        <ul className={styles.homeWrap}>
          <NavItem to="/" margin="0" line={false}>
            <LogoIcon size="30" color="white" />
          </NavItem>
          <NavItem to="/" margin="0 10px" line={false}>
            TROUBLE SHOOTER
          </NavItem>
        </ul>
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