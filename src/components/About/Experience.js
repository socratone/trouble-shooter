import React from 'react';
import NormalPageFrame from '../common/NormalPageFrame';
import Company from './Company';
import SectionHeader from './SectionHeader';
import styles from './Experience.module.scss';

const Experience = () => {
  return (  
    <section className={styles.wrap}>
      <SectionHeader title="Developer Experience">
        개발 경력은 다음과 같습니다.
      </SectionHeader>
      <NormalPageFrame>
        <div className={styles.companyWrap}>
          <Company
            image="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/profile/iportfolio.png" 
            name="아이포트폴리오"
            position="Front-end 인턴"
            term="2020년 9월 - 11월" />
          <Company
            image="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/profile/code-states.png" 
            name="코드스테이츠"
            position="수강생"
            term="2020년 1월 - 7월" />
        </div>
      </NormalPageFrame>
    </section>
  );
}
 
export default Experience;