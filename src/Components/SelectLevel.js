import React from "react";
import { Link } from "react-router-dom";


const SelectLevel = () => {

  return (
    <>
      <div className="select-level">
        <p>Select your range</p>
        <ul>
          <li>
            <Link to="/add-and-sub" state={{ level: "EASY" }}>0-10</Link>
          </li>
          <li>
            <Link to="/add-and-sub" state={{ level: "MEDIUM" }}>0-50</Link>
          </li>
          <li>
            <Link to="/add-and-sub" state={{ level: "HARD" }}>0-100</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SelectLevel;