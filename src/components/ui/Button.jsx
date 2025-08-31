import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="cursor-pointer px-8 py-2 rounded-full relative  text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
      <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
      <span className="relative z-20">{<IoIosAddCircleOutline size={18}/>} </span>
    </button>
  );
};

export default Button;
