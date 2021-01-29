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
          <div className={styles.gridItemWrap}>
            <div className={styles.gridItem}>
              <img 
                src="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/profile/socratone.png"
                alt="socratone"
                className={styles.image}
                width="100"/>
              <h4 className={styles.title}>유튜브 소크라톤 채널</h4>
              <p className={styles.text}>컴퓨터로 작곡하는 방법에 대해서 알려주는 유튜브 채널을 운영했습니다.</p>
              <a
                className={styles.link} 
                href="https://www.youtube.com/c/socratone"
                rel="noreferrer"
                target="_blank">
                  youtube.com/c/socratone
              </a>
            </div>
          </div>
          <div className={styles.gridItemWrap}>
            <div className={styles.gridItem}>
              <div className={styles.album} />
              <h4 className={styles.title}>대중음악 작곡</h4>
              <p className={styles.text}>러블리즈 류수정의 42= 편곡 참여</p>
              <a
                className={styles.link} 
                href="https://youtu.be/fLsUuw0KiUc"
                rel="noreferrer"
                target="_blank">
                  youtu.be/fLsUuw0KiUc
              </a>
            </div>
          </div>
          <div className={styles.gridItemWrap}>
            <div className={styles.gridItem}>
              <img 
                src="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/profile/catholic-university.png"
                alt="socratone"
                className={styles.image}
                width="100"/>
              <h4 className={styles.title}>대전가톨릭대학교</h4>
              <p className={styles.text}>신학과</p>
            </div>
          </div>
        </main>
      </NormalPageFrame>
    </section>
  );
}
 
export default OtherExperience;