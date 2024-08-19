/* eslint-disable @typescript-eslint/no-empty-object-type */
 

import { useState, FC } from "react";
type Todo = {
  id: string;
  title: string;
  description: string;
}| {title:string,description:string};

export type Props = {
  onSetIsModal: (isModal: boolean)=> void,
  onSaveForm: (title:string,description:string)=> void,
   
  selectedTodoTask: Todo| object,
   
  onSetSelectTodo: (todo:Todo | {})=> void,
}

const CreateNewTodoForm:FC<Props>=({
  onSetIsModal,
  onSaveForm,
  selectedTodoTask,
  onSetSelectTodo,
}) =>{
  const [description, setDescription] = useState(() => {
    return (selectedTodoTask as Todo)?.description ?? "";
  });

  const [title, setTitle] = useState(() => {
    return (selectedTodoTask as Todo)?.title ?? "";
  });

  function handleOnclickSave() {
    onSaveForm(title, description);
    setTitle("");
    setDescription("");
    onSetSelectTodo({});
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
          >
            {/* {title} */}
          </input>
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
          >
            {/* {description} */}
          </textarea>
        </div>
      </div>
      <button
        onClick={handleOnclickSave}
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded m-2"
      >
        Save
      </button>
      <button
        onClick={() => {
          onSetSelectTodo({});
          onSetIsModal(false);
        }}
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded m-2"
      >
        Close
      </button>
    </div>
  );
}

export default CreateNewTodoForm;
