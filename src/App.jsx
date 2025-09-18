import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import Products from './components/Products';
import Membership from './components/Membership';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Intro />
      <Services />
      <Products />
      <Membership />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;