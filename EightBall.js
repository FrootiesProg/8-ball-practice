import React, { useState } from "react";
import ResetButton from "./ResetButton";
import RecordKeeping from "./RecordKeeping";
import ColorBox from "./ColorBox";

const EightBall = ({ answers }) => {
  const initialState = {
    msg: "Think of a Question",
    color: "black",
  };

  const [ballState, setBallState] = useState(initialState);
  const [colorCounts, setColorCounts] = useState({
    green: 0,
    goldenrod: 0,
    red: 0,
  });

  const possibleColors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "lime",
    "pink",
    "teal",
    "indigo",
  ];

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
  };

  const handleChangeColor = () => {
    const newColor =
      possibleColors[Math.floor(Math.random() * possibleColors.length)];
    setBallState((prevState) => ({ ...prevState, color: newColor }));
  };

  const handleColorChange = (color) => {
    setBallState((prevState) => ({ ...prevState, color }));
  };

  const handleClick = () => {
    if (ballState.color !== "black") {
      setColorCounts((prevCounts) => ({
        ...prevCounts,
        [ballState.color]: prevCounts[ballState.color] + 1,
      }));
    }

    const randomAnswer = getRandomAnswer();
    setBallState(randomAnswer);
  };

  const handleReset = () => {
    setBallState(initialState);
    setColorCounts({
      green: 0,
      goldenrod: 0,
      red: 0,
    });
  };

  const ResetButton = ({ onReset }) => {
    return <button onClick={onReset}>Reset</button>;
  }

  return (
    <div>
      <div
        className="EightBall"
        onClick={handleClick}
        style={{ backgroundColor: ballState.color }}
      >
        <div className="message">{ballState.msg}</div>
      </div>
      <ResetButton onReset={handleReset} />
      <RecordKeeping colorCounts={colorCounts} />
      <div className="color-box-container">
        {possibleColors.map((color) => (
          <ColorBox
            key={color}
            color={color}
            onClick={() => handleColorChange(color)}
          />
        ))}
      </div>
      <button onClick={handleChangeColor}>Change</button>
    </div>
  );
};

export default EightBall;
