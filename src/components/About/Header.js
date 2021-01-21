import React from 'react';
import PhoneIcon from '../icon/PhoneIcon';
import EmailIcon from '../icon/EmailIcon';
import GithubIcon from '../icon/GithubIcon';
import BlogIcon from '../icon/BlogIcon';
import styles from './Header.module.scss';

const Hedaer = () => {
  return (  
    <header className={styles.header}>
      <h1 className={styles.title}>
        Front-end Developer Socratone
      </h1>
      <p className={styles.subTitle}>
        코딩을 놀이 삼아 끊임없이 작업하고 콘텐츠를 만드는 개발자입니다.
      </p>
      <address className={styles.linkWrap}>
        <a className={styles.link} href="https://github.com/socratone" target="_blank">
          <p><PhoneIcon size="30" color="whitesmoke" /></p>
          <p>Phone</p>
        </a>
        <a className={styles.link} href="https://github.com/socratone" target="_blank">
          <p><EmailIcon size="30" color="whitesmoke" /></p>
          <p>Email</p>
        </a>
        <a className={styles.link} href="https://github.com/socratone" target="_blank">
          <p><GithubIcon size="30" color="whitesmoke" /></p>
          <p>Github</p>
        </a>
        <a className={styles.link} href="https://thinkforthink.tistory.com/" target="_blank">
          <p><BlogIcon size="30" color="whitesmoke" /></p>
          <p>Blog</p>
        </a>
      </address>
      <img 
        src="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/about/profile.png" 
        alt="profile"
        width="200"
        className={styles.profile}/>
      <img 
        src="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/about/desk.png" 
        alt="profile"
        width="450"
        className={styles.desk}/>
    </header>
  );
}
 
export default Hedaer;