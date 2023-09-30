import React from "react";
import { useState } from "react";
import DisplayEquation from "./DisplayEquation";
import UserAnswer from "./UserAnswer";
import Points from "./Points";

const Multiply = () => {

  const EASY = 11;
  const MEDIUM = 50;
  const HARD = 100;
  const [mEqVals, setMEqVals] = useState({ firstVal: Math.floor(Math.random() * EASY), secondVal: Math.floor(Math.random() * EASY) });
  const [userAns, setUserAns] = useState();
  const [points, setPoints] = useState(0);

  // high score
  let currHighScoreMult = localStorage.getItem('highScoreMult') || 0;
  const [highScore, setHighScore] = useState(Number(currHighScoreMult));
  localStorage.setItem('currentPointsMult', points.toString());
  let current = Number(localStorage.getItem('currentPointsMult'));
  if (current > highScore) {
    setHighScore(current);
    localStorage.setItem('highScoreMult', current.toString());
  }

  const handleEnter = () => {
    let mTempEqAns = mEqVals.firstVal * mEqVals.secondVal;
    if (mTempEqAns === userAns) {
      setPoints(points + 1);
      setMEqVals({ firstVal: Math.floor(Math.random() * EASY), secondVal: Math.floor(Math.random() * EASY) });
      document.body.style.backgroundColor = 'green';
    } else {
      setPoints(0);
      document.body.style.backgroundColor = 'red';
    }
    setTimeout((() => document.body.style.backgroundColor = '#282c34'), 2000);
    document.querySelector('.user-answer-input').value = '';
  }

  return (
    <>
      <div className="mult">
        <div className="eq-generator">
          <div className="level-select">
            {/* <button>Easy</button><button>Medium</button><button>Hard</button> */}
          </div>
          <Points current={points} highScore={highScore} />
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


export default Multiply;