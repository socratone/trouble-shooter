import React from 'react';
import SectionHeader from './SectionHeader';
import WorkItem from './WorkItem';
import styles from './RecentWork.module.scss';

const RecentWork = () => {
  return (  
    <section className={styles.wrap}>
      <SectionHeader title="Recent Work" bright>
        최근에 작업한 프로젝트는 다음과 같습니다.
      </SectionHeader>
      <WorkItem 
        head
        subTitle="Web"
        title="Trouble Shooter"
        description="코딩 블로그입니다."
        term="2020년 12월 - 진행중"
        image="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/profile/trshooter.png"
        firstLink="https://www.notion.so/Trouble-Shooter-fc2320f7622e4fd6bc8fd9209a918368"
        secondLink="http://trshooter.com" />
      <WorkItem 
        even
        subTitle="Education Web"
        title="Gabriel Institum Latinitatis"
        description="라틴어 교육 사이트입니다."
        term="2020년 12월 - 진행중"
        image="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/profile/gabriel.png"
        firstLink="https://www.notion.so/Gabriel-Institutum-Latinitatis-eaa25a2726db4c3da45b034285a3b862"
        secondLink="http://gabriel-latin.s3-website.ap-northeast-2.amazonaws.com/" />
      <WorkItem 
        subTitle="Personal Web"
        title="Kim Ji Young"
        description="도자기로 성물을 만드는 김지영 작가님의 홈페이지입니다."
        term="2020년 12월"
        image="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/profile/kimjiyoung.png"
        firstLink="https://www.notion.so/Kim-Ji-Young-1dfbca6a3faf40a497909e9c8725f45e"
        secondLink="http://kimjiyoung.s3-website.ap-northeast-2.amazonaws.com" />
      <WorkItem 
        even
        subTitle="Electron App"
        title="Youtube Music Player"
        description="유튜브 음악 영상을 재생리스트에 넣고 음악을 재생하는 데스크톱 앱입니다."
        term="2020년 11월"
        image="https://picsum.photos/560/420"
        firstLink="https://www.notion.so/Youtube-Music-Player-9a5ac0ca9bb74b56822f69c5044c5110"
        />
      <WorkItem 
        subTitle="Electron App"
        title="Finger Organist"
        description="리듬에 맞춰 손가락을 터치해 가톨릭 성가 반주를 해주는 앱입니다."
        term="2020년 7월 - 8월"
        image="https://picsum.photos/480/360"
        firstLink="https://www.notion.so/Finger-Organist-1564beacf4a643a498cee9be7fc8c2b0"
        />
    </section>
  );
}
 
export default RecentWork;