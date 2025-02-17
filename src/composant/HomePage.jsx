import React from 'react';
import '../styles/HomePage.css';

export default function HomePage() {
    return (
    <div className='bd' >
        <div className="homepage-container">
            <h1 className="headline">Hello! I'm Marwa Erraoui, a Full-Stack Web Development Student.</h1>
            <p className="intro-text">
                Passionate about crafting innovative web solutions with cutting-edge technologies. Let's build the future together!
            </p>
            <button className="cta-button">
                    <a href="{{ asset('cv.pdf') }}" download="cv.pdf" style={{ textDecoration: 'none', color: 'white' }}>
                        Download My CV
                    </a>
            </button>
        </div>
    </div>
    );
}
