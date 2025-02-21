// src/pages/Programs.js
import React from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import './Programs.css';

const Programs = () => {
  return (
    <div className="programs">
      <ParticlesBackground />
      <div className="programs-content">
        <h1>Our Programs</h1>
        <div className="program-list">
          <div className="program">
            <h2>Zero Gravity Strength</h2>
            <p>Enhance your strength with our gravity-defying workouts!</p>
          </div>
          <div className="program">
            <h2>Space Endurance</h2>
            <p>Prepare for long durations in space with our endurance programs.</p>
          </div>
          <div className="program">
            <h2>Astronaut Agility</h2>
            <p>Improve your agility with zero-gravity simulations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
