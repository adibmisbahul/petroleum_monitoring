import "./instrument.css";
import DashboardLayout from "../layouts/dashboardLayout";
import { useState } from "react";

export default function InstrumentPage() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodos = () => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const deteleTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <DashboardLayout>
      <div style={{ display: "flex" }}>
        <div className="">
          <input type="add todos" onChange={(e) => setText(e.target.value)} />
          <button onClick={addTodos}>add todos</button>
        </div>
        <div className="">
          {todos.map((item, index) => {
            return (
              <div className="" style={{ fontSize: "medium", display: "flex" }}>
                <h1>{item.text}</h1>
                <p>{item.status === true ? "selesai" : "belum selesai"}</p>
                <p
                  onClick={() => deteleTodos(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  delete
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
