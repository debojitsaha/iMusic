import React from "react";
import "./Song.scss";
import Image from "react-bootstrap/Image";
import SeekBar from "react-seekbar-component";

const Song = ({ data }) => {
  return (
    <div className="song">
      <Image src={data.thumbnail} />
      <SeekBar
        getNumber={0}
        width="100%"
        backgroundColor="gray"
        fillColor="red"
        fillSecondaryColor="blue"
        headColor="white"
        headShadow="white"
        headShadowSize={6}
        progress={89}
      />
    </div>
  );
};

export default Song;
