import React from "react";
import { useState } from "react";
import { GoPlay } from "react-icons/go";
import { BsPauseCircleFill } from "react-icons/bs";
import { ImPrevious, ImNext } from "react-icons/im";
const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div>
      <div className="player-card">
        <h3 className="active-song-name">Song Name</h3>
        <h5 className="active-artist-name">Artist</h5>
        <div className="control-icon">
          <ImPrevious color="white" size={40} className="icons" />
          {isPlaying ? (
            <BsPauseCircleFill
              color="#ff5722"
              size={60}
              className="icons"
              onClick={togglePlay}
            />
          ) : (
            <GoPlay
              color="#ff5722"
              size={60}
              className="icons"
              onClick={togglePlay}
            />
          )}

          <ImNext color="white" size={40} className="icons" />
        </div>
      </div>
    </div>
  );
};

export default Player;
