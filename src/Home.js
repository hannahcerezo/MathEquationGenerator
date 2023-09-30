import React from "react";
import LogIn from "./Components/LogIn";
import { NavLink } from "react-router-dom";

const Home = () => {

  return (
    <>
      {/* <LogIn /> */}
      <NavLink to="/select"><h1>LETS PLAY</h1></NavLink>
    </>
  )
}

export default Home;