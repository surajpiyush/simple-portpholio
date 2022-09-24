import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
let Navbar = () => {
  return (
    <>
      <div className="container">
        <Link className="line1" to="/">
          Home
        </Link>

        <Link className="line2" to="/projects">
          Projects
        </Link>

        <Link className="line3" to="/skills">
          Skills
        </Link>
        <Link className="line4" to="/testmonial">
          Testmonial
        </Link>
      </div>
    </>
  );
};
export default Navbar;
