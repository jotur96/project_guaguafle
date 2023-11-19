import { NavLink } from "react-router-dom"


const NavItem = ({ to, children }) => {
    const activeStyle = 'underline underline-offset-4 font-semibold'
    return (
      <li>
        <NavLink
          to={to}
          className={({ isActive }) =>  isActive ? activeStyle : ""}>
          {children}
        </NavLink>
      </li>
    );
  };


export const Nav = () => {
    return (
        <nav className="flex justify-end items-end z-10 w-full top-0 py-5 px-8 text-sm font-dark
        bg-red-500">
            <ul className="flex gap-3 items-end">
                <NavItem to='/'>Inicio</NavItem>
                <NavItem to='/menu'>Menú</NavItem>
                <NavItem to='/nosotros'>Nosotros</NavItem>
            </ul>
        </nav>
    )
}