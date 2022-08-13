import React, { useState } from "react";
import Player from "./components/Player";
import { audios } from "./AudioData";

const App = () => {
  const [songs, setSongs] = useState(audios);
  console.log(audios);
  return (
    <div className="app-main">
      {songs.map((song) => {
        return <Player song={song} />;
      })}
    </div>
  );
};

export default App;
