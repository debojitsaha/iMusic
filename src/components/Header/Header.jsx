import React from "react";
import "./Header.scss";
import Image from "react-bootstrap/Image";

const Header = ({ data }) => {
  return (
    <div className="header">
      <Image src={data.profile} />
      <div className="details">
        <span>{data.name}</span>
        <p> {data.artist} </p>
      </div>
    </div>
  );
};

export default Header;
