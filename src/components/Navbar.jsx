// components/Navbar.jsx
import React from "react";
import { SiGamedeveloper } from "react-icons/si";
import { LuGithub } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import Button from "./ui/Button";

const Navbar = ({ onOpenModal }) => {
  return (
    <nav className="bg-slate-950 mb-5 backdrop-blur-xs w-full flex flex-col md:flex-row justify-between items-center ">
   
      <div className="flex gap-3 items-center mb-3 md:mb-0">
        <SiGamedeveloper size={28} className="text-gray-400" />
        <h1 className="text-xl md:text-2xl font-bold">DevShowCase</h1>
      </div>

      {/* Right Side */}
      <div className="flex gap-3 md:gap-5 items-center w-full md:w-auto">
        <div className="cursor-pointer px-4 py-2 rounded-full relative  text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
        <div className="flex items-center">
            <IoIosSearch size={18} className="inline-block mr-2" />
          <input
            placeholder="Search Projects"
            className="border-0 bg-transparent focus:outline-none w-full"
            type="text"
          />
        </div>
        </div>

        <Button onClick={onOpenModal} />
        <a href="">
          <LuGithub size={28} className="text-gray-500" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
