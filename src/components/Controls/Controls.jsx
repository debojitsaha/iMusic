import React from "react";
import "./Controls.scss";
import {
  RxTrackPrevious,
  RxTrackNext,
  RxHamburgerMenu,
  RxLoop,
} from "react-icons/rx";
import { FiPlay, FiPause, FiShuffle } from "react-icons/fi";

const Controls = () => {
  return (
    <div className="controls">
      <div className="left">
        <RxLoop size={"30px"} color="#f73263" />
      </div>
      <div className="center">
        <RxTrackPrevious size={"30px"} />
        <FiPlay size={"30px"} />
        <RxTrackNext size={"30px"} />
      </div>
      <div className="right">
        <RxHamburgerMenu size={"30px"} color="#f73263" />
        <FiShuffle size={"30px"} color="#f73263" />
      </div>
    </div>
  );
};

export default Controls;
