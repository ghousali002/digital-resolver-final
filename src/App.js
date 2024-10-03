// src/App.js
import React ,{useState,useEffect}from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
// import Contact from './components/ContactPage/ContactPage';
import AboutPage from './components/AboutPage/AboutPage';
// import Blog from './components/BlogPage/BlogPage';
// import Portfolio from './components/PortfolioPage/PortfolioPage';
import './App.css';

function App() {
  const  [activeNav, setActiveNav] = useState('home');
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage  />} />
          {/* <Route path="/contact" element={<Contact activeNav={activeNav} setActiveNav={setActiveNav} />} />
          <Route path="/blog" element={<Blog activeNav={activeNav} setActiveNav={setActiveNav} />} />
          <Route path="/portfolio" element={<Portfolio activeNav={activeNav} setActiveNav={setActiveNav} />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
