import React from 'react';

const ColorBox = ({ color, onClick }) => {
  return <div className="color-box" style={{ backgroundColor: color }} onClick={onClick}></div>;
};

export default ColorBox;
