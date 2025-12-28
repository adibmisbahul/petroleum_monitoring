import "./sidebar.css";
import { NavLink } from "react-router-dom";

import DashboardIcon from "../../assets/dashboard.svg";
import OilIcon from "../../assets/oilIcon.svg";
import GaugeIcon from "../../assets/gauge.svg";

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
    { id: 1, to: "/dashboard", title: "dashboard", icon: DashboardIcon },
    {
      id: 2,
      to: "/dasboarder",
      title: "istrumentation",
      icon: GaugeIcon,
    },
    { id: 3, to: "/live-data", title: "live data", icon: DashboardIcon },
    { id: 4, to: "/fields-map", title: "fields map", icon: DashboardIcon },
    { id: 5, to: "/alert", title: "alert", icon: DashboardIcon },
  ];

  return (
    <div className="container-sidebar">
      <div className="top">
        <div className="oilIcon">
          <img src={OilIcon} alt="" width={35} height={35} />
        </div>
        <div className="top-text">
          <h1>PetroView</h1>
          <p>Instrument Control</p>
        </div>
      </div>
      <div className="main-sidebar">
        {dataLink.map((item, index) => {
          return (
            <NavLink to={item.to} style={navLinkStyles}>
              <img
                src={item.icon}
                alt=""
                width={20}
                height={20}
                className="icon"
              />
              {item.title}
            </NavLink>
          );
        })}
      </div>
      <div className="bottom"></div>
    </div>
  );
}
