import React, { useState } from 'react';
import PhoneIcon from '../icon/PhoneIcon';
import EmailIcon from '../icon/EmailIcon';
import GithubIcon from '../icon/GithubIcon';
import BlogIcon from '../icon/BlogIcon';
import styles from './Header.module.scss';

let phoneNumberWidth = 0;
let emailWidth = 0;
const Header = () => {
  const [phoneNumberSize, setPhoneNumberSize] = useState(0);
  const [emailSize, setEmailSize] = useState(0);

  const handlePhoneClick = () => {
    if (phoneNumberWidth === 0) {
      let timer = setInterval(() => {
        phoneNumberWidth += 2;
        setPhoneNumberSize(phoneNumberWidth)
        if (phoneNumberWidth >= 120) clearInterval(timer);
      }, 5);
    } else {
      let timer = setInterval(() => {
        phoneNumberWidth -= 2;
        setPhoneNumberSize(phoneNumberWidth)
        if (phoneNumberWidth <= 0) clearInterval(timer);
      }, 5);
    }
  };

  const handleEmailClick = () => {
    if (emailWidth === 0) {
      let timer = setInterval(() => {
        emailWidth += 2;
        setEmailSize(emailWidth)
        if (emailWidth >= 175) clearInterval(timer);
      }, 5);
    } else {
      let timer = setInterval(() => {
        emailWidth -= 2;
        setEmailSize(emailWidth)
        if (emailWidth <= 0) clearInterval(timer);
      }, 5);
    }
  };

  return (  
    <header className={styles.header}>
      <h1 className={styles.title}>
        Front-end Developer Socratone
      </h1>
      <p className={styles.subTitle}>
        코딩을 놀이 삼아 끊임없이 작업하고 콘텐츠를 만드는 개발자입니다.
      </p>
      <address className={styles.linkWrap}>
        <a className={styles.link} onClick={handlePhoneClick}>
          <p><PhoneIcon size="30" color="whitesmoke" /></p>
          <p>Phone</p>
        </a>
        <p className={styles.contact} style={{ width: phoneNumberSize + 'px' }}>
          010-2569-1521
        </p>
        <a className={styles.link} onClick={handleEmailClick}>
          <p><EmailIcon size="30" color="whitesmoke" /></p>
          <p>Email</p>
        </a>
        <p className={styles.contact} style={{ width: emailSize + 'px' }}>
          gim2origin@gmail.com
        </p>
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
 
export default Header;