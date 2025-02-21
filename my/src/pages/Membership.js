// src/pages/Membership.js
import React from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import './Membership.css';

const Membership = () => {
  return (
    <div className="membership">
      <ParticlesBackground />
      <div className="membership-content">
        <h1>Become a Member</h1>
        <p>Choose a membership plan to start your zero-gravity fitness journey!</p>
        <div className="plans">
          <div className="plan">
            <h2>Basic</h2>
            <p>Access to all gym equipment and group classes.</p>
          </div>
          <div className="plan">
            <h2>Premium</h2>
            <p>Unlimited access to space simulations, personal trainer sessions, and more!</p>
          </div>
        </div>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Membership;
