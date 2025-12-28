import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
} from "ag-grid-community";
import "./table.css";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
import DataTable from "../data/dataTable";

export default function Table() {
  const [rowData, setRowData] = useState(DataTable);
  // console.log(rowData);

  const StatusCell = (props) => {
    return (
      <span
        style={{
          padding: "4px 8px",
          borderRadius: "6px",
          backgroundColor:
            props.value === "online"
              ? "green"
              : props.value === "maintenance"
              ? "#9f2d00"
              : "red",

          color: "white",
        }}
      >
        {props.value}
      </span>
    );
  };

  const Tag = (props) => {
    return <p style={{ color: "#f0b100" }}>{props.value}</p>;
  };
  const [colDefs, setColDefs] = useState([
    { field: "tag", cellRenderer: Tag },
    { field: "description" },
    { field: "type" },
    { field: "location" },
    { headerName: "Status", field: "status", cellRenderer: StatusCell },
    { field: "lastReading" },
    { field: "lastUpdated" },
  ]);

  const myTheme = themeQuartz.withParams({
    spacing: 10,
    accentColor: "red",
    backgroundColor: "#0b111e",
    headerTextColor: "rgb(204, 245, 172)",
    foregroundColor: "white",
  });
  return (
    <div className="component-table">
      <AgGridReact rowData={rowData} columnDefs={colDefs} theme={myTheme} />
    </div>
  );
}
