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
      <label>Select your range:</label>
      <ul>
        <li>
          <Link to={linkTo} state={{ level: EASY }} style={{ textDecoration: 'none' }}>0-10</Link>
        </li>
        <li>
          <Link to={linkTo} state={{ level: MEDIUM }} style={{ textDecoration: 'none' }}>0-50</Link>
        </li>
        <li>
          <Link to={linkTo} state={{ level: HARD }} style={{ textDecoration: 'none' }}>0-100</Link>
        </li>
      </ul>
    </>
  )
}

export default SelectLevel;