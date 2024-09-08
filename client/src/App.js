import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PageNotAvailable from './pages/PageNotAvailable'
import HospitalRegistrationForm from './pages/HospitalRegistrationForm'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotAvailable />} />
          <Route path="/" element={<LandingPage />} />  
          <Route path="/about" element={<PageNotAvailable />} />
          <Route path="/hospitalRegistration" element={<HospitalRegistrationForm />} />
          <Route path="/hospitals" element={<PageNotAvailable />} />
          <Route path="/hospitals/:uuid" element={<PageNotAvailable />} />
          <Route path="/signin" element={<PageNotAvailable />} />
          <Route path="/community" element={<PageNotAvailable />} />
          <Route path="/profile" element={<PageNotAvailable />} />
          <Route path="/dashboard" element={<PageNotAvailable />} />
          <Route path="/settings" element={<PageNotAvailable />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

