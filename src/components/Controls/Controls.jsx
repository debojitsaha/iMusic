import React, { useContext, useState } from "react";
import "./Controls.scss";
import {
  RxTrackPrevious,
  RxTrackNext,
  RxHamburgerMenu,
  RxLoop,
} from "react-icons/rx";
import { FiPlay, FiPause, FiShuffle } from "react-icons/fi";
import { MdOutlineDragIndicator } from "react-icons/md";
import musicContext from "../../contextApi/musicContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Reorder, useDragControls } from "framer-motion";

const Controls = ({ audioElem }) => {
  const {
    isPlaying,
    setIsPlaying,
    songs,
    setSongs,
    currentSong,
    setCurrentSong,
    loop,
    setLoop,
  } = useContext(musicContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [items, setItems] = useState(songs);
  const controls = useDragControls();

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

  const handleLoop = () => {
    setLoop(!loop);

    if (audioElem.current.currentTime === audioElem.current.duration) {
      if (loop) {
        audioElem.current.currentTime = 0;
      } else {
        next();
      }
    }
  };

  const updateSongs = () => {
    setSongs(items);
  };

  return (
    <div className="controls">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>All Songs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Reorder.Group axis="y" values={items} onReorder={setItems} as="ol">
            {items.map((item) => (
              <Reorder.Item
                key={item.name}
                value={item}
                dragControls={controls}
                onPointerUp={updateSongs}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "20px",
                  fontWeight: "500",
                  color:`${currentSong.name === item.name ? "#fd2a3c" : "#222222"}`                  
                }}
              >
                <span>
                  {item.name}
                </span>
                <MdOutlineDragIndicator
                  className="reorder-handle"
                  onPointerDown={(e) => controls.start(e)}
                  cursor="grab"
                />
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="left">
        <RxLoop
          size={"30px"}
          color={loop ? "#f73263" : "black"}
          onClick={handleLoop}
          cursor="pointer"
        />
      </div>
      <div className="center">
        <RxTrackPrevious size={"30px"} onClick={previous} cursor="pointer" />
        {!isPlaying ? (
          <FiPlay size={"30px"} onClick={PlayPause} cursor="pointer" />
        ) : (
          <FiPause size={"30px"} onClick={PlayPause} cursor="pointer" />
        )}
        <RxTrackNext size={"30px"} onClick={next} cursor="pointer" />
      </div>
      <div className="right">
        <RxHamburgerMenu
          size={"30px"}
          color="#f73263"
          cursor="pointer"
          onClick={handleShow}
        />
        <FiShuffle size={"30px"} color="#f73263" cursor="pointer" />
      </div>
    </div>
  );
};

export default Controls;
