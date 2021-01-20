import React from 'react';
import NormalPageFrame from '../common/NormalPageFrame';
import PhoneIcon from '../icon/PhoneIcon';
import EmailIcon from '../icon/EmailIcon';
import GithubIcon from '../icon/GithubIcon';
import BlogIcon from '../icon/BlogIcon';
import styles from './About.module.scss';

const About = () => {
  return (  
    <main>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>
          Front-end Developer Socratone
        </h1>
        <p className={styles.headerSubTitle}>
          퍼즐 게임 풀듯이 코딩하기를 좋아하는 자바스크립트 개발자입니다.
        </p>
        <div className={styles.headerLinkWrap}>
          <a className={styles.headerLink} href="https://github.com/socratone" target="_blank">
            <p><PhoneIcon size="30" color="whitesmoke" /></p>
            <p>Phone</p>
          </a>
          <a className={styles.headerLink} href="https://github.com/socratone" target="_blank">
            <p><EmailIcon size="30" color="whitesmoke" /></p>
            <p>Email</p>
          </a>
          <a className={styles.headerLink} href="https://github.com/socratone" target="_blank">
            <p><GithubIcon size="30" color="whitesmoke" /></p>
            <p>Github</p>
          </a>
          <a className={styles.headerLink} href="https://thinkforthink.tistory.com/" target="_blank">
            <p><BlogIcon size="30" color="whitesmoke" /></p>
            <p>Blog</p>
          </a>
        </div>
        <img 
          src="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/about/profile.png" 
          alt="profile"
          width="200"
          className={styles.headerImage}/>
      </header>
      <NormalPageFrame>
        About
      </NormalPageFrame>
    </main>
  );
}
 
export default About;