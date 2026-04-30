import React from 'react';
import '../index.css';
import { NavLink } from 'react-router';

function Sidebar() {
    return (
    <nav className="w-64 bg-gray-900 text-white shadow-lg hidden md:block">
       
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/trending" end>
        Trending Concerts
      </NavLink>
      <NavLink to="/concerts">All Concerts</NavLink>
      <NavLink to="/account">Account</NavLink>
    </nav>
    );
}; 
    


export default Sidebar;