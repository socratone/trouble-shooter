import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  const history = useHistory();

  const handleFirstButtonClick = () => {
    history.push('/troubles');
  };
  
  const handleSecondButtonClick = () => {
    history.push('/beginner');
  };

  return (  
    <header className={styles.header}>
      <div className={styles.titleWrap}>
        <p className={styles.title}>TROUBLE</p>
        <p className={styles.title}>SHOOTER</p>
      </div>
      <div className={styles.textWrap}>
        <p className={styles.text} style={{ marginBottom: '10px' }}>
          자바스크립트로 세상의 모든 문제를 해결하자!
        </p>
        <p className={styles.text} style={{ marginBottom: '10px' }}>
          다양한 문제 해결 방법들을 Simple하게 정리했습니다.
        </p>
        <p className={styles.text}>
          빠른 시간에 원하는 코드를 찾아 쓸 수 있기 위한 블로그입니다.
        </p>
      </div>
      <div>
        <button 
          className={styles.firstButton}
          onClick={handleFirstButtonClick}>
            찾아보기
        </button>
        <button 
          className={styles.secondButton}
          onClick={handleSecondButtonClick}>
            For Beginner
        </button>
      </div>
    </header>
  );
}
 
export default Header;