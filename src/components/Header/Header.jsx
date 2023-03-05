import React, { useContext } from "react";
import "./Header.scss";
import Image from "react-bootstrap/Image";
import musicContext from "../../contextApi/musicContext";

const Header = () => {
  const { currentSong } = useContext(musicContext);

  return (
    <div className="header">
      <Image src={currentSong.profile} />
      <div className="details">
        <span>{currentSong.name}</span>
        <p> {currentSong.artist} </p>
      </div>
    </div>
  );
};

export default Header;
