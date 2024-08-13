import PropTypes from "prop-types";

export default function TodoList({ onSetIsModal, children }) {
  return (
    <>
      <div
        className="group flex items-center justify-center border-solid border-4 border-gray-50 rounded-lg p-4 bg-slate-100 max-w-50  h-96  hover:bg-slate-100 hover:border-orange-500 hover:text-orange-700"
        onClick={onSetIsModal}
      >
        <button className="text-7xl text-gray-500 group-hover:border-orange-500 group-hover:text-orange-500">
          +
        </button>
      </div>
      {children}
    </>
  );
}
TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onSetIsModal: PropTypes.func.isRequired,
  isModal: PropTypes.any.isRequired,
  onSetTodos: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
