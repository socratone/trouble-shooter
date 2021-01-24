import React from 'react';
import { frontEndStack, backEndStack, deployStack } from '../../data/skill';
import styles from './Skill.module.scss';
import Stack from './Stack';
import NormalPageFrame from '../common/NormalPageFrame';
import RocketIcon from '../icon/RocketIcon';
import GearIcon from '../icon/GearIcon';
import WriteIcon from '../icon/WriteIcon';
import SectionHeader from './SectionHeader';

const Skill = () => {
  return (  
    <section className={styles.wrap}>
      <SectionHeader title="SKILL">
        사용 가능한 기술 Stack은 다음과 같습니다.
      </SectionHeader>
      <div className={styles.extraBackground} />
      <NormalPageFrame>
        <section className={styles.main}>
          <article className={styles.gridItem}>
            <div className={styles.itemIcon}>
              <div className={styles.writeIcon}>
                <WriteIcon size="60" color="#fdc073" />
              </div>
            </div>
            <h3 className={styles.itemTitle}>Front-end</h3>
            <h4 className={styles.itemSubTitle}>능숙한 Stack</h4>
            {frontEndStack.skillfuls.map(stack => 
              <Stack key={stack.id} item={stack}>{stack.value}</Stack>
            )}
            <h4 className={styles.itemSubTitle}>경험해본 Stack</h4>
            {frontEndStack.experienceds.map(stack => 
              <Stack key={stack.id} item={stack}>{stack.value}</Stack>
            )}
          </article>
          <article className={styles.gridItem}>
            <div className={styles.itemIcon}>
              <div className={styles.gearIcon}>
                <GearIcon size="60" color="#fdc073" />
              </div>
            </div>
            <h3 className={styles.itemTitle}>Back-end</h3>
            <h4 className={styles.itemSubTitle}>능숙한 Stack</h4>
            {backEndStack.skillfuls.map(stack => 
              <Stack key={stack.id} item={stack}>{stack.value}</Stack>
            )}
            <h4 className={styles.itemSubTitle}>경험해본 Stack</h4>
            {backEndStack.experienceds.map(stack => 
              <Stack key={stack.id} item={stack}>{stack.value}</Stack>
            )}
          </article>
          <article className={styles.gridItem}>
            <div className={styles.itemIcon}>
              <div className={styles.rocketIcon}>
                <RocketIcon size="60" color="#fdc073" />
              </div>
            </div>
            <h3 className={styles.itemTitle}>Deployment</h3>
            <h4 className={styles.itemSubTitle}>능숙한 Stack</h4>
            {deployStack.skillfuls.map(stack => 
              <Stack key={stack.id} item={stack}>{stack.value}</Stack>
            )}
            <h4 className={styles.itemSubTitle}>경험해본 Stack</h4>
            {deployStack.experienceds.map(stack => 
              <Stack key={stack.id} item={stack}>{stack.value}</Stack>
            )}
          </article>
        </section>
      </NormalPageFrame>
    </section>
  );
}
 
export default Skill;