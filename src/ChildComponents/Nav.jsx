import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
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
        <div className="d-flex justify-content-end">
          <button className="btn btn-dark" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
