import "./TodoListItem.css";
import PropTypes from "prop-types";

export default function TodoListItem({ todo, onClick }) {
  TodoListItem.propTypes = {
    todo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }),
  };
  const { title, description } = { ...todo };
  return (
    <div
      onClick={onClick}
      className="border-solid border-4 border-orange-500 rounded-lg p-4 bg-slate-100 max-w-50"
    >
      <div>
        {" "}
        <label htmlFor="title" className="label">
          Title
        </label>
        <p
          id="title"
          className="border-solid border-4 border-orange-500 rounded-lg p-5"
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
          className="border-solid border-4 border-orange-500 rounded-lg p-5 m-0"
        >
          {description}
        </p>
      </div>
    </div>
  );
}
