import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoBlanco from "../assets/images/logo/blanco.png"
import logoNegro from "../assets/images/logo/negro-sin-tag.png"

const NavItem = ({ to, children, closeMenu }) => {
  const activeStyle = "underline underline-offset-8 text-white hover:no-underline"
  return (
    <li className="flex items-center text-deep-orange-50 hover:text-white lg:text-3xl px-5 regals">
      <NavLink
        to={to}
        onClick={() => {
          window.scrollTo({ top: 0 })
          closeMenu()
        }}
        className={({ isActive }) => isActive ? activeStyle : ""}>
        {children}
      </NavLink>
    </li>
  );
};


function NavList({ closeMenu }) {
  return (
    <ul className="text-2xl my-10 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row items-center gap-6">
      <NavItem to='/' closeMenu={closeMenu}>Inicio</NavItem>
      <NavItem to='/menu' closeMenu={closeMenu} >Menú</NavItem>
      <NavItem to='/nosotros' closeMenu={closeMenu}>Nosotros</NavItem>
      <NavItem to='/contacto' closeMenu={closeMenu}>Contacto</NavItem>
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

  const closeMenu = () => {
    if (openNav) {
      setOpenNav(!openNav);
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
        <div className="relative h-20 md:h-20 xl:h-24 w-36 md:w-44 top-0   ">
          <a href="/">{/* 
            <img
              className="absolute top-0 object-cover object-center h-full w-full hover-opacity-70 duration-300"
              src={logoBlanco} // Imagen visible
              alt="Logo"
            /> */}
            <img
              className="absolute top-0 object-cover opacity-80 object-center h-full w-full transition-opacity duration-300 hover:opacity-100"
              src={logoBlanco} // Imagen oculta
              alt="Logo"
            />
          </a>
        </div>
        <div className="hidden lg:block">
          <NavList closeMenu={closeMenu}/>
        </div>
        <IconButton
          variant="text"
          className="ml-auto mr-10 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => {
            window.scrollTo({ top: 0 })
            setOpenNav(!openNav);
          }}
        >
          {openNav ? (
            <XMarkIcon className="ml-10 h-10 w-10" strokeWidth={2} />
          ) : (
            <Bars3Icon className="ml-10 h-10 w-10" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList closeMenu={closeMenu} />
      </Collapse>
    </Navbar>
  );
}
