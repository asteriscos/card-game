import React from "react";
import { FaUser, FaUsers } from "react-icons/fa";
import "./home.css";
import { Layout } from "./common";

export const Home = () => {
  return <Layout>
    <div className="home">
      <h1>Welcome to poncho</h1>
      <div className="home-container">
        <div className="home-content">
          Take the journey of your life. Jump into the unknown.
        </div>
        <div className="home-actions">
          <button><FaUser />Single player</button>
          <button><FaUsers />Multi player</button>
        </div>
      </div>
    </div>
  </Layout>;
};
