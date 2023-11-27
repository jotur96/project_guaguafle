import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoBlanco from "../assets/images/logo/blanco-sin-tag.png"
import logoNegro from "../assets/images/logo/negro-sin-tag.png"

const NavItem = ({ to, children }) => {
  const activeStyle = 'underline underline-offset-4 font-semibold';
  return (
    <li className="flex items-center text-black hover:text-guafleSecondary lg:text-4xl px-5">
      <NavLink
        to={to}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
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
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      document.addEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [openNav]);

  return (
    <Navbar className="mx-auto max-w-screen-x bg-guaflePrimary py-0 fixed top-0 z-20" fullWidth="true" color="guafleOrange">
      <div className="flex items-center justify-evenly text-white">
        <div className="relative h-20 md:h-28 w-36 md:w-44 top-0   ">
          <a href="/">
          <img
            className="absolute top-0 object-cover object-center h-full w-full transition-opacity duration-300"
            src={logoBlanco} // Imagen visible
            alt="Logo"
          />
          <img
            className="absolute top-0 object-cover object-center h-full w-full transition-opacity duration-300 hover:opacity-0"
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
          className="ml-auto mr-10 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => {   
            window.scrollTo({ top: 0})
            setOpenNav(!openNav);
          }}
        >
          {openNav ? (
            <XMarkIcon className="h-10 w-10" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-10 w-10" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
