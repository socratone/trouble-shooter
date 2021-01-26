import React from 'react';
import NormalPageFrame from '../common/NormalPageFrame';
import SectionHeader from './SectionHeader';
import styles from './OtherExperience.module.scss';

const OtherExperience = () => {
  return (  
    <section className={styles.wrap}>
      <SectionHeader title="Other Experience">
          개발 이외에 다음과 같은 일을 했습니다.
      </SectionHeader>
      <div className={styles.extraBackground} />
      <NormalPageFrame>
        <main className={styles.main}>
          <div className={styles.gridItem}>
            유튜브 소크라톤 채널
          </div>
          <div className={styles.gridItem}>
            대중음악 작곡
          </div>
          <div className={styles.gridItem}>
            대전가톨릭대학교 신학 전공
          </div>
        </main>
      </NormalPageFrame>
    </section>
  );
}
 
export default OtherExperience;