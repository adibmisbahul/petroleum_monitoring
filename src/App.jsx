import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./layouts/login";
import DashboardPage from "./pages/dashboard";
import InstrumentPage from "./pages/instrument";
import LiveData from "./pages/liveData";
import Alert from "./pages/alert";
import FieldsMap from "./pages/fieldsMap";
import HistoricalData from "./pages/historicalData";
import Reports from "./pages/reports";
import Teams from "./pages/teams";
import NotFound from "./pages/notFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/instrument" element={<InstrumentPage />} />
          <Route path="/live-data" element={<LiveData />} />
          <Route path="/fields-map" element={<FieldsMap />} />
          <Route path="/alert" element={<Alert />} />
          <Route path="/historical-data" element={<HistoricalData />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
