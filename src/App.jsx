import "./App.css";
import { useState } from "react";
import TodoList from "./TodoList";
import todoData from "../todoDate";
import TodoModal from "./TodoModal";

function App() {
  const [todos, setTodos] = useState([...todoData]);
  return (
    <>
      {" "}
      <TodoModal />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 bg-red-100 rounded-lg p-4">
        <TodoList todos={todos} />
      </div>
    </>
  );
}

export default App;
