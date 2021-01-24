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
        first
        subTitle="Education Web"
        title="Gabriel Latin"
        description="라틴어 교육 사이트입니다."
        image="https://picsum.photos/720/540" />
      <WorkItem 
        even
        subTitle="eCommerce Web"
        title="Kim Ji Young"
        description="도자기로 성물을 만드는 김지영 작가님의 홈페이지입니다."
        image="https://picsum.photos/640/480" />
      <WorkItem 
        subTitle="Electron App"
        title="Youtube Music Player"
        description="유튜브 음악 영상을 재생리스트에 넣고 음악을 재생하는 플레이어 앱입니다."
        image="https://picsum.photos/560/420" />
      <WorkItem 
        even
        subTitle="Electron App"
        title="Finger Organist"
        description="리듬에 맞춰 손가락을 터치해 가톨릭 성가 반주를 해주는 앱입니다."
        image="https://picsum.photos/480/360" />
    </section>
  );
}
 
export default RecentWork;