import React, { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="bg-gray-900">
      <nav className="relative bg-gray-900 h-14 flex items-center">
        
        <div className="flex items-center justify-between px-4 max-w-6xl mx-auto w-full">
          
          <h2 className="text-white font-bold text-xl sm:text-2xl cursor-pointer">
            MD <span className="text-green-500  ">SAKIB ANSARI</span>
          </h2>

          <button
            onClick={() => setMenu(true)}
            className="lg:hidden text-2xl text-white"
          >
            ☰
          </button>
        </div>

        <ul className="hidden lg:flex lg:flex-row lg:gap-9 justify-end items-center text-[16px] px-4 lg:px-10">
          
          <li className="relative group text-white hover:text-blue-600 cursor-pointer transition-all duration-300">
            <a href="#" className="py-1">Home</a>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group text-white hover:text-blue-600 transition-all duration-300">
            <a href="#about" className="py-1">About</a>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group text-white hover:text-blue-600 transition-all duration-300">
            <a href="#skills" className="py-1">Skills</a>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group text-white hover:text-blue-600 transition-all duration-300">
            <a href="#education" className="py-1">Education</a>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group text-white hover:text-blue-600 transition-all duration-300">
            <a href="#project" className="py-1">Project</a>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group text-white hover:text-blue-600 transition-all duration-300">
            <a href="#connect" className="py-1">Connect</a>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </nav>

      {/* Overlay */}
      {menu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenu(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white 
        transform transition-transform duration-300 z-50
        ${menu ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg">Menu</h2>

          <button onClick={() => setMenu(false)} className="text-2xl">
            ✕
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-6 text-[17px]">
          <li onClick={() => setMenu(false)} className="hover:text-blue-600">
            <a href="#hero">Home</a>
          </li>

          <li onClick={() => setMenu(false)} className="hover:text-blue-600">
            <a href="#about">About</a>
          </li>

          <li onClick={() => setMenu(false)} className="hover:text-blue-600">
            <a href="#skills">Skills</a>
          </li>

          <li onClick={() => setMenu(false)} className="hover:text-blue-600">
            <a href="#education">Education</a>
          </li>

          <li onClick={() => setMenu(false)} className="hover:text-blue-600">
            <a href="#project">Project</a>
          </li>

          <li onClick={() => setMenu(false)} className="hover:text-blue-600">
            <a href="#connect">Connect</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
