import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {

  return (
    <div className="welcome">
      <div className="welcome-message">

        <p>Do you want to practice your basic addition, subtraction, and multiplication skills? This app will generate random two-value math equations to help you sharpen your math skills at any level. If you want to get started, click the link below!</p>
      </div>
      <NavLink to="/select" style={{ textDecoration: 'none' }}><h1>LETS PLAY</h1></NavLink>
    </div>
  )
}

export default Home;