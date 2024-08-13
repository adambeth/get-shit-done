import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

export default function TodoList({ todos, onSetIsModal, onSetTodos }) {
  function handleAddTodo() {
    console.log("Hello");
    onSetIsModal();
  }
  return (
    <>
      <div
        className="group flex items-center justify-center border-solid border-4 border-gray-50 rounded-lg p-4 bg-slate-100 max-w-50  h-96  hover:bg-slate-100 hover:border-orange-500 hover:text-orange-700"
        onClick={handleAddTodo}
      >
        <button className="text-7xl text-gray-500 group-hover:border-orange-500 group-hover:text-orange-500">
          +
        </button>
      </div>

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
            onSetTodos={onSetTodos}
            todos={todos}
            id={todo.id}
          />
        ))}
    </>
  );
}
TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onSetIsModal: PropTypes.func.isRequired,
  isModal: PropTypes.any.isRequired,
  onSetTodos: PropTypes.func.isRequired,
};
