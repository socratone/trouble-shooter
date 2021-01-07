import React from 'react';
import { useHistory } from 'react-router-dom';
import LogoIcon from '../icon/LogoIcon';
import styles from './Logo.module.scss';

const LOGO_COLOR = '#fdc073';

const Logo = () => {
  const history = useHistory();
  const handleClick = () => history.push('/');

  return (  
    <div className={styles.wrap} onClick={handleClick}>
      <div className={styles.logo}>
        <LogoIcon size="30" color={LOGO_COLOR} />
      </div>
      <div style={{ color: LOGO_COLOR }}>TROUBLE SHOOTER</div>
    </div>
  );
}
 
export default Logo;