import React, { useContext, useEffect } from "react";
import "./Song.scss";
import Image from "react-bootstrap/Image";
import Slider from "../Slider/Slider.jsx";
import musicContext from "../../contextApi/musicContext";

const Song = ({ audioElem }) => {
  const {
    isPlaying,
    currentSong,
    percentage,
    setPercentage,
    setCurrentTime,
    setDuration,
  } = useContext(musicContext);

  const onChange = (e) => {
    const audio = audioElem.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(parseInt(time.toFixed(2)));
  };

  useEffect(() => {
    console.log(currentSong);
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying, currentSong]);

  return (
    <div className="song">
      <Image src={currentSong.thumbnail} />
      <Slider percentage={percentage} onChange={onChange} />
      <audio
        src={currentSong.src}
        ref={audioElem}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(parseInt(e.currentTarget.duration.toFixed(2)));
        }}
      />
    </div>
  );
};

export default Song;
