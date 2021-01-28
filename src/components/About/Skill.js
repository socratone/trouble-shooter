import React from 'react';
import { frontEndStacks, backEndStacks } from '../../data/skill';
import Stack from './Stack';
import NormalPageFrame from '../common/NormalPageFrame';
import GearIcon from '../icon/GearIcon';
import WriteIcon from '../icon/WriteIcon';
import SectionHeader from './SectionHeader';
import styles from './Skill.module.scss';

const Skill = () => {
  const setStack = (item, i) => {
    if (item.type === 'category') {
      return <h4 className={styles.itemSubTitle}>{item.value}</h4>
    } else if (item.type === 'stack') {
      return <Stack key={i}>{item.value}</Stack>
    }
  }

  return (  
    <section className={styles.wrap}>
      <SectionHeader title="SKILL">
        다룰 수 있는 기술 Stack은 다음과 같습니다.
      </SectionHeader>
      <div className={styles.extraBackground} />
      <NormalPageFrame>
        <main className={styles.main}>
          <article className={styles.gridItem}>
            <div>
              <div className={styles.itemIcon}>
                <div className={styles.writeIcon}>
                  <WriteIcon size="60" color="#fdc073" />
                </div>
              </div>
              <h3 className={styles.itemTitle}>Front-end</h3>
              {frontEndStacks.map((item, i) => setStack(item, i))}
            </div>
          </article>
          <article className={styles.gridItem}>
            <div>
              <div className={styles.itemIcon}>
                <div className={styles.gearIcon}>
                  <GearIcon size="60" color="#fdc073" />
                </div>
              </div>
              <h3 className={styles.itemTitle}>Back-end</h3>
              {backEndStacks.map((item, i) => setStack(item, i))}
            </div>
          </article>
        </main>
      </NormalPageFrame>
    </section>
  );
}
 
export default Skill;