import React from 'react';
import NormalPageFrame from '../common/NormalPageFrame';
import Company from './Company';
import SectionHeader from './SectionHeader';
import styles from './Experience.module.scss';

const Experience = () => {
  return (  
    <section className={styles.wrap}>
      <SectionHeader title="개발 경력">
      </SectionHeader>
      <NormalPageFrame>
        <div className={styles.itemWrap}>
          <Company
            image="https://image.rocketpunch.com/company/250/iportfolio_logo_1547515990.png?s=400x400&t=inside" 
            name="아이포트폴리오"
            position="Front-end 인턴"
            term="2020년 9월 - 11월" />
          <Company
            image="https://image.rocketpunch.com/company/19718/code-states_logo_1604475831.png?s=400x400&t=inside" 
            name="코드스테이츠"
            position="수강생"
            term="2020년 1월 - 7월" />
        </div>
      </NormalPageFrame>
    </section>
  );
}
 
export default Experience;