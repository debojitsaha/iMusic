import React, { useRef } from "react";
import "./MusicPlayer.scss";
import Header from "./Header/Header";
import Controls from "./Controls/Controls";
import Song from "./Song/Song";

const Music_Player = () => {
  const audioElem = useRef()

  return (
    <div className="music">
          <Header audioElem={audioElem} />
          <Song audioElem={audioElem} />
          <Controls audioElem={audioElem} />
        
    </div>
  );
};

export default Music_Player;
