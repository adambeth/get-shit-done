import "./App.css";
import { useState } from "react";
import TodoList from "./TodoList";
import TodoModal from "./TodoModal";
import CreateNewTodoForm from "./CreateNewTodoForm";

function App() {
  const [todos, setTodos] = useState([]);
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      {" "}
      {isModal && (
        <TodoModal>
          {" "}
          <CreateNewTodoForm
            onSetIsModal={setIsModal}
            todoList={todos}
            onSetToDo={setTodos}
          />
        </TodoModal>
      )}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 bg-red-100 rounded-lg p-4">
        <TodoList todos={todos} onSetIsModal={setIsModal} isModal={isModal} />
      </div>
    </>
  );
}

export default App;
