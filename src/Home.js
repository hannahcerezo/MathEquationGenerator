import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {

  return (
    <div className="home">
      <NavLink to="/select"><h1>LETS PLAY</h1></NavLink>
    </div>
  )
}

export default Home;