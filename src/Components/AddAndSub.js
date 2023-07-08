import React from "react";
import SelectOperator from './SelectOperator';
import { useState } from 'react';
import Equation from './Equation';
import UserAnswer from './UserAnswer';

const AddAndSub = () => {

  const [operator, setOperator] = useState('+');
  const [show, setShow] = useState(false);
  const [eqVals, setEqVals] = useState({ firstVal: Math.floor(Math.random() * 100), secondVal: Math.floor(Math.random() * 100) });
  const [userAns, setUserAns] = useState();
  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);

  const handleStart = () => {
    setShow(true);
    document.querySelector('.start').style.display = 'none';
  }

  const handleEnter = () => {
    let tempEqAns;
    if (operator === '+') {
      tempEqAns = eqVals.firstVal + eqVals.secondVal;
    } else if (operator === '-') {
      tempEqAns = eqVals.firstVal - eqVals.secondVal;
    }

    if (tempEqAns === userAns) {

      setIsCorrect(true);
      setIsIncorrect(false);
      setEqVals({ firstVal: Math.floor(Math.random() * 100), secondVal: Math.floor(Math.random() * 100) });
      document.body.style.backgroundColor = 'green'
      setTimeout((() => document.body.style.backgroundColor = '#282c34'), 2000);
    } else {
      setIsCorrect(false);
      setIsIncorrect(true);
      document.body.style.backgroundColor = 'red';
      setTimeout((() => document.body.style.backgroundColor = '#282c34'), 2000);
    }
  }

  return (
    <div className="add-sub">
      <div className="eq-generator">
        <SelectOperator selectOperator={setOperator} />
        <button className="start" onClick={handleStart}>LETS GO!</button>
        {show &&
          <div className="eq">
            <Equation operator={operator} setEq={eqVals} />
            <UserAnswer setUserAns={setUserAns} /> {isCorrect && '✅'} {isIncorrect && '❌'}
            <button onClick={handleEnter}>Enter</button>
          </div>
        }
      </div>
    </div>
  );
}

export default AddAndSub;