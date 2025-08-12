import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import aimsLogo from '@/assets/Navbar-Logo-White.png';

const navItems = [
  { name: 'Home', id: 'hero' },
  { name: 'Mission', id: 'mission' },
  { name: 'Objectives', id: 'objectives' },
  { name: 'Projects', id: 'projects' },
  { name: 'Impact', id: 'achievements' },
  { name: 'Contact', id: 'footer' }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-card' : 'bg-transparent'
      }`}
    >
      <div className="max-w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center py-4 sm:py-6 animate-slide-right">
            <img
              src={aimsLogo}
              alt="AIMS Logo"
              className="h-10 sm:h-12 w-auto max-w-[120px] lg:ml-16 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-white text-sm xl:text-base hover:text-white transition duration-300 font-medium relative group animate-slide-up animate-delay-${(index + 1) * 100}`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block animate-slide-left">
            <Button
              onClick={() => scrollToSection('cta')}
              className="text-sm font-semibold text-primary bg-white hover:bg-white hover:text-primary"
            >
              Get Involved
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white hover:text-white transition duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 bg-background/95 backdrop-blur-md rounded-lg mt-2 border border-border">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-sm sm:text-base text-foreground hover:text-primary hover:bg-accent/10 transition duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                variant="gradient"
                onClick={() => scrollToSection('cta')}
                className="w-full text-sm font-semibold"
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
