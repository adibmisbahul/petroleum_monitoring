import React from "react";
import "./sidebar.css";
import OilIcon from "../assets/oilIcon.svg";

export default function Sidebar() {
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
      <div className="main"></div>
      <div className="bottom"></div>
    </div>
  );
}
