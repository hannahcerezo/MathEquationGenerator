import React from "react";
import { useState } from "react";
import DisplayEquation from "./DisplayEquation";

const Equation = (props) => {

  // const [firstVal, setFirstVal] = useState(Math.floor(Math.random() * 100));
  // const [secondVal, setSecondVal] = useState(Math.floor(Math.random() * 100));
  // let eq = firstVal + props.operator + secondVal;


  // const randomNumbers = () => {
  //   return Math.floor(Math.random() * 100);
  // }

  // const handleClick = () => {
  //   setFirstVal(randomNumbers);
  //   setSecondVal(randomNumbers);
  // }


  return (
    <div className="equation">
      <DisplayEquation firstVal={props.setEq.firstVal} secondVal={props.setEq.secondVal} operator={props.operator} />
    </div>
  )
}

export default Equation;