import "./instrument.css";
import DashboardLayout from "../layouts/dashboardLayout";
import Button from "../components/ui/button";
import Table from "../components/dashboard/table";
import Input from "../components/ui/input";
import { useState } from "react";
import FormAddInstrument from "../components/ui/formInstrument";

export default function InstrumentPage() {
  const statusSelect = [
    { label: "All status", value: "All status" },
    { label: "online", value: "online" },
    { label: "warning", value: "warning" },
    { label: "maintenance", value: "maintenance" },
  ];

  const [popUp, setPopUp] = useState(false);
  function popUpAddNewInstrument() {
    const blur = document.getElementsByClassName("instrument-page")[0];
    if (!popUp) {
      blur.style.filter = "blur(1px)";
      setPopUp(true);
    } else {
      setPopUp(false);
      blur.style.filter = "none";
    }
  }

  const style = {
    width: "75%",
    height: "100vh",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <DashboardLayout>
      {popUp && (
        <div style={style}>
          <FormAddInstrument close={popUpAddNewInstrument} />
        </div>
      )}
      <div className="instrument-page">
        <div className="instrumen-page-header">
          <div className="">
            <h2>Instrumentation</h2>
            <p>Manage and monitor all field instrument</p>
          </div>
          <div className="">
            <Button
              text={"+ Add instrument"}
              bg={"#f59f0a"}
              color={"black"}
              onClick={popUpAddNewInstrument}
            />
          </div>
        </div>
        <div className="instrument-page-content">
          <Table />
        </div>
      </div>
    </DashboardLayout>
  );
}
