import React, {Component, useState} from 'react';

const Square = () => {
  const [color1 , setColor1] = useState(`red`)
  const [color2 , setColor2] = useState(`blue`)

  const handleClick1 = () => {
    setColor1(color2)
    setColor2(color1)
  }

  const handleClick2 = () => {
    setColor1(color2)
    setColor2(color1)
  }

  return (
  <div>
    <div
    style={{
      width: `100px`,
      height: `100px`,
      backgroundColor: color1,
      cursor: `pointer`,
      margin: `10px`,
    }}
    onClick={handleClick1}
    ></div>
    <div
    style={{
      width: `100px`,
      height: `100px`,
      backgroundColor: color2,
      cursor: `pointer`,
      margin: `10px`,
    }}
    onClick={handleClick2}
    ></div>
  </div>
  );
};

export default Square