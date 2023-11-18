


export const Nav = ( {changePage} ) => {
    return (
        <nav>
            <ul>
          <li><button onClick={() => changePage('inicio')}>Inicio</button></li>
          <li><button onClick={() => changePage('menu')}>Menú</button></li>
          <li><button onClick={() => changePage('nosotros')}>Nosotros</button></li>
        </ul>
        </nav>
    )
}