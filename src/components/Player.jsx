import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { GoPlay } from "react-icons/go";
import { BsPauseCircleFill } from "react-icons/bs";
import { ImPrevious, ImNext } from "react-icons/im";
const Player = ({ currentSong, currentIndex }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div>
      <audio ref={audioRef} src={currentSong.music}></audio>

      <div className="player-card">
        {currentSong ? (
          <div>
            <h3 className="active-song-name">{currentSong.name}</h3>
            <h5 className="active-artist-name">{currentSong.creator}</h5>
          </div>
        ) : (
          ""
        )}

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
