import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/about">About us</Link>
      </div>
      <div className="right">
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
export default Navbar;
