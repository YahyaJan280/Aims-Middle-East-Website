import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import aimsLogo from "@/assets/Navbar-Logo-White.png";

const navItems = [
  { name: "Home", id: "hero" },
  { name: "Mission", id: "mission" },
  { name: "Objectives", id: "objectives" },
  { name: "Projects", id: "projects" },
  { name: "Impact", id: "achievements" },
  { name: "Contact Us", path: "/contact" }, // Updated: Added path for ContactPage
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
      className={`font-roboto font-normal  fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-full mx-auto bg-primary/95  px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center py-4 sm:py-6 animate-slide-right lg:ml-[114px]">
            <img
              src={aimsLogo}
              alt="AIMS Logo"
              className="h-10 sm:h-12 w-auto max-w-[120px] ml-2 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navItems.map((item, index) =>
              item.path ? (
                // If the item has a path (for ContactPage), use Link
                <Link
                  key={item.name}
                  to={item.path} // Navigate to the Contact page
                  className="font-roboto  text-white text-sm xl:text-base hover:text-white transition duration-300 font-medium relative group animate-slide-up animate-delay-${(index + 1) * 100}"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                // If the item is a section to scroll to (e.g., Mission, Projects)
                <button
                  key={item.id}
                  onClick={() =>
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-white text-sm xl:text-base hover:text-white transition duration-300 font-medium relative group animate-slide-up animate-delay-${(index + 1) * 100}"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
                </button>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block animate-slide-left lg:mr-[130px]">
            <Button
              onClick={() =>
                document
                  .getElementById("cta")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-roboto  text-sm font-semibold text-primary bg-white hover:bg-white hover:text-primary"
            >
              Get Involved
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden px-2 text-white hover:text-white transition duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 bg-background/95 backdrop-blur-md rounded-lg mt-2 border border-border">
            {navItems.map((item) =>
              item.path ? (
                // If the item has a path (for ContactPage), use Link
                <Link
                  key={item.name}
                  to={item.path} // Navigate to the Contact page
                  className="font-roboto block w-full text-left px-4 py-2 text-sm sm:text-base text-foreground hover:text-primary hover:bg-accent/10 transition duration-300 font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                // If the item is a section to scroll to
                <button
                  key={item.id}
                  onClick={() =>
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block w-full text-left px-4 py-2 text-sm sm:text-base text-foreground hover:text-primary hover:bg-accent/10 transition duration-300 font-medium"
                >
                  {item.name}
                </button>
              )
            )}
            <div className="px-4 pt-2">
              <Button
                variant="gradient"
                onClick={() =>
                  document
                    .getElementById("cta")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-roboto  w-full text-sm font-normal"
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
