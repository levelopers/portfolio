import React from 'react';
import './App.css'
import Home from './pages/home'
import Projects from './pages/projects'
import About from './pages/about'
import Header from './components/header'
import Footer from './components/footer'
import UC from './components/underConstruction'

export default function App(props) {
  return (
    <div className='page_outbox'>
      {/* <UC/> */}
      <Header />
      <div className='page_content'>
        <Home />
        <Projects />
        <About />
        <Footer />
      </div>
    </div>
  )
};

