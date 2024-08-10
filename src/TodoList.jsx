import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";
import { useState } from "react";

export default function TodoList({ todos, onSetIsModal, isModal }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isNewTodo, setIsNewTodo] = useState(false);
  TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onSetIsModal: PropTypes.func.isRequired,
    isModal: PropTypes.any.isRequired,
  };

  function handleAddTodo() {
    setIsNewTodo(!isNewTodo); // not sure why im using this
    onSetIsModal(!isModal);
  }
  return (
    <>
      <div
        className="group flex h-90 items-center justify-center border-solid border-4 border-gray-50 rounded-lg p-4 bg-slate-100 max-w-50 hover:bg-slate-100 hover:border-orange-500 hover:text-orange-700"
        onClick={handleAddTodo}
      >
        <button className="text-7xl text-gray-500 group-hover:border-orange-500 group-hover:text-orange-500 min-h-8 ">
          +
        </button>
      </div>
      {todos.length == 0 && (
        <div>
          <h1>You do not have anything todo! Take a break</h1>
        </div>
      )}
      {todos.map((todo) => (
        <TodoListItem
          onClick={() => setIsEditOpen(!isEditOpen)}
          key={todo.id}
          todo={todo}
        />
      ))}
    </>
  );
}
