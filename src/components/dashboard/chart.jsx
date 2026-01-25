import "./chart.css";
import { AllCommunityModule, ModuleRegistry } from "ag-charts-community";
import { AgCharts } from "ag-charts-react";
import { useEffect, useEffectEvent, useState } from "react";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function Chart() {
  const [data, setData] = useState([
    { quarter: "Q1", petrol: 200, diesel: 100 },
    { quarter: "Q2", petrol: 300, diesel: 130 },
    { quarter: "Q3", petrol: 350, diesel: 160 },
    { quarter: "Q4", petrol: 400, diesel: 200 },
  ]);

  const [options, setOptions] = useState({
    theme: "ag-default-dark",
    title: {
      text: "Production Output",
      color: "white",
    },
    animation: {
      enabled: true,
    },
    data: data,
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

  useEffect(() => {
    setOptions((prev) => ({
      ...prev,
      data,
    }));
  }, [data]);

  const numRandom = Math.floor(Math.random() * 3);
  const numRandom2 = Math.floor(Math.random() * 5);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setData((prev) =>
          prev.map((item) =>
            item.quarter === "Q4"
              ? {
                  ...item,
                  petrol: item.petrol + numRandom,
                  diesel: item.diesel + numRandom2,
                }
              : item,
          ),
        ),
      2000,
    );
    return () => clearInterval(interval);
  });

  console.log("data:", data);

  return (
    <div className="container-chart">
      <div className="box-chart">
        <AgCharts options={options} style={{ height: "55vh" }} />
      </div>
    </div>
  );
}
