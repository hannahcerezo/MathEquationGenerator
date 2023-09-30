import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const Joi = require('joi');

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(data => data.json())
}

export default function LogIn({ setToken }) {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');
  const [validForm, setValidForm] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await loginUser({
      username, password
    });
    setToken(token);
    console.log(token);

    // const form = e.target;
    // const formData = new FormData(form);

    // const formJson = Object.fromEntries(formData.entries());

    // const JoiSchema = Joi.object({
    //   username: Joi.string().alphanum().min(5).max(20).required(),
    //   password: Joi.string().alphanum().min(8).max(20).required(),
    // })

    // try {

    //   const validateData = await JoiSchema.validate(formJson);

    // } catch (err) {
    //   console.log(response.error.details[0].message);
    //   setError(response.error.details[0].message);
    // }

  }

  return (
    <div className="login">
      <h1>Please Login</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label>Username:
          <input className="username" name="username" type="text" onChange={e => setUsername(e.target.value)} /></label>
        <label>Password:
          <input className="password" name="password" type="text" onChange={e => setPassword(e.target.value)} /></label>
        <button type="submit">Submit</button>
      </form>
      <div className="validate-msg">
        {error}
      </div>

    </div>
  )
}

LogIn.propTypes = {
  setToken: PropTypes.func.isRequired
}