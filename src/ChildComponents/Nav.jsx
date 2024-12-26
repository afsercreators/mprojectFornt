import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location object

  const [isLogin, setIsLogin] = useState(false);

  // This effect will run when the component mounts or when the route changes
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [location]); // Include `location` as a dependency to run effect on route change

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsLogin(false); // Update login state
    navigate("/login"); // Redirect to login page
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Reg. Form
            </Link>
          </li>
          <li className="nav-item">
            {!isLogin && (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/student-list">
              Students List
            </Link>
          </li>
        </ul>
        <div className="d-flex justify-content-end">
          {isLogin && (
            <button className="btn btn-dark" onClick={logoutHandler}>
              Logout
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
