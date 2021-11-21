import React from 'react';
import './page.css';
import Jellyfish  from '../assets/images/background/Jellyfish.jpg';
import image from '../assets/images/background/Product.jpg';

function About() {
    const background = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)), url(${Jellyfish})`
    }
    return (
        <div className="page-container" style={background}>
            <header>
                <h1>About</h1>
                <div className="underline"></div>

                <section className='about-content'>
                    <img src={image} alt='product' />
                    <p>
                        The cutting-edge 2D/3D hybrid graphics pioneered in the Guilty Gear series
                        have been raised to the next level in “GUILTY GEAR -STRIVE-“. The new artistic
                        direction and improved character animations will go beyond anything you’ve seen
                        before in a fighting game!
                    </p>
                </section>
            </header>
        </div>
    )
}

export default About
