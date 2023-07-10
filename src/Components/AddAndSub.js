import React from "react";
import { useState } from 'react';
import SelectOperator from './SelectOperator';
import Equation from './Equation';
import UserAnswer from './UserAnswer';
import DisplayEquation from "./DisplayEquation";
import Points from "./Points";

const AddAndSub = () => {

  const [operator, setOperator] = useState('+');
  const [show, setShow] = useState(false);
  const [eqVals, setEqVals] = useState({ firstVal: Math.floor(Math.random() * 100), secondVal: Math.floor(Math.random() * 100) });
  const [userAns, setUserAns] = useState();
  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [points, setPoints] = useState(0);

  const handleStart = () => {
    setShow(true);
    document.querySelector('.start').style.display = 'none';
  }

  const handleEnter = () => {

    // if (userAns === 'error') {
    //   return;
    // }

    let tempEqAns;

    if (operator === '+') {
      tempEqAns = eqVals.firstVal + eqVals.secondVal;
    } else if (operator === '-') {
      tempEqAns = eqVals.firstVal - eqVals.secondVal;
    }

    if (tempEqAns === userAns) {

      // setIsCorrect(true);
      // setIsIncorrect(false);
      setPoints(points + 1);
      setEqVals({ firstVal: Math.floor(Math.random() * 100), secondVal: Math.floor(Math.random() * 100) });
      document.body.style.backgroundColor = 'green'
      setTimeout((() => document.body.style.backgroundColor = '#282c34'), 2000);

    } else if (tempEqAns !== userAns) {

      // setIsCorrect(false);
      // setIsIncorrect(true);
      setPoints(0);
      document.body.style.backgroundColor = 'red';
      setTimeout((() => document.body.style.backgroundColor = '#282c34'), 2000);

    }

  }

  return (
    <div className="add-sub">
      <div className="eq-generator">
        <SelectOperator selectOperator={setOperator} />
        <button className="start btn" onClick={handleStart}>LETS GO!</button>
        <Points points={points} />
        {show &&
          <div className="hide-display">
            <div className="equation">
              {/* <Equation operator={operator} setEq={eqVals} /> */}
              <DisplayEquation firstVal={eqVals.firstVal} secondVal={eqVals.secondVal} operator={operator} />
            </div>
            <div className="input">
              <UserAnswer setUserAns={setUserAns} />
              {/* {isCorrect && '✅'} {isIncorrect && '❌'} */}
            </div>
            <button className="btn" onClick={handleEnter}>Enter</button>
          </div>
        }
      </div>
    </div>
  );
}

export default AddAndSub;