import React, { useContext, useEffect } from "react";
import "./Song.scss";
import Image from "react-bootstrap/Image";
import SeekBar from "react-seekbar-component";
import musicContext from "../../contextApi/musicContext";

const Song = ({audioElem}) => {
  const { isPlaying, currentSong } = useContext(musicContext);

  useEffect(() => {
    if(isPlaying){
      audioElem.current.play()
    }
    else{
      audioElem.current.pause()
    }
  }, [isPlaying,currentSong])
  
  
  return (
    <div className="song">
      <Image src={currentSong.thumbnail} />
      <audio src={currentSong.src} ref={audioElem} />
    </div>
  );
};

export default Song;
