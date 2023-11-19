import { useRoutes } from "react-router-dom"
import { Inicio } from "../views/inicio/Inicio"
import { Nosotros } from "../views/nosotros/Nosotros"
import { Menu } from "../views/menu/Menu"


export const AppRoutes = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Inicio />
        },
        {
            path: '/menu',
            element: <Menu />
        },
        {
            path: '/nosotros',
            element: <Nosotros />
        },
        {
            path: '*',
            element: <Inicio />
        }
    ])
    return routes
}