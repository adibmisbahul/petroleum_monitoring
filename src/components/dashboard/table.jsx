import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
} from "ag-grid-community";
import "./table.css";

ModuleRegistry.registerModules([AllCommunityModule]);
import DataTable from "../data/dataTable";

export default function Table() {
  const [rowData, setRowData] = useState(DataTable);

  const StatusCell = (props) => {
    return (
      <span
        style={{
          padding: "1px 10px 1px 10px",
          borderRadius: "10px 10px ",
          border:
            props.value === "online"
              ? "solid #0f5131 1px"
              : props.value === "maintenance"
              ? "solid #a16c11 1px"
              : "solid #dc2828 1px",
          backgroundColor:
            props.value === "online"
              ? "#0d2e27"
              : props.value === "maintenance"
              ? "#3a2e1a"
              : "#351620",

          color: "white",
        }}
      >
        {props.value}
      </span>
    );
  };

  const [colDefs, setColDefs] = useState([
    { field: "tag", width: 100, cellStyle: { color: "#dd900b" } },
    { field: "description" },
    { field: "type", width: 100, cellStyle: { color: "#4a5565" } },
    { field: "location", cellStyle: { color: "#4a5565" } },
    { field: "status", cellRenderer: StatusCell },
    { field: "lastReading" },
    { field: "lastUpdated" },
  ]);

  const defaultColDef = {
    flex: 1,
    filter: true,
  };

  const myTheme = themeQuartz.withParams({
    rowHeight: 65,
    accentColor: "#45556c",
    backgroundColor: "#0b111e",
    headerTextColor: "#4a5565",
    foregroundColor: "white",
  });
  return (
    <div className="component-table">
      <AgGridReact
        enableAdvancedFilter={true}
        rowData={rowData}
        columnDefs={colDefs}
        theme={myTheme}
        defaultColDef={defaultColDef}
      />
    </div>
  );
}
