import { useState, useRef, useEffect } from "react";
import "./slider.css";
import "./thumb.css";

function Slider({ percentage = 0, onChange }) {
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  const rangeRef = useRef();
  const thumbRef = useRef();

  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width;
    const thumbWidth = thumbRef.current.getBoundingClientRect().width;
    let centerThumb = (thumbWidth / 100) * percentage * -1;
    centerThumb = (centerThumb === -0 || isNaN(centerThumb)) ? 0 : centerThumb;
    // isNaN(centerThumb)?0:centerThumb
    console.log(centerThumb);
    const centerProgressBar =
      thumbWidth +
      (rangeWidth / 100) * percentage -
      (thumbWidth / 100) * percentage;
    setPosition(isNaN(percentage)? 0 : percentage);
    setMarginLeft(centerThumb);
    setProgressBarWidth(centerProgressBar);
  }, [percentage]);

  console.log(position);

  return (
    <div className="slider-container">
      <div
        className="progress-bar-cover"
        style={{
          width: `${progressBarWidth}px`,
        }}
      ></div>
      <div
        className="thumb"
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`,
        }}
      ></div>
      <input
        type="range"
        value={position}
        ref={rangeRef}
        step="0.01"
        className="range"
        onChange={onChange}
      />
    </div>
  );
}

export default Slider;
