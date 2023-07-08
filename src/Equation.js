import React from "react";
import DisplayEquation from "./DisplayEquation";

const Equation = (props) => {

  return (
    <div className="equation">
      <DisplayEquation firstVal={props.setEq.firstVal} secondVal={props.setEq.secondVal} operator={props.operator} />
    </div>
  )
}

export default Equation;

// Make this just the component that displays the equation