import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { AppRoutes } from '../utils/routes'
import './App.css'

function App() {

  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <BrowserRouter>
        <div className='relative w-full h-full'>
          <Nav openNav={openNav} setOpenNav={setOpenNav} />
          <div className={`transition-all duration-300 ${openNav ? 'mt-56' : ''}`}></div>
          <AppRoutes />
          <Footer />
        </div >
      </BrowserRouter>
    </>
  )
}

export default App
