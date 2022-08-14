import React, { useState } from "react";
import AudioFiles from "./components/AudioFiles";
import { audios } from "./AudioData";
import Player from "./components/Player";
const App = () => {
  const [songs, setSongs] = useState(audios);
  const [currentSong, setCurrentSOng] = useState({});
  const getSongData = (song) => {
    setCurrentSOng(song);
  };
  return (
    <>
      <div className="player-main">
        <Player currentSong={currentSong} />
      </div>
      <div className="app-main">
        {songs.map((song) => {
          return <AudioFiles song={song} getSongData={getSongData} />;
        })}
      </div>
    </>
  );
};

export default App;
