import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Competitions from './components/Competitions';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Competitions />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}
