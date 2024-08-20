import { FC } from 'react';
import "./TodoListItem.css";
import { Todo } from './App';

export type Props={
  todo:Todo,
  onClick: () => void,
  onDeleteTodo: (e:React.MouseEvent<HTMLButtonElement>) => void
  onHandleMarkAsDone:(e:React.MouseEvent<HTMLButtonElement>)=> void
}
const TodoListItem: FC<Props> = ({ todo, onClick, onDeleteTodo,onHandleMarkAsDone })=> {
  const { title = "", description = "" } = { ...todo }

  return (
    <div
      onClick={onClick}
      className={`border-solid border-4 ${todo.isComplete ? `border-orange-500`:`border-gray-500 bg-slate-700` } rounded-lg p-4 bg-slate-100 h-96`}
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
      <button onClick={onHandleMarkAsDone} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 w-full px-4 rounded m-2">{
        `${todo.isComplete ? "Mark As Done":"Re-Open" }`  
        }
        
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

export default TodoListItem
