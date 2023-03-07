import React, { useRef } from "react";
import "./MusicPlayer.scss";
import Header from "./Header/Header";
import Controls from "./Controls/Controls";
import Song from "./Song/Song";
import TimeStamp from "./TimeStamp/TimeStamp";

const Music_Player = () => {
  const audioElem = useRef()

  return (
    <div className="music">
          <Header audioElem={audioElem} />
          <Song audioElem={audioElem} />
          <TimeStamp />
          <Controls audioElem={audioElem} />
        
    </div>
  );
};

export default Music_Player;
