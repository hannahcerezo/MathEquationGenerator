
import './App.css';
import SelectOperator from './SelectOperator';
import { useState } from 'react';
import Equation from './Equation';
import UserAnswer from './UserAnswer';

function App() {

  const [operator, setOperator] = useState('+');
  const [show, setShow] = useState(false);
  const [eqVals, setEqVals] = useState({ firstVal: Math.floor(Math.random() * 100), secondVal: Math.floor(Math.random() * 100) });
  const [userAns, setUserAns] = useState();
  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);

  const handleStart = () => {
    setShow(true);
  }

  const handleEnter = () => {
    let tempEqAns;
    if (operator === '+') {
      tempEqAns = eqVals.firstVal + eqVals.secondVal;
    } else if (operator === '-') {
      tempEqAns = eqVals.firstVal - eqVals.secondVal;
    }

    console.log(userAns);
    console.log(tempEqAns);
    if (tempEqAns === userAns) {

      setIsCorrect(true);
      setIsIncorrect(false);
      setEqVals({ firstVal: Math.floor(Math.random() * 100), secondVal: Math.floor(Math.random() * 100) });
      document.body.style.backgroundColor = 'green'
      setTimeout((() => document.body.style.backgroundColor = '#282c34'), 3000);
    } else {
      setIsCorrect(false);
      setIsIncorrect(true);
      document.body.style.backgroundColor = 'red';
      setTimeout((() => document.body.style.backgroundColor = '#282c34'), 3000);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="eq-generator">
        <SelectOperator selectOperator={setOperator} />
        <div className="eq">
          <Equation operator={operator} setEq={eqVals} />
          <UserAnswer setUserAns={setUserAns} /> {isCorrect && '✅'} {isIncorrect && '❌'}
          <button onClick={handleEnter}>Enter</button>
        </div>

      </div>
    </div>
  );
}

export default App;
