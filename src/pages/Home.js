import React from 'react';
import Hero from '../component/Hero';
import Characters from '../component/Characters';
import Music from '../component/Music';
import './page.css';
import LarsCanyon from '../assets/images/background/LarsCanyon.jpg';
import image from '../assets/images/background/Product.jpg';
import Footer from '../component/Footer';

function Home() {
    const background = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${LarsCanyon})`
    }
    return (
    <div className="page-container" style={background}>
        <header className="page-header">
                <div className="page-header-img">
                    <img src={image} alt="Product" />
                    <div className="btn-group">
                        <a href="https://www.guiltygear.com/ggst/en/" 
                        target="_blank" rel="noopener noreferrer" 
                        className="btn"> Learn More
                        </a>
                    </div>
                </div>

                <div className="page-header-vid">
                    <Hero url='https://www.youtube.com/watch?v=Yhr9WpjaDzw' />
                </div>
            </header>
        <Characters />
        <Music />
        <Footer />
    </div>
    )
}

export default Home
