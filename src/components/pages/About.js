import React from 'react';
import Hedaer from '../About/Header';
import Introduce from '../About/Introduce';
import RecentWork from '../About/RecentWork';
import Skill from '../About/Skill';
import styles from './About.module.scss';

const About = () => {
  return (  
    <main>
      <Hedaer />
      <Introduce />
      <Skill />
      <RecentWork />
    </main>
  );
}
 
export default About;