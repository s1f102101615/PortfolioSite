import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Teams from './components/Teams';


const Home = () => {
  return (
    <div>
      <Header></Header>
      <Footer></Footer>
      <About></About>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <Teams></Teams>
    </div>
  );
};

export default Home;