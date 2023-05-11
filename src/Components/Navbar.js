import React from 'react';
import { NavLink } from 'react-router-dom';
export const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-item">Inbox</NavLink>
      <NavLink to="/spam" className="nav-item">Spam</NavLink>
      <NavLink to="/trash" className="nav-item">Trash</NavLink>
    </nav>
  );
};
