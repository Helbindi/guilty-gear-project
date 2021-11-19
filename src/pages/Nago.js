import React from 'react';
import Hero from '../component/Hero';
import MoveList from "../component/MoveList";
import { BasicMoves } from '../data/Nago/BasicMoves';
import { SpecialMoves } from '../data/Nago/SpecialMoves';
import { Overdrive } from '../data/Nago/Overdrive';
import './page.css';

function Nago() {
    const background = {
        backgroundImage: `url(images/background/Observatory.jpg)`
    }
    return (
        <div className="page-container" style={background}>
            <header className="page-header">
                <div className="page-header-img">
                    <img src="images/background/Nago.jpg" alt="Nago" />
                </div>

                <div className="page-header-vid">
                    <Hero url='/videos/Nago/trailer.mp4'/>
                </div>
            </header>

            <MoveList data={BasicMoves} title="Basic Moves"/>
            <MoveList data={SpecialMoves} title="Special Moves"/>
            <MoveList data={Overdrive} title="Overdrive"/>
        </div>
    )
}

export default Nago;