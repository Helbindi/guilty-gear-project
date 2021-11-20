import React from 'react';
import './page.css';
import Jellyfish  from '../assets/images/background/Jellyfish.jpg';

function About() {
    const background = {
        backgroundImage: `url(${Jellyfish})`
    }
    return (
        <div className="page-container" style={background}>
            <header>
                <h1>About</h1>
                <div className="underline"></div>
            </header>
        </div>
    )
}

export default About
