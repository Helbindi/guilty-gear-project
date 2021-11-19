import React from 'react';
import Hero from '../component/Hero';
import MoveList from "../component/MoveList";
import { BasicMoves } from '../data/Ram/BasicMoves';
import { SpecialMoves } from '../data/Ram/SpecialMoves';
import { Overdrive } from '../data/Ram/Overdrive';
import './page.css';

function Ramlethal() {
    const background = {
        backgroundImage: `url(images/background/SeventhHeaven.jpg)`
    }
    return (
        <div className="page-container" style={background}>
            <header className="page-header">
                <div className="page-header-img">
                    <img src="images/background/Ram.jpg" alt="Ram" />
                </div>

                <div className="page-header-vid">
                    <Hero url='/videos/Ram/trailer.mp4'/>
                </div>
            </header>

            <MoveList data={BasicMoves} title="Basic Moves"/>
            <MoveList data={SpecialMoves} title="Special Moves"/>
            <MoveList data={Overdrive} title="Overdrive"/>
        </div>
    )
}

export default Ramlethal;