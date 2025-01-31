import { Link, useNavigate } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
    setIsOpen(false);
  };
  return (
    <footer className="bg-gray-900 text-white/90">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Workforce Global
            </h3>
            <p className="text-sm text-white/70">
              Empowering developers to build amazing projects together.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  onClick={() => handleNavigation("/")}
                  to="/"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/projects"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li> */}
              <li>
                <Link
                  onClick={() => handleNavigation("/")}
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-white transition-colors flex items-center gap-2"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-white transition-colors flex items-center gap-2"
                >
                  <Twitter size={16} />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-white transition-colors flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-white/70">
            © {new Date().getFullYear()} Workforce Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
