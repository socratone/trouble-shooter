import React from 'react';
import Experience from '../About/Experience';
import Hedaer from '../About/Header';
import Introduce from '../About/Introduce';
import RecentWork from '../About/RecentWork';
import Skill from '../About/Skill';

const About = () => {
  return (  
    <main>
      <Hedaer />
      <Introduce />
      <Skill />
      <RecentWork />
      <Experience />
    </main>
  );
}
 
export default About;