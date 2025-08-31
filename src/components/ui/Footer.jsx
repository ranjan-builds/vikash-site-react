import React from "react";
import { LuGithub } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-sm py-3 flex items-center justify-between border-y border-slate-800 w-full bottom-0 mt-10">
      <p>Build with love by Ranjan</p>
      <div className="flex gap-4 text-sm">
        <a href="">
          <LuGithub />
        </a>
        <a href="">
          <MdMailOutline />
        </a>
        <a href="">
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
