import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { AppRoutes } from '../utils/routes'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='relative w-full h-full'>
          <Nav />
          <AppRoutes />
          <Footer />
        </div >
      </BrowserRouter>
    </>
  )
}

export default App
