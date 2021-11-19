import React from 'react';
import Hero from '../component/Hero';
import MoveList from "../component/MoveList";
import { BasicMoves } from '../data/Gio/BasicMoves';
import { SpecialMoves } from '../data/Gio/SpecialMoves';
import { Overdrive } from '../data/Gio/Overdrive';
import './page.css';

function Giovanna() {
    const background = {
        backgroundImage: `url(images/background/Ajatar.jpg)`
    }

    return (
        <div className="page-container" style={background}>
            <header className="page-header">
                <div className="page-header-img">
                    <img src="images/background/Gio.jpg" alt="Gio" />
                </div>

                <div className="page-header-vid">
                    <Hero url='/videos/Gio/Trailer.mp4'/>
                </div>
            </header>

            <MoveList data={BasicMoves} title="Basic Moves"/>
            <MoveList data={SpecialMoves} title="Special Moves"/>
            <MoveList data={Overdrive} title="Overdrive"/>
        </div>
    )
}

export default Giovanna;