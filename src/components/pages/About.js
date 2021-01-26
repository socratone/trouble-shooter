import React from 'react';
import Experience from '../About/Experience';
import Hedaer from '../About/Header';
import Introduce from '../About/Introduce';
import RecentWork from '../About/RecentWork';
import Skill from '../About/Skill';
import OtherExperience from '../About/OtherExperience';
import Footer from '../About/Footer';

const About = () => {
  return (  
    <main>
      <Hedaer />
      <Introduce />
      <Skill />
      <RecentWork />
      <Experience />
      <OtherExperience />
      <Footer />
    </main>
  );
}
 
export default About;