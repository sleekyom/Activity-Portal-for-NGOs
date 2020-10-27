import React from 'react';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel'
import Footer from './components/Footer';
import {Login} from './components/login/Index'

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
