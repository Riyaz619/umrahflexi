import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import Packages from './components/Packages';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <div className="bg-gray-50 py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Find your plan</h2>
              <p className="mt-4 text-xl text-gray-600">
                Select a package and payment duration to find the ideal plan for your umrah journey
              </p>
            </div>
            <Calculator />
          </div>
        </div>
        <Packages />
        <About />
      </main>
      <Footer />
    </div>
  );
}