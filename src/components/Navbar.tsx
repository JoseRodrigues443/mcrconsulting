
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-mcr-blue">MCR</span>
              <span className="text-xl font-medium text-mcr-teal ml-1">Consulting</span>
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
              className="text-mcr-blue hover:text-mcr-teal focus:outline-none"
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
        "text-mcr-dark font-medium hover:text-mcr-teal transition-colors py-2",
        className
      )}
    >
      {children}
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
      className="block w-full py-2 text-mcr-dark hover:text-mcr-teal transition-colors"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;
