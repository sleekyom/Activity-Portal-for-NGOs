import React from 'react';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel'
// import BlogPost from './components/BlogPost';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      {/* <BlogPost /> */}
      <Footer />
    </div>
  );
}

export default App;
