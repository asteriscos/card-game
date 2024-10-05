import React from "react";
import "./layout.css";
import { NavMenu } from "./nav-menu";

export const Layout = ({ children }) => {
  return <div className="main-layout">
    <div className="layout-container">
      <NavMenu />

      <div className="">
        {children}
      </div>
    </div>
  </div>;
};
