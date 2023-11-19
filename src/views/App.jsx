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
        <Nav />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
