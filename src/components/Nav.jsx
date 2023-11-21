import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, children, onClick }) => {
  const activeStyle = 'underline underline-offset-4 font-semibold';
  return (
    <li className="">
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) => isActive ? activeStyle : ""}>
        {children}
      </NavLink>
    </li>
  );
};


const MobileMenuToggle = ({ onToggle }) => {
  return (
    <div className="lg:hidden">
      <button onClick={onToggle} className="text-black focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
      </button>
    </div>
  );
};

const MobileMenuContent = ({ isOpen, onClose }) => {
  return (
      <div className={`fixed top-0 left-0 w-full h-50 bg-guaflePrimary flex flex-col items-center p-8 ${isOpen ? 'block' : 'hidden'}`}>
      <button onClick={onClose} className="text-black focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button>
        <NavItem to='/' onClick={onClose}>Inicio</NavItem>
        <NavItem to='/menu' onClick={onClose}>Menú</NavItem>
        <NavItem to='/nosotros' onClick={onClose}>Nosotros</NavItem>
      </div>
  );
};

export const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-end z-10 w-full top-0 py-5 px-8 text-2xl font-dark bg-guaflePrimary">
      
      <MobileMenuToggle onToggle={toggleMobileMenu} />
      <MobileMenuContent isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      <div className="lg:flex sm:hidden">
        <ul className="space-x-36 items-end lg:flex sm:hidden md:hidden">
          <NavItem to='/' onClick={closeMobileMenu}>Inicio</NavItem>
          <NavItem to='/menu' onClick={closeMobileMenu}>Menú</NavItem>
          <NavItem to='/nosotros' onClick={closeMobileMenu}>Nosotros</NavItem>
        </ul>
      </div>
      
    </nav>
  );
};
