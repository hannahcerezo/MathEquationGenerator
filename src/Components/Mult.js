import React from "react";
import { useState } from "react";
import DisplayEquation from "./DisplayEquation";
import UserAnswer from "./UserAnswer";

const Mult = () => {

  const easy = 11;
  const medium = 50;
  const hard = 100;
  const [mEqVals, setMEqVals] = useState({ firstVal: Math.floor(Math.random() * easy), secondVal: Math.floor(Math.random() * easy) });
  const [userAns, setUserAns] = useState();

  const handleEnter = () => {
    let mTempEqAns = mEqVals.firstVal * mEqVals.secondVal;

    console.log(mTempEqAns);
    console.log(userAns);

    if (mTempEqAns === userAns) {
      setMEqVals({ firstVal: Math.floor(Math.random() * easy), secondVal: Math.floor(Math.random() * easy) })
      document.body.style.backgroundColor = 'green'
      setTimeout((() => document.body.style.backgroundColor = '#282c34'), 2000);
    } else {
      document.body.style.backgroundColor = 'red'
      setTimeout((() => document.body.style.backgroundColor = '#282c34'), 2000);
    }
  }

  return (
    <>
      <div className="mult">
        <div className="mult eq-generator equation">
          <DisplayEquation firstVal={mEqVals.firstVal} secondVal={mEqVals.secondVal} operator={'*'} />
          <UserAnswer setUserAns={setUserAns} />
          <button onClick={handleEnter}>Enter</button>
        </div>
      </div>
    </>
  )

}


export default Mult;