import React, { useContext } from "react";
import "./Controls.scss";
import {
  RxTrackPrevious,
  RxTrackNext,
  RxHamburgerMenu,
  RxLoop,
} from "react-icons/rx";
import { FiPlay, FiPause, FiShuffle } from "react-icons/fi";
import musicContext from "../../contextApi/musicContext";

const Controls = ({ audioElem }) => {
  const { isPlaying, setIsPlaying, songs, currentSong, setCurrentSong } = useContext(musicContext);

  const PlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const previous = () => {    
    const index = songs.findIndex((song) => song.name === currentSong.name);
    
    // console.log(index);
    // console.log(songs[songs.length - 1]);

    if (index === 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }

    audioElem.current.currentTime = 0;
  };
  
  const next = () => {    
    const index = songs.findIndex((song) => song.name === currentSong.name);

    if (index === songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }

    audioElem.current.currentTime = 0;
  };

  return (
    <div className="controls">
      <div className="left">
        <RxLoop size={"30px"} color="#f73263" />
      </div>
      <div className="center">
        <RxTrackPrevious size={"30px"} onClick={previous} />
        {!isPlaying ? (
          <FiPlay size={"30px"} onClick={PlayPause} />
        ) : (
          <FiPause size={"30px"} onClick={PlayPause} />
        )}
        <RxTrackNext size={"30px"} onClick={next} />
      </div>
      <div className="right">
        <RxHamburgerMenu size={"30px"} color="#f73263" />
        <FiShuffle size={"30px"} color="#f73263" />
      </div>
    </div>
  );
};

export default Controls;
