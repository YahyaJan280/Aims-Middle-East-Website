import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import aimsLogo from "@/assets/Navbar-Logo-White.png";

const navItems = [
  { name: "Home", id: "hero" },
  {
    name: "Purpose",
    children: [
      { name: "Our Mission", id: "mission" },
      { name: "Our Vision", id: "vision" },
    ],
  },
  { name: "Objectives", id: "objectives" },
  { name: "Projects", id: "projects" },
  { name: "Impact", id: "achievements" },
  {
    name: "Get Involved",
    children: [
      { name: "Contact Us", path: "/contact" },
      { name: "Upcoming Events", id: "upcoming-events" },
    ],
  },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

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
          <div className="flex items-center ">
            <img
              src={aimsLogo}
              alt="AIMS Logo"
              className="h-10 lg:ml-28 md:h-12 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center lg:mr-96 space-x-6">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center text-white text-base font-medium hover:text-gray-200"
                  >
                    {item.name}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === item.name && (
                    <div className="absolute left-0 mt-2 bg-white text-black rounded-lg shadow-lg min-w-[180px]">
                      {item.children.map((child) =>
                        child.path ? (
                          <Link
                            key={child.name}
                            to={child.path}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {child.name}
                          </Link>
                        ) : (
                          <button
                            key={child.name}
                            onClick={() =>
                              document
                                .getElementById(child.id)
                                ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {child.name}
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>
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
          <div className="py-4  space-y-1 bg-primary/95 backdrop-blur-md rounded-lg mt-2">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.name} className="px-4">
                  <details>
                    <summary className="cursor-pointer py-2 text-base text-white font-medium">
                      {item.name}
                    </summary>
                    <ul className="pl-4">
                      {item.children.map((child) =>
                        child.path ? (
                          <li key={child.name}>
                            <Link
                              to={child.path}
                              className="block py-1 text-sm text-white hover:text-gray-300"
                            >
                              {child.name}
                            </Link>
                          </li>
                        ) : (
                          <li key={child.name}>
                            <button
                              onClick={() =>
                                document
                                  .getElementById(child.id)
                                  ?.scrollIntoView({ behavior: "smooth" })
                              }
                              className="block py-1 text-sm text-white hover:text-gray-300 text-left"
                            >
                              {child.name}
                            </button>
                          </li>
                        )
                      )}
                    </ul>
                  </details>
                </div>
              ) : (
                <button
                  key={item.id}
                  onClick={() =>
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
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
