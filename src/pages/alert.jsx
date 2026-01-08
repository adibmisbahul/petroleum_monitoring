import "./alert.css";
import { useState } from "react";
import DashboardLayout from "../layouts/dashboardLayout";
import Header from "../components/dashboard/header";
import DataTable from "../components/data/dataTable";
import { FiAlertCircle } from "react-icons/fi";
export default function Alert() {
  const [instrumentData, setInstrumentData] = useState(DataTable);
  return (
    <DashboardLayout>
      <Header />
      <div className="alert-page">
        <div className="alert-page-box-alert">
          <div className="">
            <h3>critical</h3>
            <h2>1</h2>
          </div>
          <div style={{ padding: "15px", backgroundColor: "#20131f" }}>
            <FiAlertCircle color="red" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
