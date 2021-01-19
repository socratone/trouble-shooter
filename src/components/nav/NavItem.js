import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ArrowIcon from '../icon/ArrowIcon';
import styled from 'styled-components';
import styles from './NavItem.module.scss';

const BottomLine = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${props => props.height};
  background: #fdc073;
`;

const NavItem = ({ to, margin, line = true, dropdown, children }) => {
  const [isClicked, setClicked] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const handleClick = () => {
    if (isClicked) setClicked(false);
    else setClicked(true);
    if (!to) return;
    history.push(to);
  };

  const handleBlur = () => {
    setTimeout(() => setClicked(false), 200);
  };

  const showBottomLine = () => {
    if (!to) return;
    if (location.pathname.includes(to) && line) {
      return <BottomLine height="3px" />
    }
  }

  const setFontColor = () => {
    if (!to) return;
    if (location.pathname.includes(to) && line) {
      return { color: '#fdc073' };
    } else {
      return { color: '' }
    }
  }

  return (  
    <li className={styles.wrap} style={{ margin }}>
      <button className={styles.button} onClick={handleClick} onBlur={handleBlur}>
        <p className={styles.text} style={setFontColor()}>
          {children}
        </p>
        {dropdown && <p className={styles.arrow}>
          <ArrowIcon size="10" color="white" />
        </p>}
      </button>
      {isClicked && dropdown}
      {showBottomLine()}
    </li>
  );
}
 
export default NavItem;