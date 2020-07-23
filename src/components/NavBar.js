import React, { useState } from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
function NavBar(props) {
  const [menuActive, setMenuActive] = useState(false);
  console.log(props);

  if (props.pageRef.current) {
    props.pageRef.current.onclick = (e) => {
      if (!e.target.classList.contains("nav-icon-mobile")) {
        setMenuActive(false);
      }
    };
  }

  return (
    <nav className="navbar-container">
      {menuActive ? (
        <i
          onClick={() => setMenuActive(!menuActive)}
          className={`fas fa-times nav-icon-mobile
          `}
        ></i>
      ) : (
        <i
          onClick={() => setMenuActive(!menuActive)}
          className={`fas fa-bars nav-icon-mobile
          }`}
        ></i>
      )}

      <ul
        onClick={() => setMenuActive(false)}
        className={`navbar-items ${menuActive ? "menu-active" : ""}`}
      >
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
