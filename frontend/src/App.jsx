import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'

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

// Placeholder components - replace these with your actual page components
const Home = () => <h1>Home Page</h1>
const About = () => <h1>About Us Page</h1>
const Services = () => <h1>Services Page</h1>
const CaseStudies = () => <h1>Case Studies Page</h1>
const Shop = () => <h1>Shop Page</h1>
const Contact = () => <h1>Contact Us Page</h1>

export default App
