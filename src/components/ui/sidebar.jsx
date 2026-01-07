import "./sidebar.css";

import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { LuGauge } from "react-icons/lu";
import { FiActivity, FiAlertOctagon } from "react-icons/fi";
import { FaMap, FaFileContract } from "react-icons/fa";
import { FaOilWell } from "react-icons/fa6";
import { AiOutlineTeam } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";

export default function Sidebar() {
  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? "white" : "#757870",
    padding: "5px 20px ",
    backgroundColor: isActive ? "#151b28" : "inherit",
    borderRadius: "5px",
    display: "flex",
    gap: "10px",
    fontWeight: "400",
  });

  const dataLink = [
    { id: 1, to: "/dashboard", title: "dashboard", icon: <MdDashboard /> },
    {
      id: 2,
      to: "/instrument",
      title: "istrumentation",
      icon: <LuGauge />,
    },
    { id: 3, to: "/live-data", title: "live data", icon: <FiActivity /> },
    { id: 4, to: "/fields-map", title: "fields map", icon: <FaMap /> },
    { id: 5, to: "/alert", title: "alert", icon: <FiAlertOctagon /> },
    {
      id: 6,
      to: "/historical-data",
      title: "historical data",
      icon: <FiAlertOctagon />,
    },
    { id: 7, to: "/reports", title: "reports", icon: <FaFileContract /> },
    { id: 8, to: "/teams", title: "teams", icon: <AiOutlineTeam /> },
    { id: 9, to: "/settings", title: "setings", icon: <IoIosSettings /> },
  ];

  const userName = localStorage.getItem("username");

  return (
    <div className="container-sidebar">
      <div className="top">
        <div className="oilIcon">
          <icon>
            <FaOilWell color="#dd900b" size={25} />
          </icon>
        </div>
        <div className="top-text">
          <h1>PetroView</h1>
          <p>Instrument Control</p>
        </div>
      </div>
      <div className="main-sidebar">
        <p>main</p>
        {dataLink.slice(0, 5).map((item, index) => {
          return (
            <NavLink to={item.to} style={navLinkStyles} key={index}>
              <icon>{item.icon}</icon>
              {item.title}
            </NavLink>
          );
        })}
        <p>data & reports</p>
        {dataLink.slice(5, 7).map((item, index) => {
          return (
            <NavLink to={item.to} style={navLinkStyles} key={index}>
              <icon>{item.icon}</icon>
              {item.title}
            </NavLink>
          );
        })}
        <p>setings</p>
        {dataLink.slice(7, 9).map((item, index) => {
          return (
            <NavLink to={item.to} style={navLinkStyles} key={index}>
              <icon>{item.icon}</icon>
              {item.title}
            </NavLink>
          );
        })}
      </div>
      {/* <div className="bottom-sidebar">
        <p>{userName}</p>
        <p>field operator</p>
      </div> */}
    </div>
  );
}
