import React from 'react';
import ReactPlayer from 'react-player/lazy';
import './Hero.css';

function Hero(props) {
  const {url} = props;
    return (
      // <section className="hero-container">
        <div className='player-wrapper'>
          <ReactPlayer
            url={url}
            className='react-player'
            playing={false}
            controls
            volume={0.4}
            width='100%'
            height='100%'
          />
        </div>
      //</section>
    )
}

export default Hero;
