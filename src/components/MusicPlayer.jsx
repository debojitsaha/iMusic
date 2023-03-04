import React from "react";
import "./MusicPlayer.scss";
import MusicData from "./MusicData.js";
import Header from "./Header/Header";
import Controls from "./Controls/Controls";
import Song from "./Song/Song";

const Music_Player = () => {
  return (
    <div className="music">
      {MusicData.map((data) => (
        <div>
          <Header data={data} />
          <Song data={data} />
          <Controls data={data} />
        </div>
      ))}
    </div>
  );
};

export default Music_Player;
