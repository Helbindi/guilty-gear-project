import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player/lazy';
import VisibilitySensor from 'react-visibility-sensor';
import "./DisplayMoves.css";

function DisplayMoves(props) {
  const [imageState, setImageState] = useState(props.defaultIndex);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  function toggleActiveStyle(item) {
    if(props.moves[item].id === imageState) {
      return "img-active";
    } else {
      return "img-inactive";
    }
  }
  useEffect(() => {
    if(isVisible) {
      setIsPlaying(true);
    } 
    else {
      if(isPlaying) {
        setIsPlaying(false);
      }
    }
  }, [isVisible, isPlaying]);

  return (
    <div className="container">
      <h2> {props.name} </h2>
      <div className="content-left">
          {
            props.moves.map((item) => {
              return(
                <div className="items-container">
                  <img 
                    className={toggleActiveStyle(item.id)}
                    key={item.id}
                    src={item.imageURL} 
                    alt="attack"
                    onClick={() => setImageState(item.id)}
                  />
                </div>
              )
            })
          }
      </div>

      <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)} partialVisibility={true}>
        <div className="content-right">
          <ReactPlayer
            url={props.moves[imageState].videoURL}
            className="react-player"
            playing={isPlaying}
            loop
            muted
            width='100%'
            height='100%'
          />
        </div>
      </VisibilitySensor>
    </div>
  );
}

export default DisplayMoves;
