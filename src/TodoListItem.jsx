import "./TodoListItem.css";
import PropTypes from "prop-types";

export default function TodoListItem({ todo, onClick, onDeleteTodo }) {
  const { title, description } = { ...todo };

  return (
    <div
      onClick={onClick}
      className="border-solid border-4 border-orange-500 rounded-lg p-4 bg-slate-100 h-96"
    >
      <div>
        {" "}
        <label htmlFor="title" className="label">
          Title
        </label>
        <p
          id="title"
          className="border-solid border-4 border-orange-500 rounded-lg p-5 text-ellipsis overflow-hidden"
        >
          {title}
        </p>
      </div>
      <div>
        {" "}
        <label htmlFor="details" className="label pb-1">
          Details
        </label>
        <p
          id="details"
          className="border-solid border-4 border-orange-500 rounded-lg p-5 text-ellipsis overflow-hidden line-clamp-2"
        >
          {description}
        </p>
      </div>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 w-full px-4 rounded m-2">
        Mark As Done
      </button>
      <button
        onClick={onDeleteTodo}
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 w-full px-4 rounded m-2"
      >
        Delete
      </button>
    </div>
  );
}
TodoListItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onSetTodos: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  id: PropTypes.string.isRequired,
};
