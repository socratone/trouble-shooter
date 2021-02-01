import React from 'react';
import NormalPageFrame from '../common/NormalPageFrame';
import GearIcon from '../icon/GearIcon';
import WriteIcon from '../icon/WriteIcon';
import SectionHeader from './SectionHeader';
import styles from './Skill.module.scss';

const Skill = () => {
  return (  
    <section className={styles.wrap}>
      <SectionHeader title="SKILL">
        다룰 수 있는 기술 Stack은 다음과 같습니다.
      </SectionHeader>
      <div className={styles.extraBackground} />
      <NormalPageFrame>
        <main className={styles.main}>
          <article className={styles.gridItem}>
            <div className={styles.itemIcon}>
              <WriteIcon size="60" color="#fdc073" />
            </div>
            <h3 className={styles.title}>Front-end</h3>
            <div className={styles.stackWrap}>
              <p className={styles.category}>Language</p>
              <p className={styles.stack}>JavaScript</p>
              <p className={styles.stack}>TypeScript</p>
            </div>
            <div className={styles.stackWrap}>
              <p className={styles.category}>Framework</p>
              <p className={styles.stack}>React</p>
              <p className={styles.stack}>Electron</p>
            </div>
            <div className={styles.stackWrap}>
              <p className={styles.category}>State Management</p>
              <p className={styles.stack}>Redux</p>
            </div>
            <div className={styles.stackWrap}>
              <p className={styles.category}>Style</p>
              <p className={styles.stack}>SASS</p>
              <p className={styles.stack}>Styled Component</p>
            </div>
            <div className={styles.stackWrap}>
              <p className={styles.category}>Bundler</p>
              <p className={styles.stack}>Webpack</p>
            </div>
            <div className={styles.stackWrap}>
              <p className={styles.category}>배포</p>
              <p className={styles.stack}>S3</p>
              <p className={styles.stack}>Route 53</p>
            </div>
          </article>
          <article className={styles.gridItem}>
            <div className={styles.itemIcon}>
              <GearIcon size="60" color="#fdc073" />
            </div>
            <h3 className={styles.title}>Back-end</h3>
            <div className={styles.stackWrap}>
              <p className={styles.category}>Server</p>
              <p className={styles.stack}>NodeJS</p>
            </div>
            <div className={styles.stackWrap}>
              <p className={styles.category}>Database</p>
              <p className={styles.stack}>MySQL</p>
            </div>
            <div className={styles.stackWrap}>
              <p className={styles.category}>인증 / 보안</p>
              <p className={styles.stack}>bcrypt</p>
              <p className={styles.stack}>JWT</p>
            </div>
            <div className={styles.stackWrap}>
              <p className={styles.category}>배포</p>
              <p className={styles.stack}>EC2</p>
              <p className={styles.stack}>RDS</p>
              <p className={styles.stack}>Docker</p>
            </div>
          </article>
        </main>
      </NormalPageFrame>
    </section>
  );
}
 
export default Skill;