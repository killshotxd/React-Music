import React from "react";
import { GoPlay } from "react-icons/go";
import { BsPauseCircleFill } from "react-icons/bs";
import { ImPrevious, ImNext } from "react-icons/im";
const Player = () => {
  return (
    <div>
      <div className="player-card">
        <h3 className="active-song-name">Song Name</h3>
        <h5 className="active-artist-name">Artist</h5>
        <div className="control-icon">
          <ImPrevious color="white" size={40} className="icons" />
          <GoPlay color="#ff5722" size={70} className="icons" />
          <BsPauseCircleFill color="#ff5722" size={60} className="icons" />
          <ImNext color="white" size={40} className="icons" />
        </div>
      </div>
    </div>
  );
};

export default Player;
