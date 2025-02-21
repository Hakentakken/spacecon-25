// src/components/ParticlesBackground.js
import React, { useEffect } from 'react';
import './ParticleBackground.css';

const ParticlesBackground = () => {
  useEffect(() => {
    const numberOfStars = 200; // Increased number of stars
    const starsContainer = document.querySelector('.stars-container');
    const colors = ['#FFFFFF', '#FFCCFF', '#FF99FF', '#66FFFF', '#99CCFF', '#FFFF99']; // Different colors

    // Create stars
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      // Random position of stars (x and y)
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;

      // Random size and animation delay for different stars
      star.style.width = `${Math.random() * 3 + 1}px`; // Size between 1px and 4px
      star.style.height = star.style.width; // Keep it round
      star.style.animationDelay = `${Math.random() * 2}s`;
      star.style.animationDuration = `${Math.random() * 5 + 5}s`;

      // Random color from the color array
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      star.style.backgroundColor = randomColor;

      starsContainer.appendChild(star);
    }

    // Mouse move interaction
    const onMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Adjust stars position based on mouse movement
      const stars = document.querySelectorAll('.star');
      stars.forEach((star) => {
        const starX = parseFloat(star.style.left);
        const starY = parseFloat(star.style.top);

        // Calculate distance from the mouse
        const distX = mouseX - starX;
        const distY = mouseY - starY;

        // Apply movement based on distance to mouse
        const moveX = distX * 0.05;
        const moveY = distY * 0.05;

        // Apply the movement to the star's position
        star.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    // Add mousemove event listener
    window.addEventListener('mousemove', onMouseMove);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="particles-background">
      <div className="stars-container"></div>
    </div>
  );
};

export default ParticlesBackground;
