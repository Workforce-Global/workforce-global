import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-semibold">
            Workforce Global
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            {/* <Link to="/projects" className="nav-link">
              Projects
            </Link> */}
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 animate-fade-down">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="px-4 py-2 hover:bg-gray-100 rounded-md"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="px-4 py-2 hover:bg-gray-100 rounded-md"
                onClick={toggleMenu}
              >
                Projects
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 hover:bg-gray-100 rounded-md"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 hover:bg-gray-100 rounded-md"
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
