import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigation = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div
            onClick={() => handleNavigation("/")}
            className="text-xl font-semibold text-white cursor-pointer"
          >
            Workforce Global
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <div
              onClick={() => handleNavigation("/")}
              className="nav-link cursor-pointer"
            >
              Home
            </div>
            <div
              onClick={() => handleNavigation("/about")}
              className="nav-link cursor-pointer"
            >
              About
            </div>
            <div
              onClick={() => handleNavigation("/contact")}
              className="nav-link cursor-pointer"
            >
              Contact
            </div>
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
              <div
                onClick={() => handleNavigation("/")}
                className="px-4 py-2 text-white hover:bg-white/10 rounded-md cursor-pointer"
              >
                Home
              </div>
              <div
                onClick={() => handleNavigation("/about")}
                className="px-4 py-2 text-white hover:bg-white/10 rounded-md cursor-pointer"
              >
                About
              </div>
              <div
                onClick={() => handleNavigation("/contact")}
                className="px-4 py-2 text-white hover:bg-white/10 rounded-md cursor-pointer"
              >
                Contact
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
