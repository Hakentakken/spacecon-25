// src/pages/Home.js
import React from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import './Home.css';
import gymImage from '../images/image1.jpeg';
import gymImage1 from '../images/dumbells.jpeg';
import gymImage2 from '../images/treadmill.jpeg';

const Home = () => {
  return (
    <div className="home">
      <ParticlesBackground />
      <div className="home-content">
        <h1>Welcome to Zero Gravity Gym</h1>
        
      </div>
     
      {/* New Box below the navbar */}
      <div className="image-box">
        <div className="image-container">
          <img src={gymImage} alt="Space Gym Equipment" />
        </div>
        <div className="image-description">
          <h2>Space Gym Equipment</h2>
          <p>
            Explore the best equipment for astronauts, designed to maintain muscle and bone strength in zero gravity environments.
            Experience training like never before in the unique surroundings of space.
          </p>
        </div>
      </div>
      <div className="image-box">
        <div className="image-container">
          <img src={gymImage1} alt="Space Gym Equipment" />
        </div>
        <div className="image-description">
          <h2>A healthy body</h2>
          <p>
            Explore the best equipment for astronauts, designed to maintain muscle and bone strength in zero gravity environments.
            Experience training like never before in the unique surroundings of space.
          </p>
        </div>
       
      </div>
      <div className="image-box">
        <div className="image-container">
          <img src={gymImage2} alt="Space Gym Equipment" />
        </div>
        <div className="image-description">
          <h2>RANDOM TEXT</h2>
          <p>
            Explore the best equipment for astronauts, designed to maintain muscle and bone strength in zero gravity environments.
            Experience training like never before in the unique surroundings of space.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Home;