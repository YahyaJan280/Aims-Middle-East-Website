import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import aimsLogo from "@/assets/Navbar-Logo-White.png";

const navItems = [
  { name: "Home", id: "hero" },
  { name: "Purpose", id: "mission" },
  { name: "Objectives", id: "objectives" },
  { name: "Projects", id: "projects" },
  { name: "Impact", id: "achievements" },
  { name: "Contact Us", path: "/contact" }, // ✅ replaced Get Involved dropdown
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-full mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
           <Link to="/"> {/* Clicking the logo redirects to the home page */}
              <img
                src={aimsLogo}
                alt="AIMS Logo"
                className="h-10 lg:ml-28 px-2 sm:h-12 w-auto max-w-[120px] hover:scale-105 transition-transform duration-300"
              />
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center  lg:mr-96 space-x-6">
            {navItems.map((item) =>
              item.path ? (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white text-base font-medium hover:text-gray-200"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() =>
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-white text-base font-medium hover:text-gray-200"
                >
                  {item.name}
                </button>
              )
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden px-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-1 bg-primary/95 backdrop-blur-md rounded-lg mt-2">
            {navItems.map((item) =>
              item.path ? (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block w-full px-4 py-2 text-base text-white hover:text-gray-300 text-left"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.id}
                  // onClick={() =>
                  //   document
                  //     .getElementById(item.id)
                  //     ?.scrollIntoView({ behavior: "smooth" })
                  // }
                  className="block w-full px-4 py-2 text-base text-white hover:text-gray-300 text-left"
                >
                  {item.name}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
