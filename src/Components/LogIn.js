import React from "react";
import { useState } from "react";

const Joi = require('joi');


const LogIn = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [validForm, setValidForm] = useState('');
  let response;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    const JoiSchema = Joi.object({
      username: Joi.string().alphanum().min(5).max(20).required(),
      password: Joi.string().alphanum().min(8).max(20).required(),
    })

    try {

      const validateData = await JoiSchema.validate(formJson);

    } catch (err) {
      console.log(response.error.details[0].message);
      setError(response.error.details[0].message);
    }

  }

  const formValidation = (user) => {
    // check if the username and password fields are empty or contain invalid characters

    const JoiSchema = Joi.object({
      username: Joi.string().alphanum().min(5).max(20).required(),
      password: Joi.string().alphanum().min(8).max(20).required(),
    })

    return JoiSchema.validate(user);
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div className="login">
      <h1>Please Login</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label>Username:</label>
        <input className="username" name="username" type="text" onChange={handleUsernameChange} />
        <label>Password</label>
        <input className="password" name="password" type="text" onChange={handlePasswordChange} />
        <button type="submit">Submit</button>
      </form>
      <div className="validate-msg">
        {error}
      </div>

    </div>
  )
}

export default LogIn;