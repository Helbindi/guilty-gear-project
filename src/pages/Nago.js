import React from 'react';
import Hero from '../component/Hero';
import MoveList from "../component/MoveList";
import { BasicMoves } from '../data/Nago/BasicMoves';
import { SpecialMoves } from '../data/Nago/SpecialMoves';
import { Overdrive } from '../data/Nago/Overdrive';
import './page.css';
import Observatory from '../assets/images/background/Observatory.jpg';
import image from '../assets/images/background/Nago.jpg';
import trailer from '../assets/videos/Nago/trailer.mp4';
import BackToTop from '../component/BackToTop';
import Footer from '../component/Footer';

function Nago() {
    const background = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${Observatory})`
    }
    return (
        <div className="page-container" style={background}>
            <header className="page-header">
                <div className="page-header-img">
                    <img src={image} alt="Nago" />
                </div>

                <div className="page-header-vid">
                    <Hero url={trailer}/>
                </div>
            </header>

            <MoveList data={BasicMoves} title="Basic Moves"/>
            <MoveList data={SpecialMoves} title="Special Moves"/>
            <MoveList data={Overdrive} title="Overdrive"/>
            
            <BackToTop />
            <Footer />
        </div>
    )
}

export default Nago;