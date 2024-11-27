import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Reg. From
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/stuent-list">
              Students List
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
