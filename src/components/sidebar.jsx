import React from "react";
import "./sidebar.css";
import OilIcon from "../assets/oilIcon.svg";
import { color } from "chart.js/helpers";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? "#007bff" : "#333",
    textDecoration: isActive ? "none" : "underline",
    fontWeight: isActive ? "bold" : "normal",
    padding: "5px 10px",
    backgroundColor: isActive ? "#151b28" : "inherit",
    borderRadius: "10px",
  });
  return (
    <div className="container-sidebar">
      <div className="top">
        <div className="oilIcon">
          <img src={OilIcon} alt="" width={35} height={35} />
        </div>
        <div className="top-text">
          <h1>PetroView</h1>
          <p>Instument Control</p>
        </div>
      </div>
      <div className="main">
        <NavLink to="/" style={navLinkStyles}>
          login
        </NavLink>{" "}
        <NavLink to="/dashboard" style={navLinkStyles}>
          dashboard
        </NavLink>{" "}
      </div>
      <div className="bottom"></div>
    </div>
  );
}
