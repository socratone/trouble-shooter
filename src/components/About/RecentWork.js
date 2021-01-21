import React from 'react';
import styles from './RecentWork.module.scss';

const RecentWork = () => {
  return (  
    <section className={styles.wrap}>
      <header className={styles.header}>
        <h2 className={styles.headerTitle}>Recent Work</h2>
        <p className={styles.headerText}>최근에 작업한 프로젝트는 다음과 같습니다.</p>
      </header>
    </section>
  );
}
 
export default RecentWork;