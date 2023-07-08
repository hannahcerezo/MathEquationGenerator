import React from "react";


const UserAnswer = (props) => {

  const handleChange = (e) => {
    let input = Number(e.target.value);
    props.setUserAns(input);
  }

  return (
    <div className="user-answer">
      <label>
        <input name="userAnswer" onChange={handleChange}></input>
      </label>
    </div>
  )
}

export default UserAnswer;