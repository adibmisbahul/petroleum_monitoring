// import "./dashboard.css";
// import Sidebar from "../components/ui/sidebar";
// import Card from "../components/dashboard/card";
// import Chart from "../components/dashboard/chart";
// import GaugeIcon from "../assets/gauge.svg";
// import OnlineIcon from "../assets/online.svg";
// import TemperatureIcon from "../assets/temperature.svg";
// import WarningIcon from "../assets/warning.svg";
// import WaterIcon from "../assets/water.svg";
// import SidebarIcon from "../assets/sidebar.svg";
// import Table from "../components/dashboard/table";
// import Input from "../components/ui/input";
// import { useState } from "react";

// export default function Dashboard() {
//   const [instrumentasi, setInstrumentasi] = useState([
//     {
//       text: "Total Instrument",
//       value: "248",
//       detail: "Accros 12 sides",
//       icon: GaugeIcon,
//     },
//     {
//       text: "Online",
//       value: "231",
//       detail: "Accros 12 sides",
//       icon: OnlineIcon,
//     },
//     {
//       text: "Warning",
//       value: "12",
//       detail: "Accros 12 sides",
//       icon: WarningIcon,
//     },
//     {
//       text: "Production",
//       value: "4,420",
//       detail: "Accros 12 sides",
//       icon: WaterIcon,
//     },
//     {
//       text: "Avg Preasure",
//       value: "248",
//       detail: "Accros 12 sides",
//       icon: GaugeIcon,
//     },
//     {
//       text: "Avg Temperature",
//       value: "165",
//       detail: "Accros 12 sides",
//       icon: TemperatureIcon,
//     },
//   ]);

//   const [sidebar, setSidebar] = useState(false);

//   function sidebarButton() {
//     const container = document.getElementById("container");
//     const sidebarElement = document.getElementById("sidebar");

//     if (!sidebar) {
//       container.style.gridTemplateAreas = `
//       "sidebar header"
//       "sidebar main"
//     `;
//       container.style.gridTemplateColumns = "1fr 4fr";
//       sidebarElement.style.display = "block";
//       setSidebar(true);
//     } else {
//       container.style.gridTemplateAreas = `
//       "header"
//       "main"
//     `;
//       container.style.gridTemplateColumns = "1fr";
//       sidebarElement.style.display = "none";
//       setSidebar(false);
//     }
//   }

//   return (
//     <div className="container" id="container">
//       <div className="sidebar" id="sidebar">
//         <Sidebar />
//       </div>
//       <div className="header">
//         <div>
//           <img
//             src={SidebarIcon}
//             alt=""
//             style={{ cursor: "pointer" }}
//             onClick={sidebarButton}
//           />
//           <Input width={"30%"} />
//         </div>
//       </div>
//       <div className="main">
//         <div className="operations">
//           <h1>Operations Dashboard</h1>
//           <p>Monitor your field instrumentation and production in real-time</p>
//         </div>
//         <div className="dashboard-card">
//           {instrumentasi.map((item, index) => {
//             return (
//               <Card
//                 top_text={item.text}
//                 icon={item.icon}
//                 value={item.value}
//                 detail={item.detail}
//               />
//             );
//           })}
//         </div>
//         <div className="container-chart-alert">
//           <div className="chart">{<Chart />}p</div>
//           <div className="alert">p</div>
//         </div>
//         <div className="container-table">
//           <Table />
//         </div>
//       </div>
//     </div>
//   );
// }
