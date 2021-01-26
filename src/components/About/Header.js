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
        <span>Front-end</span>
        <span>Developer</span>
        <span>Socratone</span>
      </h1>
      <p className={styles.text}>
        <span>같은 문제를 반복하지 않기 위해 블로그에</span>
        <span>정리하고 기록하는 Front-end 개발자</span>
      </p>
      <address className={styles.linkWrap}>
        <button className={styles.linkButton} onClick={handlePhoneClick}>
          <p><PhoneIcon size="30" color="whitesmoke" /></p>
          <p className={styles.linkText}>Phone</p>
        </button>
        <p className={styles.contact} style={{ width: phoneNumberSize + 'px' }}>
          010-2569-1521
        </p>
        <button className={styles.linkButton} onClick={handleEmailClick}>
          <p><EmailIcon size="30" color="whitesmoke" /></p>
          <p className={styles.linkText}>Email</p>
        </button>
        <p className={styles.contact} style={{ width: emailSize + 'px' }}>
          gim2origin@gmail.com
        </p>
        <button className={styles.linkButton} href="https://github.com/socratone" target="_blank">
          <p><GithubIcon size="30" color="whitesmoke" /></p>
          <p className={styles.linkText}>Github</p>
        </button>
        <button className={styles.linkButton} href="https://thinkforthink.tistory.com/" target="_blank">
          <p><BlogIcon size="30" color="whitesmoke" /></p>
          <p className={styles.linkText}>Blog</p>
        </button>
      </address>
      <img 
        src="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/profile/profile.png" 
        alt="profile"
        width="200"
        className={styles.profile}/>
      <img 
        src="https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/profile/desk.png" 
        alt="profile"
        className={styles.desk}/>
    </header>
  );
}
 
export default Header;