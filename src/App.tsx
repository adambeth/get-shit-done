import "./App.css";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoModal from "./TodoModal";
import TodoListItem from "./TodoListItem";
import CreateNewTodoForm from "./CreateNewTodoForm";
import { nanoid } from 'nanoid'

export type Todo ={
  id:string,
  title:string,
  description:string
}
//react context
function App() {
  const [isModalOpen, setIsModal] = useState(false);
  const [selectedTodoTask, setSelectedTodo] = useState<Todo | object>({});
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    try {
      return savedTodos ? JSON.parse(savedTodos) : [];
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
  function handleDeleteTodo(e: React.MouseEvent<HTMLButtonElement>, id: string) {
    e.stopPropagation();
    setTodos(todos.filter((todo:Todo) => todo.id != id));
  }
  function handleAddTodo(id:string) {
    const selectedItem = todos.filter((todo:Todo) => todo.id == id);
    setSelectedTodo(selectedItem[0]);
    handleModal();
  }
  function handleSaveTodo(title:string, description:string) {
    const newTodos = [
      ...todos,
      {
        id: nanoid(),
        title,
        description,
      },
    ];
    setTodos(newTodos);
    setIsModal(false);
  }
  return (
    <>
      {isModalOpen && (
        <TodoModal>
          <CreateNewTodoForm
            onSetIsModal={handleModal}
            onSaveForm={handleSaveTodo}
            onSetSelectTodo={setSelectedTodo}
            selectedTodoTask={selectedTodoTask}
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
              todos.map((todo:Todo) => (
                <TodoListItem
                  onClick={() => handleAddTodo(todo.id)}
                  key={todo.id}
                  todo={todo}
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
