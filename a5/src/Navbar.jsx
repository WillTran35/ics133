import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    /*<nav className='navbar'>
      <div className='navbar-left'>
        <a href='#' className='logo'>
          AntEats
        </a>
      </div>
      <div className='navbar-right'>
        <ul className='nav-links'>
          <li>
            <a href='#LandingPage'>Places</a>
          </li>
          <li>
            <a href='#'>Reviews</a>
          </li>
          <li>
            <a href='#NutritionPage'>Nutrition</a>
          </li>
        </ul>
      </div>
    </nav>*/
    <nav className="navbar">
      <h2>AntEats</h2>
      <div className="navbar-right">
        <Link to="/">LandingPage</Link>
        <Link to="/NutritionPage">NutritionPage</Link>
        <Link to="Results">Results</Link>"
      </div>
    </nav>
  );
}
