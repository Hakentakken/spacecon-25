import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Membership from './pages/Membership';
import './App.css'; // Global styles

const App = () => {
  return (
    <Router>
      <div>
        
        
        {/* Navbar will be fixed above the particles */}
        <Navbar />
        {/* Particles background will be a common background for all pages */}
        <ParticlesBackground />
        {/* Define routes for your pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/membership" element={<Membership />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
