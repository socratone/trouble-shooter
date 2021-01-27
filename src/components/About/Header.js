import React, { useState } from 'react';
import PhoneIcon from '../icon/PhoneIcon';
import EmailIcon from '../icon/EmailIcon';
import GithubIcon from '../icon/GithubIcon';
import BlogIcon from '../icon/BlogIcon';
import styles from './Header.module.scss';

const Header = () => {
  const [phoneNumberWidth, setPhoneNumberWidth] = useState('0');
  const [emailWidth, setEmailWidth] = useState('0');

  const handlePhoneClick = () => {
    if (phoneNumberWidth !== '120px') setPhoneNumberWidth('120px');
    else setPhoneNumberWidth('0');
  };

  const handleEmailClick = () => {
    if (emailWidth !== '175px') setEmailWidth('175px');
    else setEmailWidth('0');
  };

  return (  
    <header className={styles.header}>
      <h1 className={styles.title}>
        <span>Front-end</span>
        <span>Developer</span>
        <span>Socratone</span>
      </h1>
      <p className={styles.text}>
        <span>같은 문제를 반복하지 않기 위해 모든 것을</span>
        <span>정리하고 기록하는 Front-end 개발자</span>
      </p>
      <address className={styles.linkWrap}>
        <button className={styles.linkButton} onClick={handlePhoneClick}>
          <p><PhoneIcon size="30" color="whitesmoke" /></p>
          <p className={styles.linkText}>Phone</p>
        </button>
        <p className={styles.contact} style={{ width: phoneNumberWidth }}>
          {process.env.REACT_APP_PHONE}
        </p>
        <button className={styles.linkButton} onClick={handleEmailClick}>
          <p><EmailIcon size="30" color="whitesmoke" /></p>
          <p className={styles.linkText}>Email</p>
        </button>
        <p className={styles.contact} style={{ width: emailWidth }}>
          {process.env.REACT_APP_EMAIL}
        </p>
        <a className={styles.linkButton} href="https://github.com/socratone" target="_blank">
          <p><GithubIcon size="30" color="whitesmoke" /></p>
          <p className={styles.linkText}>Github</p>
        </a>
        <a className={styles.linkButton} href="https://thinkforthink.tistory.com/" target="_blank">
          <p><BlogIcon size="30" color="whitesmoke" /></p>
          <p className={styles.linkText}>Blog</p>
        </a>
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