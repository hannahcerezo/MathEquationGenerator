import React from "react";
import { useState } from 'react';
import SelectOperator from './SelectOperator';
import UserAnswer from './UserAnswer';
import DisplayEquation from "./DisplayEquation";
import Points from "./Points";
import { useLocation } from "react-router-dom";
import { EASY } from "../Config";
import { MEDIUM } from "../Config";
import { HARD } from "../Config";

const AddAndSub = () => {

  const location = useLocation();
  const { level } = location.state;

  let endRange = level;

  // state hooks
  const [operator, setOperator] = useState('+');
  const [show, setShow] = useState(false);
  const [eqVals, setEqVals] = useState({ firstVal: Math.floor(Math.random() * endRange), secondVal: Math.floor(Math.random() * endRange) });
  const [userAns, setUserAns] = useState();
  const [points, setPoints] = useState(0);

  // high score
  let currHighScoreAS = localStorage.getItem('highScoreAS') || 0;
  const [highScore, setHighScore] = useState(Number(currHighScoreAS));
  localStorage.setItem('currentPointsAS', points.toString());
  let current = Number(localStorage.getItem('currentPointsAS'));
  if (current > highScore) {
    setHighScore(current);
    localStorage.setItem('highScoreAS', current.toString());
  }

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

    if (userAns === '') {
      // Don't do anything
      alert('Please input an answer');
    } else if (tempEqAns === userAns) {
      setPoints(points + 1);
      setEqVals({ firstVal: Math.floor(Math.random() * endRange), secondVal: Math.floor(Math.random() * endRange) });
      document.body.style.backgroundColor = 'green';
    } else if (tempEqAns !== userAns) {
      setPoints(0);
      document.body.style.backgroundColor = 'red';
    }

    setTimeout((() => document.body.style.backgroundColor = '#282c34'), 2000);
    document.querySelector('.user-answer-input').value = '';
  }

  return (
    <div className="add-sub">
      <div className="eq-generator">
        <SelectOperator selectOperator={setOperator} />
        <button className="start btn" onClick={handleStart}>LETS GO!</button>
        <Points current={points} highScore={highScore} />
        {show &&
          <div className="hide-display">
            <div className="equation">
              {/* <Equation operator={operator} setEq={eqVals} /> */}
              <DisplayEquation firstVal={eqVals.firstVal} secondVal={eqVals.secondVal} operator={operator} />
            </div>
            <div className="input">
              <UserAnswer setUserAns={setUserAns} />
            </div>
            <button className="btn" onClick={handleEnter}>Enter</button>
          </div>
        }
      </div>
    </div>
  );
}

export default AddAndSub;