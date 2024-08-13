import "./App.css";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoModal from "./TodoModal";
import CreateNewTodoForm from "./CreateNewTodoForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [isModalOpen, setIsModal] = useState(false);
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    try {
      return savedTodos ? JSON.parse(savedTodos) : { items: [] };
    } catch (e) {
      console.error("Failed to parse todos from localStorage", e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleSaveTodo(title, description) {
    const newTodos = [
      ...todos,
      {
        id: uuidv4(),
        title,
        description,
      },
    ];
    setTodos(newTodos);
    setIsModal(false);
  }
  return (
    <>
      {" "}
      {isModalOpen && (
        <TodoModal>
          {" "}
          <CreateNewTodoForm
            onSetIsModal={setIsModal}
            todoList={todos}
            onSetToDo={setTodos}
            onSaveForm={handleSaveTodo}
          />
        </TodoModal>
      )}
      {!isModalOpen && (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 bg-red-100 rounded-lg p-4">
          <TodoList
            todos={todos}
            onSetIsModal={setIsModal}
            isModal={isModalOpen}
            onSetTodos={setTodos}
          />
        </div>
      )}
    </>
  );
}

export default App;
