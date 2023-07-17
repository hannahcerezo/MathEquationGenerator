import React from "react";
import { useState } from "react";

const Points = (props) => {

  return (
    <div className="points">
      <p>Points: {props.current}</p>
      <p>High Score: {props.highScore}</p>
    </div>
  )
}

export default Points;