import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="navigation">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add-and-sub">Addition and Subtraction</NavLink>
          </li>
          <li>
            <NavLink to="/mult">Multiplication</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;