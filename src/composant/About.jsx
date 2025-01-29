import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <div className='backI'>
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <section className="about-content">
        <p>
          Hello! I'm Marwa Erraoui, a passionate Full-Stack Web Developer. 
          Currently, I am studying at OFPPT and I'm learning to build innovative and scalable web applications.
        </p>
        
        <h2>Skills</h2>
        <ul>
          <li>- HTML, CSS, JavaScript, Python</li>
          <li>- React, Laravel</li>
          <li>- Database Management (MySQL)</li>
          <li>- Version Control (Git, GitHub)</li>
          <li>- Conception d'interfaces(Figma)</li>
          <li>- Agile Methodologies</li>
        </ul>

        <h2>Projects</h2>
        <p>
          Check out some of the projects I've worked on:
        </p>
        <ul>
          <li><a href="https://github.com/Marwaerraoui2004" target="_blank" rel="noopener noreferrer"><img src="github.png" alt="" style={{ width: "45px" ,height: "45px",cursor: "pointer"}}/>Web Application Project</a></li>
        </ul>

        <h2>Contact</h2>
        <p>
          Feel free to reach out to me via email.
        </p>
        <ul>
        <div>
            Email :                                  
            <a href="mailto:marouaerraoui14@gmail.com" style={{color: "#00b3b3",textDecoration:"none"}}>
                marouaerraoui14@gmail.com
            </a>
        </div>      
        </ul>
      </section>
    </div>
    </div>
  );
}
