import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import { MusicList } from '../data/MusicList';
import './Music.css';

function Music() {
    const [index, setIndex] = useState(0);
    const [song, setSong] = useState(MusicList[0]);

    const checkIndex = (num) => {
        if (num > MusicList.length - 1) {
            return 0;
        }
        if (num < 0) {
            return MusicList.length - 1;
        }
        return num;
    };

    const nextSong = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkIndex(newIndex);
        });
    };

    const prevSong = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkIndex(newIndex);
        });
    }

    useEffect(() => {
        setSong(MusicList[index]);
    }, [index])

    return (
        <section className="music-container">
            <h1>Music</h1>
            <div className='underline'></div>

            <div className="player-wrapper">
                <ReactPlayer
                    url={song.url}
                    className="react-player"
                    playing={false}
                    controls
                    volume={0.4}
                    width='100%'
                    height='100%'
                />
            </div>

            <article className="song-container">
                <button className='prev-btn' onClick={prevSong}><FaChevronLeft /></button>
                <section className='song-info'>
                    <h2>{song.name}</h2>
                    <h3>{song.description}</h3>
                </section>
                <button className='next-btn' onClick={nextSong}><FaChevronRight /></button>
            </article>
        </section>
    )
}

export default Music;
