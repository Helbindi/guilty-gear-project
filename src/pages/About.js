import React from 'react';
import './page.css';

function About() {
    const background = {
        backgroundImage: `url(images/background/Jellyfish.jpg)`
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
