import React ,{FC} from "react";
 export type Props ={
  children: React.ReactNode
 }

const TodoModal: FC<Props>=({ children })=> {
  return (
    <div className=" z-10 absolute top-0 left-0 w-full h-lvh flex justify-center items-center bg-slate-300 opacity-100">
      <div className="w-4/5 grid-cols-2 h-4/5">{children}</div>
    </div>
  );
}

export default TodoModal;
