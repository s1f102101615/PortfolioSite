import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';


const Home = () => {
  return (
    <div>
      <Header></Header>
      <Footer></Footer>
      <About></About>
      <Portfolio></Portfolio>
    </div>
  );
};

export default Home;