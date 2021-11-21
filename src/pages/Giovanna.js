import React from 'react';
import Hero from '../component/Hero';
import MoveList from "../component/MoveList";
import { BasicMoves } from '../data/Gio/BasicMoves';
import { SpecialMoves } from '../data/Gio/SpecialMoves';
import { Overdrive } from '../data/Gio/Overdrive';
import './page.css';
import Ajatar from '../assets/images/background/Ajatar.jpg';
import image from '../assets/images/background/Gio.jpg';
import Trailer from '../assets/videos/Gio/Trailer.mp4';

function Giovanna() {
    const background = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${Ajatar})`
    }

    return (
        <div className="page-container" style={background}>
            <header className="page-header">
                <div className="page-header-img">
                    <img src={image} alt="Gio" />
                </div>

                <div className="page-header-vid">
                    <Hero url={Trailer}/>
                </div>
            </header>

            <MoveList data={BasicMoves} title="Basic Moves"/>
            <MoveList data={SpecialMoves} title="Special Moves"/>
            <MoveList data={Overdrive} title="Overdrive"/>
        </div>
    )
}

export default Giovanna;