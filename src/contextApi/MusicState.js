import React, { useState } from "react";
import MusicContext from "./musicContext";
import MusicData from "../components/MusicData";

const MusicState = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState(MusicData);
  const [currentSong, setCurrentSong] = useState(MusicData[0]);
  const [loop, setLoop] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [shuffle, setShuffle] = useState(false)

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        songs,
        setSongs,
        currentSong,
        setCurrentSong,
        loop,
        setLoop,
        percentage,
        setPercentage,
        duration,
        setDuration,
        currentTime,
        setCurrentTime,
        shuffle, 
        setShuffle
      }}
    >
      {props.children}
    </MusicContext.Provider>
  );
};

export default MusicState;
