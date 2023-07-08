import React from "react";

const DisplayEquation = (props) => {

  return (
    <div className="display-eq equation">
      {props.firstVal}{props.operator}{props.secondVal}
    </div>
  )
}


export default DisplayEquation;