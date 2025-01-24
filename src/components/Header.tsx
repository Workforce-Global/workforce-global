import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-semibold text-white">
            Workforce Global
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden p-2 rounded-md text-white hover:bg-white/10"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden py-4 animate-fade-down">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="px-4 py-2 text-white hover:bg-white/10 rounded-md"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 text-white hover:bg-white/10 rounded-md"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 text-white hover:bg-white/10 rounded-md"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
