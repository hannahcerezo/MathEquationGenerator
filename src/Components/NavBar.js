import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="navigation">
      <nav>
        <NavLink to="/MathEquationGenerator" style={{ textDecoration: 'none' }}>Home</NavLink>
      </nav>
    </div>
  )
}

export default NavBar;