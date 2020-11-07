import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ marginBottom: "1%" }}
    >
      <h4 className="navbar-brand">Google Books</h4>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/search">
            Search <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Saved <span className="sr-only">(current)</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;