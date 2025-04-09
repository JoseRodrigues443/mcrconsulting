
import React from 'react';
import { ArrowRight, Zap, Globe, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-mcr-blue to-mcr-dark opacity-90"></div>
        <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-mcr-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-20 w-72 h-72 bg-mcr-glow/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 py-1 px-3 rounded-full bg-white/5 backdrop-blur border border-mcr-purple/20">
            <span className="text-sm font-medium text-mcr-glow flex items-center">
              <Zap className="h-4 w-4 mr-1 text-mcr-teal animate-pulse-glow" />
              Next-Gen Technology Solutions
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Technology Solutions{" "}
            <span className="text-gradient">Experts</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-up opacity-90">
            MCR Consulting provides cutting-edge technology solutions and expert consulting services across Portugal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a 
              href="#services" 
              className="bg-gradient-to-r from-mcr-teal to-mcr-purple text-white font-semibold py-3 px-6 rounded-md transition-all hover:shadow-lg hover:shadow-mcr-teal/20 inline-flex items-center justify-center group"
            >
              Our Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#contact" 
              className="bg-white/10 backdrop-blur hover:bg-white/15 text-white border border-white/10 font-semibold py-3 px-6 rounded-md transition-all"
            >
              Contact Us
            </a>
          </div>
          
          <div className="mt-16 flex justify-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center">
              <Globe className="h-5 w-5 mr-2 text-mcr-glow" />
              <span>Global Solutions</span>
            </div>
            <div className="flex items-center">
              <Database className="h-5 w-5 mr-2 text-mcr-glow" />
              <span>Enterprise Ready</span>
            </div>
            <div className="flex items-center">
              <Zap className="h-5 w-5 mr-2 text-mcr-glow" />
              <span>Cutting Edge</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mcr-purple/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
