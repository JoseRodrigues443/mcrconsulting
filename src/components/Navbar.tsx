
import React, { useState, useEffect } from 'react';
import { Menu, X, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled 
        ? "bg-mcr-dark/80 backdrop-blur-md border-b border-mcr-purple/10 py-3" 
        : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center group">
              <div className="w-8 h-8 mr-2 bg-gradient-to-br from-mcr-teal to-mcr-purple rounded-md flex items-center justify-center animate-float">
                <Layers className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">MCR</span>
                <span className="text-xl font-medium text-mcr-teal ml-1">Consulting</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#technologies">Technologies</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-mcr-teal focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-2 animate-fade-in">
            <MobileNavLink href="#services" onClick={toggleMenu}>Services</MobileNavLink>
            <MobileNavLink href="#technologies" onClick={toggleMenu}>Technologies</MobileNavLink>
            <MobileNavLink href="#about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMenu}>Contact</MobileNavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => {
  return (
    <a
      href={href}
      className={cn(
        "text-white font-medium relative py-2 group",
        className
      )}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mcr-teal group-hover:w-full transition-all duration-300"></span>
    </a>
  );
};

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode; 
  onClick: () => void 
}) => {
  return (
    <a
      href={href}
      className="block w-full py-2 px-2 text-white hover:bg-white/5 rounded transition-colors"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;
