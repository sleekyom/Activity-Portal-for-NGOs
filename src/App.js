import React from 'react';
import './App.css';
import Header from './components/Header';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <BlogPost />
        <Footer />
    </div>
  );
}

export default App;
