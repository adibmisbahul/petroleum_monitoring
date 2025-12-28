import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./layouts/login";
import DashboardPage from "./pages/dashboard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
