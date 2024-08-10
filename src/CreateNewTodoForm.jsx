import PropTypes from "prop-types";
import { useState } from "react";
// import "./CreateNewTodoForm.css";

function CreateNewTodoForm({ onSetIsModal, todoList, onSetToDo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function saveTodo() {
    const newTodos = [
      ...todoList,
      {
        id: todoList.length + 1,
        title,
        description,
      },
    ];
    onSetToDo(newTodos);
    onSetIsModal(false);
  }

  return (
    <div
      // onClick={onClick}
      className=" grid grid-cols-1 lg:grid-cols-2 border-solid border-4 border-orange-500 rounded-lg p-4 bg-slate-100 max-w-50"
    >
      <div>
        {" "}
        <div>
          {" "}
          <label htmlFor="title" className="label-form">
            Title
          </label>
        </div>
        <div>
          {" "}
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-solid border-4 border-orange-500 rounded-lg p-5 w-full"
          ></input>
        </div>
      </div>

      <div className="w-full">
        {" "}
        <div>
          {" "}
          <label htmlFor="details" className="label-form pb-1">
            Details
          </label>
        </div>
        <div className="w-full">
          {" "}
          <textarea
            id="details"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-solid border-4 border-orange-500 rounded-lg p-5 w-full h-34"
          ></textarea>
        </div>
      </div>
      <button
        onClick={saveTodo}
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded m-2"
      >
        Save
      </button>
      <button
        onClick={() => onSetIsModal(false)}
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded m-2"
      >
        Close
      </button>
    </div>
  );
}

CreateNewTodoForm.propTypes = {
  onSetIsModal: PropTypes.func.isRequired,
};

export default CreateNewTodoForm;
