import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="navigation">
      <nav>
        <NavLink to="/MathEquationGenerator">Home</NavLink>
      </nav>
    </div>
  )
}

export default NavBar;