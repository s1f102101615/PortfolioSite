import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';


const Home = () => {
  return (
    <div>
      <Header></Header>
      <Footer></Footer>
      <About></About>
      <Portfolio></Portfolio>
      <Skills></Skills>
    </div>
  );
};

export default Home;