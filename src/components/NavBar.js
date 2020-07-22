import React from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
function NavBar(props) {
  return (
    <nav className="navbar-container">
      <i className="fas fa-bars fa-3x nav-icon-mobile"></i>
      <ul className="navbar-items">
        <li className="navbar-item">
          <NavLink exact={true} activeClassName="item-active" to="/">
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink exact={true} activeClassName="item-active" to="/about">
            About
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink exact={true} activeClassName="item-active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <NavLink to="/" className="navbar-logo">
        SpaceZ
      </NavLink>
    </nav>
  );
}

export default NavBar;
