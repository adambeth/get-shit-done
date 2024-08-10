import PropTypes from "prop-types";
// import "./CreateNewTodoForm.css";

function CreateNewTodoForm({ onSetIsModal }) {
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
            className="border-solid border-4 border-orange-500 rounded-lg p-5 w-full h-34"
          ></textarea>
        </div>
      </div>
      <button
        onClick={() => onSetIsModal(false)}
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
