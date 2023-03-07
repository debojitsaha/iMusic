import React, { useContext, useEffect, useState } from "react";
import "./Controls.scss";
import {
  RxTrackPrevious,
  RxTrackNext,
  RxHamburgerMenu,
  RxLoop,
} from "react-icons/rx";
import { FiPlay, FiPause, FiShuffle } from "react-icons/fi";
import { MdOutlineDragIndicator } from "react-icons/md";
import { CgMoreVerticalO } from "react-icons/cg";
import musicContext from "../../contextApi/musicContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
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
    duration,
    currentTime,
    shuffle,
    setShuffle,
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

    if (shuffle) {
      const shuffleIndex = Math.floor(
        songs.length - Math.random() * songs.length
      );
      setCurrentSong(songs[shuffleIndex]);
    } else {
      if (index === 0) {
        setCurrentSong(songs[songs.length - 1]);
      } else {
        setCurrentSong(songs[index - 1]);
      }
    }

    audioElem.current.currentTime = 0;
  };

  const next = () => {
    const index = songs.findIndex((song) => song.name === currentSong.name);

    if (shuffle) {
      const shuffleIndex = Math.floor(
        songs.length - Math.random() * songs.length
      );
      setCurrentSong(songs[shuffleIndex]);
    } else {
      if (index === songs.length - 1) {
        setCurrentSong(songs[0]);
      } else {
        setCurrentSong(songs[index + 1]);
      }
    }

    audioElem.current.currentTime = 0;
  };

  const handleLoop = () => {
    setLoop(!loop);
  };

  const handeShuffle = () => {
    setShuffle(!shuffle);
  };

  const updateSongs = () => {
    setSongs(items);
  };

  useEffect(() => {
    if (currentTime >= duration) {
      // console.log('hello');
      if (loop) {
        audioElem.current.currentTime = 0;
        audioElem.current.play();
      } else {
        next();
      }
    }
    // console.log("Time= "+currentTime);
    // console.log("Duration= "+duration);
  }, [currentTime]);

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
                  color: `${
                    currentSong.name === item.name ? "#fd2a3c" : "#222222"
                  }`,
                }}
              >
                <span>{item.name}</span>
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
        <RxTrackPrevious onClick={previous} cursor="pointer" className='icons' />
        {!isPlaying ? (
          <FiPlay onClick={PlayPause} cursor="pointer" className='icons' />
        ) : (
          <FiPause onClick={PlayPause} cursor="pointer"  className='icons' />
        )}
        <RxTrackNext onClick={next} cursor="pointer" className='icons' />
      </div>
      <div className="right">
        <RxHamburgerMenu
          size={"30px"}
          color="#f73263"
          cursor="pointer"
          onClick={handleShow}
        />
        <FiShuffle
          size={"30px"}
          color={shuffle ? "#f73263" : "black"}
          cursor="pointer"
          onClick={handeShuffle}          
        />
      </div>
      <DropdownButton
        align="end"        
        title={<CgMoreVerticalO size={"25px"} color="black" />}
        className="more"
        id="dropdown-menu-align-end"
      >
        <Dropdown.Item eventKey="1">
          <RxLoop
            color={loop ? "#f73263" : "black"}
            onClick={handleLoop}
            cursor="pointer"
            className='icons'
          />
        </Dropdown.Item>
        <Dropdown.Item eventKey="2">
          <RxHamburgerMenu
            color="#f73263"
            cursor="pointer"
            onClick={handleShow}
            className='icons'
          />
        </Dropdown.Item>
        <Dropdown.Item eventKey="3">
          <FiShuffle
            color={shuffle ? "#f73263" : "black"}
            cursor="pointer"
            onClick={handeShuffle}
            className='icons'
          />
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default Controls;
