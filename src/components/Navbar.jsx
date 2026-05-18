import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/icono-cardiapp-removebg-preview.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-[#184741] to-[#0f2f2b] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
            <img src={logo} alt="CardiApp Logo" className="h-10" />
            <span className="text-white">CardiApp</span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-8 items-center">
            <Link
              to="/"
              className={`transition-colors duration-300 ${
                isActive('/')
                  ? 'text-[#7BC64B] font-semibold border-b-2 border-[#7BC64B] pb-1'
                  : 'text-white hover:text-[#6CE1D5]'
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className={`transition-colors duration-300 ${
                isActive('/about')
                  ? 'text-[#7BC64B] font-semibold border-b-2 border-[#7BC64B] pb-1'
                  : 'text-white hover:text-[#6CE1D5]'
              }`}
            >
              Acerca de
            </Link>
            <Link
              to="/contact"
              className={`transition-colors duration-300 ${
                isActive('/contact')
                  ? 'text-[#7BC64B] font-semibold border-b-2 border-[#7BC64B] pb-1'
                  : 'text-white hover:text-[#6CE1D5]'
              }`}
            >
              Contacto
            </Link>
            <button className="bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] text-[#184741] px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300">
              Descargar
            </button>
          </div>

          {/* Hamburger Menu Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-[#6CE1D5]/20">
            <Link
              to="/"
              className={`block py-2 px-4 rounded transition-colors duration-300 ${
                isActive('/') ? 'bg-[#6CE1D5] text-[#184741] font-semibold' : 'text-white hover:bg-[#6CE1D5]/10'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className={`block py-2 px-4 rounded transition-colors duration-300 ${
                isActive('/about') ? 'bg-[#6CE1D5] text-[#184741] font-semibold' : 'text-white hover:bg-[#6CE1D5]/10'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Acerca de
            </Link>
            <Link
              to="/contact"
              className={`block py-2 px-4 rounded transition-colors duration-300 ${
                isActive('/contact') ? 'bg-[#6CE1D5] text-[#184741] font-semibold' : 'text-white hover:bg-[#6CE1D5]/10'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <button className="w-full mt-2 bg-gradient-to-r from-[#6CE1D5] to-[#7BC64B] text-[#184741] px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300">
              Descargar
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
