import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProjectHighlights } from './components/ProjectHighlights';
import { Testimonials } from './components/Testimonials';
import { BottomCTA } from './components/BottomCTA';
import { Footer } from './components/Footer';
import { DarkMeshGradients } from './components/DarkMeshGradients';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <DarkMeshGradients />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <WhyChooseUs />
        <ProjectHighlights />
        <Testimonials />
        <BottomCTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;