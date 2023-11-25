import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 px-5">
      <NavItem to='/'>Inicio</NavItem>
      <NavItem to='/menu'>Menú</NavItem>
      <NavItem to='/nosotros'>Nosotros</NavItem>
    </ul>
  );
}

export function Nav() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
      <Navbar className="mx-auto max-w-screen-x bg-guaflePrimary py-0 fixed z-20" fullWidth="true" color="guafleOrange">
        <div className="flex items-center justify-between text-white">
          {/* Logo con imagen */}
            <img className="h-40 w-40 object-cover object-center py-0"
            src="../../recursos/Guaguafle Entregables/Logo/RGB/PNG RGB/guaguafle-logo.png" alt="Logo"/>
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
