import React from 'react';
import Hero from '../component/Hero';
import MoveList from "../component/MoveList";
import { BasicMoves } from '../data/Ky/BasicMoves';
import { SpecialMoves } from '../data/Ky/SpecialMoves';
import { Overdrive } from '../data/Ky/Overdrive';
import './page.css';
import SilverFeet from '../assets/images/background/SilverFeet.jpg';
import trailer from '../assets/videos/Sol/trailer.mp4'

function Ky() {
    const background = {
        backgroundImage: `url(${SilverFeet})`
    }
    return (
        <div className="page-container" style={background}>
            <header className="page-header">
                <div className="page-header-img">
                    <img src="images/background/Ky.jpg" alt="Ky" />
                </div>

                <div className="page-header-vid">
                    <Hero url={trailer}/>
                </div>
            </header>

            <MoveList data={BasicMoves} title="Basic Moves"/>
            <MoveList data={SpecialMoves} title="Special Moves"/>
            <MoveList data={Overdrive} title="Overdrive"/>
        </div>
    )
}

export default Ky;