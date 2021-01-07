import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import styles from './NavItem.module.scss';

const BottomLine = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${props => props.height};
  background: #fdc073;
`;

const NavItem = ({ to, margin, line = true, children }) => {
  const history = useHistory();
  const location = useLocation();

  const handleClick = () => {
    history.push(to);
  };

  const showBottomLine = () => {
    if (location.pathname.includes(to) && line) {
      return <BottomLine height="3px" />
    }
  }

  const setFontColor = () => {
    if (location.pathname.includes(to) && line) {
      return { color: '#fdc073' };
    } else {
      return { color: '' }
    }
  }

  return (  
    <li className={styles.wrap} style={{ margin }} onClick={handleClick}>
      <p className={styles.item} style={setFontColor()} href="#" >
        {children}
      </p>
      {showBottomLine()}
    </li>
  );
}
 
export default NavItem;