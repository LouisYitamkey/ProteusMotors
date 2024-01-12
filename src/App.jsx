import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HeaderMegaMenu } from '../components/NavBarComponent'
import { LandingPage } from '../pages/LandingPage'
import { ErrorPage } from '../components/ErrorPage'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <HeaderMegaMenu />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
