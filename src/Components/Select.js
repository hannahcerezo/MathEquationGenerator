import React from "react";
import { Link } from "react-router-dom";
import { ADDANDSUB } from "../Config";
import { MULTIPLY } from "../Config";

const Select = () => {

  return (
    <>
      <label>Select operation:</label>
      <ul>
        <li>
          <Link to="/select-level" state={{ operation: ADDANDSUB }} style={{ textDecoration: 'none' }}>Addition and Subtraction</Link>
          </li>

        <li>
          <Link to="/select-level" state={{ operation: MULTIPLY }} style={{ textDecoration: 'none' }}>Multiplication</Link>
          </li>

      </ul>
    </>
  );
}

export default Select;