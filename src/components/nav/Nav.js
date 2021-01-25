import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavItem from './NavItem';
import Logo from './Logo';
import MenuButton from './MenuButton';
import RightNav from './RightNav';
import Dropdown from '../common/Dropdown';
import styles from './Nav.module.scss';

const Nav = () => {
  const isMenu = useSelector(state => state.ui.nav.isMenu);
  const history = useHistory();

  return (  
    <header className={styles.wrap}>
      <nav className={styles.nav}>
        <div className={styles.homeWrap}>
          <Logo />
        </div>
        <ul className={styles.itemWrap}>
          <NavItem to="/algorithm">
            Algorithm
          </NavItem>
          <NavItem to="/beginner">
            Beginner
          </NavItem>
          <NavItem to="/troubles">
            Troubles
          </NavItem>
          <NavItem 
            dropdown={
              <Dropdown top="45px" right="0">
                <li onClick={() => history.push('/portfolio')}>Portfolio</li>
              </Dropdown>
            }
            line={false}>
              More
          </NavItem>
        </ul>
      </nav>
      <MenuButton />
      {isMenu && <RightNav />}
    </header>
  );
}
 
export default Nav;