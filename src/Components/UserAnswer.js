import React from "react";
import { useState } from "react";


const UserAnswer = (props) => {

  const [error, setError] = useState('');

  const handleChange = (e) => {
    let input = Number(e.target.value);
    props.setUserAns(input);

    // try {

    //   let input = Number(e.target.value);
    //   if (isNaN(input)) throw new Error('Answer must be a number');
    //   if (!isNaN(input)) props.setUserAns(input);

    // } catch (err) {
    //   setError('Answer must be a number');
    //   props.setUserAns('error');
    // }

  }

  return (
    <div className="user-answer">
      <label>
        <input className="user-answer-input" name="userAnswer" onChange={handleChange}></input>
      </label>
      <br></br>{error}
    </div>
  )
}

export default UserAnswer;