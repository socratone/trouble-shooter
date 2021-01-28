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
          <Title sub>Deployment</Title>
          <List>S3, EC2, Route 53</List>
          <Title>Github</Title>
          <Link url="https://github.com/socratone/trouble-shooter-frontend.git">Front-end</Link>
          <Link url="https://github.com/socratone/trouble-shooter-backend.git">Back-end</Link>
      </WorkItem>
      <WorkItem 
        even
        subTitle="Electron App"
        title="Youtube Music Player"
        description="플레이리스트를 만들어 유튜브 영상을 넣고 편하게 음악 재생을 할 수 있는 데스크톱 앱입니다."
        term="2020년 11월"
        image="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/profile/youtube-music-player.png">
          <Title head>특징</Title>
          <List>JavaScript를 이용하여 객체지향 프로그래밍으로 구현</List>
          <Title>주요 기능</Title>
          <List>Youtube IFrame Player API를 이용하여 음악 플레이어 구현</List>
          <List>사용자 플레이리스트 CRUD</List>
          <Title>Stack</Title>
          <Title sub>Front-end</Title>
          <List>Youtube IFrame Player API, Webpack, Babel, Axios</List>
          <Title sub>Back-end & Electron</Title>
          <List>Electron, NodeJS, SQLite, Express</List>
          <Title>Github</Title>
          <Link url="https://github.com/socratone/youtube-music-player-frontend.git">Front-end</Link>    
          <Link url="https://github.com/socratone/youtube-music-player-electron.git">Back-end & Electron</Link>  
      </WorkItem>
      <WorkItem 
        subTitle="Electron App"
        title="Finger Organist"
        description="리듬에 맞춰 손가락을 터치해 가톨릭 성가 반주를 해주는 앱입니다."
        term="2020년 7월 - 8월"
        image="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/profile/finger-organist.png">
          <Title head>주요 기능</Title>
          <List>@tonejs/midi로 미디 데이터를 가져와서 클릭할 때마다 비트에 해당하는 음원을 재생하도록 구현</List>
          <Title>Stack</Title>
          <List>@tonejs/midi, React, React Router, SASS, Electron, NodeJS, Express</List>
          <Title>Github</Title>
          <Link url="https://github.com/socratone/finger-organist.git">Front-end</Link>    
          <Link url="https://github.com/socratone/finger-organist-desktop.git">Electron</Link>  
      </WorkItem>
    </section>
  );
}
 
export default RecentWork;