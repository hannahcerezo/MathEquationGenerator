import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { EASY } from "../Config";
import { MEDIUM } from "../Config";
import { HARD } from "../Config";

const SelectLevel = () => {

  const location = useLocation();
  const { operation } = location.state;
  let linkTo = "/";

  linkTo = linkTo + operation.toString();

  return (
    <>
      <div className="select-level">
        <label>Select your range:</label>
        <ul>
          <li>
            <Link to={linkTo} state={{ level: EASY }}>0-10</Link>
          </li>
          <li>
            <Link to={linkTo} state={{ level: MEDIUM }}>0-50</Link>
          </li>
          <li>
            <Link to={linkTo} state={{ level: HARD }}>0-100</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SelectLevel;