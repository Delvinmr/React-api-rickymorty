

import React from 'react';
import '../App.css';
import Logo from './logo';


import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-3 md:py-4 shadow max-w-5xl rounded-full mx-auto w-full bg-white relative">
      
      {/* Logo */}
      <a href="">
        <Logo />
      </a>

      {/* Menu */}
      <nav
        className={`
          absolute top-0 left-0 h-full w-full bg-white flex flex-col items-center justify-center gap-8 text-gray-900 text-sm
          transition-all duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          md:static md:flex md:flex-row md:opacity-100 md:visible md:h-auto md:w-auto md:bg-transparent
        `}
      >
        <a className="hover:text-indigo-600" href="/">Home</a>
        <a className="hover:text-indigo-600" href="#">Customer Stories</a>
        <a className="hover:text-indigo-600" href="#">Pricing</a>
        <a className="hover:text-indigo-600" href="#">Docs</a>

        {/* Botón cerrar (solo móvil) */}
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden text-gray-600"
        >
          ✕
        </button>
      </nav>
      

      {/* Right */}
      <div className="flex items-center space-x-4">
        
        <button className="size-8 flex items-center justify-center hover:bg-gray-100 transition border border-slate-300 rounded-md">
          ☀️
        </button>

        <a className="hidden md:flex bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition" href="#">
          Sign up
        </a>

        {/* Botón abrir menú */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-gray-600"
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;