import React from "react";
import { useState } from "react";


const UserAnswer = (props) => {

  const [error, setError] = useState('');

  const handleChange = (e) => {
    let input = e.target.value;

    let numInput;
    if (input === ' ') {
      alert('Please input an answer');
    } else {
      numInput = Number(input);
    }

    props.setUserAns(numInput);

  }

  return (
    <div className="user-answer">
      <label>
        <input className="user-answer-input" name="userAnswer" onChange={handleChange} ></input>
      </label>
      <br></br>{error}
    </div>
  )
}

export default UserAnswer;