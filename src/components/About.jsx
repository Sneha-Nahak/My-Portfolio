import React from 'react';
import './About.css';
import profilePic from '../assets/Pass-Photo.jpg'; // Replace with your actual image path

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-grid">
        <div className="about-image">
          <img src={profilePic} alt="Your Name" />
        </div>
        <div className="about-description">
          <p>
            Hi, I'm <strong>Sneha Nahak</strong>, a passionate front-end developer who enjoys crafting beautiful and functional web experiences, currently pursuing Frond End development from Masai School as my secondary education after graduating with a BSc Physics Degree. I specialize in React, modern UI/UX, and creating responsive, user-friendly designs.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new tech, contributing to open-source or exploring some artistic perspectives of design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
