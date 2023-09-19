import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Teams from './components/Teams';
import End from './components/End';


const Home = () => {
  return (
    <div>
      <Header></Header>
      <Footer></Footer>
      <div id="about">
      <About></About>
      </div>
      <div id="portfolio">
      <Portfolio></Portfolio>
      </div>
      <div id="skill">
      <Skills></Skills>
      </div>
      <div id="team">
      <Teams></Teams>
      </div>
      <End></End>
      </div>
  );
};

export default Home;