import React from 'react';
import Hero from '../component/Hero';
import MoveList from "../component/MoveList";
import { BasicMoves } from '../data/Sol/BasicMoves';
import { SpecialMoves } from '../data/Sol/SpecialMoves';
import { Overdrive } from '../data/Sol/Overdrive';
import './page.css';

function Sol() {
    const background = {
        backgroundImage: `url(images/background/TimesSquare.jpg)`
    }
    return (
        <div className="page-container" style={background}>
            <header className="page-header">
                <div className="page-header-img">
                    <img src="https://www.upcomer.com/wp-content/uploads/2021/06/01.jpg" alt="Sol" />
                </div>

                <div className="page-header-vid">
                    <Hero url='/videos/Sol/trailer.mp4'/>
                </div>
            </header>
            

            <MoveList data={BasicMoves} title="Basic Moves"/>
            <MoveList data={SpecialMoves} title="Special Moves"/>
            <MoveList data={Overdrive} title="Overdrive"/>
        </div>
    )
}

export default Sol;