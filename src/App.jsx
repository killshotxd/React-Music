import React, { useState } from "react";
import AudioFiles from "./components/AudioFiles";
import { audios } from "./AudioData";
import Player from "./components/Player";
const App = () => {
  const [songs, setSongs] = useState(audios);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentSong, setCurrentSOng] = useState({});
  const getSongData = (song, index) => {
    setCurrentIndex(index);
    setCurrentSOng(song);
  };
  return (
    <>
      <div className="player-main">
        <Player currentSong={currentSong} currentIndex={currentIndex} />
      </div>
      <div className="app-main">
        {songs.map((song, index) => {
          return (
            <AudioFiles song={song} getSongData={getSongData} index={index} />
          );
        })}
      </div>
    </>
  );
};

export default App;
