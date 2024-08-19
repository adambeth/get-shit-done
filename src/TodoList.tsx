import React, { FC } from 'react';
export type Props ={
  onSetIsModal: () => void;
  children: React.ReactNode;
}

const TodoList: FC<Props> =({
  onSetIsModal,
  children}) => (
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

export default TodoList;

