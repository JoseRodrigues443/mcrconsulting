
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-mcr-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">MCR</span>
              <span className="text-xl font-medium text-mcr-teal ml-1">Consulting</span>
            </div>
            <p className="text-gray-300 mb-4">
              Providing expert technology solutions across Portugal. We help businesses transform and thrive in the digital age.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-mcr-teal transition-colors">Services</a></li>
              <li><a href="#technologies" className="text-gray-300 hover:text-mcr-teal transition-colors">Technologies</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-mcr-teal transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-mcr-teal transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-mcr-teal transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-mcr-teal transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-mcr-teal transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} MCR Consulting, Lda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
