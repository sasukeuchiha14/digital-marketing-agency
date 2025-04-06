import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import CaseStudies from './pages/case-studies'
import Shop from './pages/shop'
import Contact from './pages/contact'

function App() {
  return (
    <Router>
      <Header />
      <main className="container mx-auto py-4 px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
