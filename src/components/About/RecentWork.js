import React from 'react';
import SectionHeader from './SectionHeader';
import WorkItem from './WorkItem';
import Title from '../common/Title';
import List from '../common/List';
import Link from '../common/Link';
import styles from './RecentWork.module.scss';

const RecentWork = () => {
  return (  
    <section className={styles.wrap}>
      <SectionHeader title="Recent Project" bright>
        최근에 작업한 프로젝트는 다음과 같습니다.
      </SectionHeader>
      <WorkItem 
        head
        clicked
        subTitle="Blog"
        title="Trouble Shooter"
        description="자바스크립트 코드로 해결할 수 있는 문제들을 쉽게 찾을 수 있도록 정리해 놓은 블로그입니다."
        term="2020년 12월 - 진행중"
        image="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/profile/trshooter.png"
        link="http://trshooter.com">
          <Title head>주요 기능</Title>
          <Title sub>블로그 에디터 / CRUD</Title>
          <List>일반적인 블로그에서처럼 제목, 글, 리스트, 링크, 코드, 이미지 등을 자유롭게 배치하고 편집할 수 있도록 구현 (admin만 가능)</List>
          <List>aws-sdk를 이용해서 S3에 이미지를 올리고 수정하고 삭제할 수 있도록 구현</List>
          <Title sub>코드 미리 보기</Title>
          <List>HTML, CSS, JS 코드에 따른 미리 보기 화면 구현</List>
          <List>사용자가 코드를 수정함에 따라 미리 보기 화면이 달라지도록 구현</List>
          <Title sub>코드 색깔</Title>
          <List>코드의 가독성을 높이기 위해 예약어, 메서드, 주석 등 코드의 종류에 따라 자동으로 색깔이 바뀌도록 구현</List>
          <Title sub>좌우 화면 크기 조절</Title>
          <List>가운데의 Resizer를 드래그해서 사용자의 입맛에 따라 두 화면의 크기 비율을 조절할 수 있도록 구현</List>
          <Title sub>반응형</Title>
          <Title>Stack</Title>
          <Title sub>Front-end</Title>
          <List>Redux : Redux devTools와 불필요한 props drill을 줄여 유지보수에 용이</List>
          <List>CSS Module : class의 이름 중복 문제 해결을 위해 적용</List>
          <List>Styled Components : 코드 양을 줄이기 위해 공통으로 쓰이는 간단한 컴포넌트에 적용</List>
          <List>React, React Router, SASS, aws-sdk, @reduxjs/toolkit</List>
          <Title sub>Back-end</Title>
          <List>NodeJS, Express, MySQL, bcrypt, JWT, PM2</List>
          <Title>Github</Title>
          <Link url="https://github.com/socratone/trouble-shooter-frontend.git">Front-end</Link>
          <Link url="https://github.com/socratone/trouble-shooter-backend.git">Back-end</Link>
      </WorkItem>
      <WorkItem 
        even
        subTitle="Education Web"
        title="Gabriel Institum Latinitatis"
        description="라틴어 교육 사이트입니다."
        term="2020년 12월 - 진행중"
        image="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/profile/gabriel.png"
        link="http://gabriel-latin.s3-website.ap-northeast-2.amazonaws.com/">
          <List>안녕하세요</List>
          <List>안녕하세요</List>
          <List>안녕하세요</List>
      </WorkItem>
      <WorkItem 
        subTitle="Personal Web"
        title="Kim Ji Young"
        description="도자기로 성물을 만드는 김지영 작가님의 홈페이지입니다."
        term="2020년 12월"
        image="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/profile/kimjiyoung.png"
        link="http://kimjiyoung.s3-website.ap-northeast-2.amazonaws.com" />
      <WorkItem 
        even
        subTitle="Electron App"
        title="Youtube Music Player"
        description="유튜브 음악 영상을 재생리스트에 넣고 음악을 재생하는 데스크톱 앱입니다."
        term="2020년 11월"
        image="https://picsum.photos/1920/1080"
        />
      <WorkItem 
        subTitle="Electron App"
        title="Finger Organist"
        description="리듬에 맞춰 손가락을 터치해 가톨릭 성가 반주를 해주는 앱입니다."
        term="2020년 7월 - 8월"
        image="https://picsum.photos/960/540"
        />
    </section>
  );
}
 
export default RecentWork;