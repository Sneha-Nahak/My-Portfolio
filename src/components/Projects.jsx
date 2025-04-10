import React from 'react';
import './Projects.css';
import employeproductivitytracker from '../assets/employee-productivity-tracker.png'
import nesthive from '../assets/nesthive.png'

const projectData = [
  {
    title: 'Medium Website',
    type: 'Group-based Project',
    description: 'A clone of medium website built using JavaScript,HTML and CSS showcasing skills and understanding.',
    image: 'https://miro.medium.com/v2/resize:fit:1200/0*lEvSHbTlrPdGCIVT.png',
    code:'https://github.com/Prajakta811/WEB_017-Code-Surgeons',
    live_link: 'https://fabulous-begonia-c98fec.netlify.app/'
  },
  {
    title: 'Employee Productivity Tracker',
    type: 'Group-based Project',
    description: 'A browser-based platform to track on the performace and productivity level of employees.',
    image: employeproductivitytracker,
    code:'https://github.com/sahilnikalje/1885/tree/main/Hackathon',
    live_link: 'https://employeproductivitytracker.netlify.app/',

  },
  {
    title: 'Property Listing Platform',
    type: 'Individual Project',
    description: 'A modern responsive admin dashboard with charts, cards and dark mode toggle.',
    image: nesthive,
    code:'https://github.com/Sneha-Nahak/B43_WEB_160_Web-Project-155/tree/main/nesthive',
    live_link: 'https://67dd58cbdb0a6f0d94fde3e6--animated-dasik-6ee000.netlify.app/'
  },
];


const Projects = () => (
  <section className="projects-section" id="projects">
    <h2 className="section-title">Projects</h2>
    <div className="projects-container">
      {projectData.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-content">
            <h2>{project.title}</h2>
            <br />
            <h3>{project.type}</h3>
            <p>{project.description}</p>

            <div style={{display:'flex', justifyContent:'space-between'}}>
            <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Live →
            </a>
            <a href={project.code} target="_blank" rel="noopener noreferrer" className="project-code">
              View Code →
            </a>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;