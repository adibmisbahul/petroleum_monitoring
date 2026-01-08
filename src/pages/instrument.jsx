import "./instrument.css";
import DashboardLayout from "../layouts/dashboardLayout";
import Button from "../components/ui/button";
import Table from "../components/dashboard/table";
import Input from "../components/ui/input";

export default function InstrumentPage() {
  return (
    <DashboardLayout>
      <div className="instrument-page">
        <div className="instrumen-page-header">
          <div className="">
            <h2>Instrumentation</h2>
            <p>Manage and monitor all field instrument</p>
          </div>
          <div className="">
            <Button text={"+ Add instrument"} bg={"#f59f0a"} color={"black"} />
          </div>
        </div>
        <div className="instrument-page-content">
          <div className="instrument-page-content-header">
            <Input placeholder={"search instrument"} />
          </div>
          <Table />
        </div>
      </div>
    </DashboardLayout>
  );
}
