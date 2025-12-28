import "./dashboard.css";
import { useState } from "react";
import DashboardLayout from "../layouts/dashboardLayout";
import Card from "../components/dashboard/card";
import Chart from "../components/dashboard/chart";
import Table from "../components/dashboard/table";
import Input from "../components/ui/input";
import Header from "../components/dashboard/header";

// icon
import GaugeIcon from "../assets/gauge.svg";
import OnlineIcon from "../assets/online.svg";
import TemperatureIcon from "../assets/temperature.svg";
import WarningIcon from "../assets/warning.svg";
import WaterIcon from "../assets/water.svg";

export default function DashboardPage() {
  const [cardData, setCardData] = useState([
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

  return (
    <DashboardLayout>
      <div className="main-dashboard">
        <Header />
        <div className="card-dashboard">
          {cardData.map((item, index) => {
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
        <div className="chart-alert">
          <div className="chart">
            <Chart />
          </div>
          <div className="alert">p</div>
        </div>
        <Table />
      </div>
    </DashboardLayout>
  );
}
