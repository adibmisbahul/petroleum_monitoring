import "./dashboard.css";
import Sidebar from "../components/sidebar";
import Card from "../components/card";
import Chart from "../components/chart";
import GaugeIcon from "../assets/gauge.svg";
import OnlineIcon from "../assets/online.svg";
import TemperatureIcon from "../assets/temperature.svg";
import WarningIcon from "../assets/warning.svg";
import WaterIcon from "../assets/water.svg";
import { use, useState } from "react";

export default function Dashboard() {
  const [instrumentasi, setInstrumentasi] = useState([
    {
      text: "Total Instrument",
      value: "248",
      detail: "Accros 12 sides",
      icon: GaugeIcon,
    },
    {
      text: "Online",
      value: "231",
      detail: "Accros 12 sides",
      icon: OnlineIcon,
    },
    {
      text: "Warning",
      value: "12",
      detail: "Accros 12 sides",
      icon: WarningIcon,
    },
    {
      text: "Production",
      value: "4,420",
      detail: "Accros 12 sides",
      icon: WaterIcon,
    },
    {
      text: "Avg Preasure",
      value: "248",
      detail: "Accros 12 sides",
      icon: GaugeIcon,
    },
    {
      text: "Avg Temperature",
      value: "165",
      detail: "Accros 12 sides",
      icon: TemperatureIcon,
    },
  ]);

  const [sidebar, setSidebar] = useState(false);

  function sidebarButton() {
    if (!sidebar) {
      document.getElementById("container").style.gridTemplateAreas = `
    "sidebar header header"
    "sidebar main main"
  `;
      setSidebar(true);
    } else {
      document.getElementById("container").style.gridTemplateAreas = `
    "header header"
    "main main"
  `;
      setSidebar(false);
    }
  }

  return (
    <div className="container" id="container">
      <div className="sidebar" id="sidebar">
        <Sidebar />
      </div>
      <div className="header">
        <button onClick={sidebarButton}>[]</button>
        <input type="text" />
      </div>
      <div className="main">
        <div className="operations">
          <h1>Operations Dashboard</h1>
          <p>Monitor your field instrumentation and production in real-time</p>
        </div>
        <div className="dashboard-card">
          {instrumentasi.map((item, index) => {
            return (
              <Card
                top_text={item.text}
                icon={item.icon}
                value={item.value}
                detail={item.detail}
              />
            );
          })}
        </div>
        <div className="container-chart-alert">
          <div className="chart"></div>
          <div className="alert"></div>
        </div>
      </div>
    </div>
  );
}
