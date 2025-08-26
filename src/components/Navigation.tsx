import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
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
  { name: "Dubai Humanitarian", id: "dubai-humanitarian" },
  {
    name: "Events & Activities",
    children: [
      { name: "Past Events", id: "past-events" },
      { name: "Upcoming Events", id: "upcoming-events" },
    ],
  },
  { name: "Contact Us", path: "/contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

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
      className={`font-roboto fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-full mx-auto bg-primary/95 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center py-4 sm:py-6 lg:ml-[114px]">
            <img
              src={aimsLogo}
              alt="AIMS Logo"
              className="h-10 sm:h-12 w-auto max-w-[120px] ml-2 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-6">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center text-white text-sm xl:text-base font-medium hover:text-white transition"
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
                      {item.children.map((child) => (
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
                      ))}
                    </div>
                  )}
                </div>
              ) : item.path ? (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white text-sm xl:text-base font-medium hover:text-white transition"
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
                  className="text-white text-sm xl:text-base font-medium hover:text-white transition"
                >
                  {item.name}
                </button>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block lg:mr-[130px]">
            <Button
              onClick={() =>
                document
                  .getElementById("cta")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-sm font-semibold text-primary hover:bg-white  bg-white hover:text-primary"
            >
              Get Involved
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden px-2 text-white hover:text-white transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
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
          <div className="py-4 space-y-1 bg-background/95 backdrop-blur-md rounded-lg mt-2 border border-border text-left">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.name} className="px-4">
                  <details>
                    <summary className="cursor-pointer py-2 text-sm sm:text-base text-foreground font-medium text-left">
                      {item.name}
                    </summary>
                    <ul className="pl-4">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <button
                            onClick={() =>
                              document
                                .getElementById(child.id)
                                ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="block w-full py-1 text-sm sm:text-base text-foreground hover:text-primary text-left"
                          >
                            {child.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              ) : item.path ? (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block w-full px-4 py-2 text-sm sm:text-base text-foreground hover:text-primary hover:bg-accent/10 font-medium text-left"
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
                  className="block w-full px-4 py-2 text-sm sm:text-base text-foreground hover:text-primary hover:bg-accent/10 font-medium text-left"
                >
                  {item.name}
                </button>
              )
            )}
            <div className="px-4 pt-2">
              <Button
                variant="gradient"
                className="w-full text-sm font-normal text-left"
              >
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
