import CreateNewTodoForm from "./CreateNewTodoForm";

function TodoModal() {
  return (
    <div className=" z-1000 absolute top-0 left-0 w-full h-lvh flex justify-center items-center bg-slate-300 opacity-100">
      <div className="w-4/5 grid-cols-2 h-4/5">
        <CreateNewTodoForm />
      </div>
    </div>
  );
}

export default TodoModal;
