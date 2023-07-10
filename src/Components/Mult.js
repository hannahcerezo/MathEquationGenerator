import React from "react";
import { useState } from "react";
import DisplayEquation from "./DisplayEquation";
import UserAnswer from "./UserAnswer";
import Points from "./Points";

const Mult = () => {

  const easy = 11;
  const medium = 50;
  const hard = 100;
  const [mEqVals, setMEqVals] = useState({ firstVal: Math.floor(Math.random() * easy), secondVal: Math.floor(Math.random() * easy) });
  const [userAns, setUserAns] = useState();
  const [points, setPoints] = useState(0);

  const handleEnter = () => {

    let mTempEqAns = mEqVals.firstVal * mEqVals.secondVal;

    if (mTempEqAns === userAns) {

      setPoints(points + 1);
      setMEqVals({ firstVal: Math.floor(Math.random() * easy), secondVal: Math.floor(Math.random() * easy) })
      document.body.style.backgroundColor = 'green'
      setTimeout((() => document.body.style.backgroundColor = '#282c34'), 2000);

    } else {

      setPoints(0);
      document.body.style.backgroundColor = 'red'
      setTimeout((() => document.body.style.backgroundColor = '#282c34'), 2000);

    }

  }

  return (
    <>
      <div className="mult">
        <div className="eq-generator">
          <div className="level-select">
            {/* <button>Easy</button><button>Medium</button><button>Hard</button> */}
          </div>
          <Points points={points} />
          <div className="equation">
            <DisplayEquation firstVal={mEqVals.firstVal} secondVal={mEqVals.secondVal} operator={'*'} />
          </div>
          <div className="input">
            <UserAnswer setUserAns={setUserAns} />
          </div>
          <button className="btn" onClick={handleEnter}>Enter</button>
        </div>
      </div>
    </>
  )

}


export default Mult;