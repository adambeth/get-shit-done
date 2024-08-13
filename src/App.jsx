import "./App.css";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoModal from "./TodoModal";
import TodoListItem from "./TodoListItem";
import CreateNewTodoForm from "./CreateNewTodoForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [isModalOpen, setIsModal] = useState(false);
  // const [selectedId, setSelectedId] = useState("");
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
  function handleModal() {
    setIsModal(!isModalOpen);
  }
  function handleDeleteTodo(e, id) {
    e.stopPropagation();
    setTodos(todos.filter((todo) => todo.id != id));
  }
  function handleAddTodo() {
    handleModal();
  }
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
            onSetIsModal={handleModal}
            todoList={todos}
            onSetToDo={setTodos}
            onSaveForm={handleSaveTodo}
          />
        </TodoModal>
      )}
      {!isModalOpen && (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 bg-red-100 rounded-lg p-4">
          <TodoList onSetIsModal={handleModal}>
            {todos.length === 0 && (
              <div className="flex align-center">
                <h1>You do not have anything todo! Take a break</h1>
              </div>
            )}
            {todos &&
              todos.map((todo) => (
                <TodoListItem
                  onClick={handleAddTodo}
                  key={todo.id}
                  todo={todo}
                  onSetTodos={setTodos}
                  todos={todos}
                  id={todo.id}
                  onDeleteTodo={(e) => handleDeleteTodo(e, todo.id)}
                />
              ))}
          </TodoList>
        </div>
      )}
    </>
  );
}

export default App;
