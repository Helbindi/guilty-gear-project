import React from 'react';
import Hero from '../component/Hero';
import Characters from '../component/Characters';
import Music from '../component/Music';
import './page.css';

function Home() {
    const background = {
        backgroundImage: `url(images/background/LarsCanyon.jpg)`,
        backgroundSize: '100%',
        backgroundAttachment: 'fixed'
    }
    return (
    <div className="page-container" style={background}>
        <header className="page-header">
                <div className="page-header-img">
                    <img src="images/background/Product.jpg" alt="Product" />
                </div>

                <div className="page-header-vid">
                    <Hero url='https://www.youtube.com/watch?v=Yhr9WpjaDzw' />
                </div>
            </header>
        <Characters />
        <Music />
    </div>
    )
}

export default Home
