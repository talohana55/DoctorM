import React from "react";
import "../Style/Home.css";
import { NavLink } from "react-router-dom";
const bg = '/img/medicalStuff.jpg'

const Home = () => {
  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="header">Medical Center</h1>
      <NavLink to="/signup">
        <button className="btn">Sign in</button>
      </NavLink>
      <NavLink to="/login">
        <button className="btn">Log in</button>
      </NavLink>
    </div>
  );
};

export default Home;
