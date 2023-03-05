import React, { useState } from "react";
import MusicContext from "./musicContext";
import MusicData from "../components/MusicData";

const MusicState = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState(MusicData);
  const [currentSong, setCurrentSong] = useState(MusicData[0]);
  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        songs,
        setSongs,
        currentSong,
        setCurrentSong,
      }}
    >
      {props.children}
    </MusicContext.Provider>
  );
};

export default MusicState;
