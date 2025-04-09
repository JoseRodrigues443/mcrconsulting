
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-mcr-blue to-mcr-blue/80 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Technology Solutions <span className="text-mcr-teal">Experts</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-fade-in-up opacity-90">
            MCR Consulting provides cutting-edge technology solutions and expert consulting services across Portugal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a 
              href="#services" 
              className="bg-mcr-teal hover:bg-mcr-teal/90 text-white font-semibold py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
            >
              Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="#contact" 
              className="bg-white hover:bg-gray-100 text-mcr-blue font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
