import React from 'react';
import Hero from '../component/Hero';
import MoveList from "../component/MoveList";
import { BasicMoves } from '../data/Ram/BasicMoves';
import { SpecialMoves } from '../data/Ram/SpecialMoves';
import { Overdrive } from '../data/Ram/Overdrive';
import './page.css';
import SeventhHeaven from '../assets/images/background/SeventhHeaven.jpg';
import image from '../assets/images/background/Ram.jpg';
import trailer from '../assets/videos/Ram/trailer.mp4';

function Ramlethal() {
    const background = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${SeventhHeaven})`
    }
    return (
        <div className="page-container" style={background}>
            <header className="page-header">
                <div className="page-header-img">
                    <img src={image} alt="Ram" />
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

export default Ramlethal;