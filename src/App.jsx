import React, { useState } from "react";
import AudioFiles from "./components/AudioFiles";
import { audios } from "./AudioData";
import Player from "./components/Player";
const App = () => {
  const [songs, setSongs] = useState(audios);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentSong, setCurrentSOng] = useState(songs[0]);
  const getSongData = (song, index) => {
    setCurrentIndex(index);
    setCurrentSOng(song);
  };

  const nextSong = () => {
    setCurrentIndex(currentIndex + 1);
    setCurrentSOng(audios[currentIndex + 1]);
  };

  const prevSong = () => {
    setCurrentIndex(currentIndex - 1);
    setCurrentSOng(audios[currentIndex - 1]);
  };

  return (
    <>
      <div className="player-main">
        <Player
          currentSong={currentSong}
          currentIndex={currentIndex}
          nextSong={nextSong}
          prevSong={prevSong}
        />
      </div>
    </>
  );
};

export default App;
