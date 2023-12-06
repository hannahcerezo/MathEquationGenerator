import React from "react";
import { Link } from "react-router-dom";
import { ADDANDSUB } from "../Config";
import { MULTIPLY } from "../Config";

const Select = () => {

  return (
    <>
      <div className="menu">
        <ul>
          <li>
            <Link to="/select-level" state={{ operation: ADDANDSUB }}>Addition and Subtraction</Link>
          </li>
          <li>
            <Link to="/select-level" state={{ operation: MULTIPLY }}>Multiplication</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Select;