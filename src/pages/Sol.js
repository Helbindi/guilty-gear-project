import React from 'react';
import Hero from '../component/Hero';
import MoveList from "../component/MoveList";
import { BasicMoves } from '../data/Sol/BasicMoves';
import { SpecialMoves } from '../data/Sol/SpecialMoves';
import { Overdrive } from '../data/Sol/Overdrive';
import './page.css';
import TimesSquare from '../assets/images/background/TimesSquare.jpg';
import image from '../assets/images/background/Sol.jpg';
import trailer from '../assets/videos/Sol/trailer.mp4'
import BackToTop from '../component/BackToTop';
import Footer from '../component/Footer';

function Sol() {
    const background = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${TimesSquare})`
    }
    return (
        <div className="page-container" style={background}>
            <header className="page-header">
                <div className="page-header-img">
                    <img src={image} alt="Sol" />
                </div>

                <div className="page-header-vid">
                    <Hero url={trailer}/>
                </div>
            </header>
            

            <MoveList data={BasicMoves} title="Basic Moves"/>
            <MoveList data={SpecialMoves} title="Special Moves"/>
            <MoveList data={Overdrive} title="Overdrive"/>
            
            <BackToTop />
        </div>
    )
}

export default Sol;