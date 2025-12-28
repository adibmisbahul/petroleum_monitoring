import "./chart.css";
import { AllCommunityModule, ModuleRegistry } from "ag-charts-community";
import { AgCharts } from "ag-charts-react";
import { useState } from "react";
import GetData from "../data/data";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function Chart() {
  const [options, setOptions] = useState({
    title: {
      text: "Annual Fuel Expenditure",
    },
    data: [
      {
        quarter: "Q1",
        petrol: 200,
        diesel: 100,
      },
      {
        quarter: "Q2",
        petrol: 300,
        diesel: 130,
      },
      {
        quarter: "Q3",
        petrol: 350,
        diesel: 160,
      },
      {
        quarter: "Q4",
        petrol: 400,
        diesel: 200,
      },
    ],
    series: [
      {
        type: "line",
        xKey: "quarter",
        yKey: "petrol",
        yName: "Petrol",
      },
      {
        type: "line",
        xKey: "quarter",
        yKey: "diesel",
        yName: "Diesel",
      },
    ],
    background: {
      fill: "#0b111e",
    },
  });
  return (
    <div className="box-chart">
      <AgCharts options={options} />
    </div>
  );
}
