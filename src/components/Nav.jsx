import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoBlanco from "../assets/images/logo/blanco-sin-tag.png"
import logoNegro from "../assets/images/logo/negro-sin-tag.png"

const NavItem = ({ to, children, onClick }) => {
  const activeStyle = 'underline underline-offset-4 font-semibold';
  return (
    <li className="flex items-center text-black hover:text-guafleSecondary lg:text-4xl px-5">
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) => isActive ? activeStyle : ""}>
        {children}
      </NavLink>
    </li>
  );
};


function NavList() {
  return (
    <ul className="text-2xl my-10 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row items-center gap-6">
      <NavItem to='/'>Inicio</NavItem>
      <NavItem to='/menu'>Menú</NavItem>
      <NavItem to='/nosotros'>Nosotros</NavItem>
    </ul>
  );
}

export const Nav = (props) => {

  const { openNav, setOpenNav } = props;

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  const handleScroll = () => {
    if (window.scrollY > 0 && openNav) {
      setOpenNav(false);
    }
  };

  const handleOutsideClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpenNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      document.addEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-x bg-guaflePrimary py-0 fixed top-0 z-20" fullWidth="true" color="guafleOrange">
      <div className="flex items-center justify-evenly text-white">
        {/* Logo con imagen */}
        {/* <img className="h-20 md:h-28 lg:h-32 xl:h-40 2xl:h-28 w-40 object-cover object-center py-0 top-0 transition-opacity duration-300 hover:opacity-0"
          src={logo} alt="Logo" />
        <img className="h-20 md:h-28 lg:h-32 xl:h-40 2xl:h-28 w-40 object-cover object-center py-0 top-0 transition-opacity duration-300 hover:opacity-100"
          src={logo} // Imagen oculta
          alt="Logo"
        /> */}
        <div className="relative">
          <a href="/">
          <img
            className="h-20 md:h-28 lg:h-32 xl:h-40 2xl:h-28 w-40 object-cover object-center py-0 transition-opacity duration-300"
            src={logoBlanco} // Imagen visible
            alt="Logo"
          />
          <img
            className="h-20 md:h-28 lg:h-32 xl:h-40 2xl:h-28 w-40 object-cover object-center py-0 absolute top-0 transition-opacity duration-300 hover:opacity-0"
            src={logoNegro} // Imagen oculta
            alt="Logo"
          />
          </a>
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
