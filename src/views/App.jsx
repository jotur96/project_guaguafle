import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import './App.css'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Inicio } from './inicio/Inicio'
import { Menu } from './menu/Menu'
import { Nosotros } from './nosotros/Nosotros'

function App() {
  // const [count, setCount] = useState(0)

  const [currentPage, setCurrentPage] = useState('inicio');

  // Función para cambiar de página
  const changePage = (page) => {
    setCurrentPage(page);
  };

  // Renderiza la página actual en el main
  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <Inicio />;
      case 'menu':
        return <Menu />;
      case 'nosotros':
        return <Nosotros />;
      default:
        return <Inicio />;
    }
  };

  console.log(currentPage)

  return (
    <>
     <Nav  changePage={changePage} />
     <main>
       {renderPage()}
      </main>
     <Footer />
    </>
  )
}

export default App
