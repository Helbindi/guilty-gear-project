import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { MusicList } from '../data/MusicList';

function Music() {
    const [video, setVideo] = useState(MusicList);
    const [index, setIndex] = useState(0);

    return (
        <section className="container">
            <h1>Music</h1>
            <div className='underline'></div>
            <div className="content-right">
                <ReactPlayer
                url='https://www.youtube.com/embed/videoseries?list=PLyoF573Au7FuMTJwAZfudK8thhv8D1KFq'
                className="react-player"
                playing={false}
                controls
                volume={0.4}
                width='100%'
                height='100%'
            />
            </div>
        </section>
    )
}

export default Music;
