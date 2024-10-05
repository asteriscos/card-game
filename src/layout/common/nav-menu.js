import React from "react";
import {
  Link
} from "react-router-dom";
import "./nav-menu.css";

export const NavMenu = () => {
  return <div className="nav-menu">
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/game">Play</Link>
        </li>
        <li>
          <Link to="/rules">Rules</Link>
        </li>
        <li>
          <Link to="/who">Who</Link>
        </li>
      </ul>
    </nav>
  </div>;
};
