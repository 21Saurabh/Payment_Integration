import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import css

import {NavLink} from 'react-router-dom'
import logo from '../assets/logo.png'
const Navbar = () => {
    const style={
        width:"40px",
        height:"40px"
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg mx-1 mx-sm-3 navbar-light bg-light ">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="this is an img" style={style}/>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pay">
                Pay
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/registration">
                Registration
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Logout">
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
