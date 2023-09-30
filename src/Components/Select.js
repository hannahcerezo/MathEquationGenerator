import React from "react";
import AddAndSub from "./AddAndSub";
import Multiply from "./Multiply";
import { NavLink } from "react-router-dom";

const Select = () => {


  return (
    <>
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/add-and-sub">Addition and Subtraction</NavLink>
          </li>
          <li>
            <NavLink to="/multiply">Multiplication</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Select;