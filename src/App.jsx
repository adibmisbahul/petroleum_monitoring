import { useState } from "react";
import Dashboard from "./layouts/dashboard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
