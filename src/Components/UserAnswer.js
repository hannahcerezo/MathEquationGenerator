import React from "react";
import { useState } from "react";


const UserAnswer = (props) => {

  const [error, setError] = useState('');

  const handleChange = (e) => {
    let input = Number(e.target.value);

    props.setUserAns(input);

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