import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { AppRoutes } from '../utils/routes'
import './App.css'

import img0 from '../assets/images/inicio-images/promo.jpg'
import img1 from '../assets/images/menu-images/menu-guaguafle.jpg'

function App() {

  const [openNav, setOpenNav] = useState(false);
  const [showAd, setShowAd] = useState(true);

  const closeAd = () => {
    setShowAd(false);
  };

  return (
    <>
      <BrowserRouter>
        <div className='relative w-full h-full'>
          <Nav openNav={openNav} setOpenNav={setOpenNav} />
          {showAd && (
            <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-70 z-50'>
              <div className='absolute max-w-xl mx-auto bg-guafleSecondary p-6 rounded-lg'>
                <button
                  className='absolute top-2 right-2 textblack text-2xl font-bold'
                  onClick={closeAd}
                >
                  X
                </button>
                <img src={img0} alt='Anuncio' className='w-full pr-2' />
              </div>
            </div>
          )}
          <div className={`transition-all duration-300 ${openNav ? 'mt-56' : ''}`}></div>
          <AppRoutes />
          <Footer />
        </div >
      </BrowserRouter>
    </>
  )
}

export default App
