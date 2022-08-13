import React, { useState } from "react";
import AudioFiles from "./components/AudioFiles";
import { audios } from "./AudioData";
import Player from "./components/Player";
const App = () => {
  const [songs, setSongs] = useState(audios);
  console.log(audios);
  return (
    <>
      <div className="player-main">
        <Player />
      </div>
      <div className="app-main">
        {songs.map((song) => {
          return <AudioFiles song={song} />;
        })}
      </div>
    </>
  );
};

export default App;
