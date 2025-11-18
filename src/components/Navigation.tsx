import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Info,
  FolderKanban,
  Handshake,
  Hand,
  Newspaper,
  Mail,
  Eye,
  TrendingUp,
  Hospital,
  Users,
  Briefcase,
  FileText,
  UserPlus,
  Heart,
  UserCheck,
  BadgeDollarSign,
  Building2,
  Bell,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import aimsLogo from "@/assets/Navbar-Logo-White.png";

const navItems = [
  {
    name: "About",
    icon: Info,
    submenu: [
      { name: "Overview", path: "/about/overview", icon: Eye },
      { name: "Impact", path: "/about/impact", icon: TrendingUp },
    ],
  },
  {
    name: "Projects",
    icon: FolderKanban,
    submenu: [
      {
        name: "Sugar Hospital",
        path: "/projects/sugar-hospital",
        icon: Hospital,
      },
      {
        name: "Community Camps",
        path: "/projects/community camps",
        icon: Users,
      },
    ],
  },
  {
    name: "Partners",
    icon: Handshake,
    submenu: [
      {
        name: "Strategic Partners",
        path: "/partners/strategic",
        icon: Briefcase,
      },
      { name: "MoUs & Collaborations", path: "/partners/mous", icon: FileText },
      { name: "Become a Partner", path: "/partners/become", icon: UserPlus },
    ],
  },
  {
    name: "Get Involved",
    icon: Hand,
    submenu: [
      { name: "Donate", path: "/get-involved/donate", icon: Heart },
      { name: "Volunteer", path: "/get-involved/volunteer", icon: UserCheck },
      {
        name: "Membership",
        path: "/get-involved/membership",
        icon: BadgeDollarSign,
      },
      {
        name: "Corporate Giving & CSR",
        path: "/get-involved/csr",
        icon: Building2,
      },
    ],
  },
  {
    name: "News",
    icon: Newspaper,
    submenu: [
      { name: "Updates & Events", path: "/news/updates", icon: Bell },
      { name: "Research & Education", path: "/news/research", icon: BookOpen },
    ],
  },
  { name: "Contact", path: "/contact", icon: Mail },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState({}); // separate for mobile
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (idx) => {
    setMobileDropdown((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  // Desktop dropdown hover with small delay to prevent quick hiding
  const openDesktopDropdown = (idx) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setDesktopDropdown(idx);
  };

  const closeDesktopDropdown = () => {
    setDropdownTimeout(setTimeout(() => setDesktopDropdown(null), 200));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-primary transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-lg" : "shadow-md"
      }`}
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 z-50">
            <img
              src={aimsLogo}
              alt="AIMS Logo"
              className="h-8 sm:h-10 md:h-12 lg:h-12 w-auto max-w-[180px] xl:ml-24 hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-end items-center  gap-4 xl:gap-6 xl:mr-24 ">
            {navItems.map((item, idx) =>
              item.submenu ? (
                <div
                  key={idx}
                  className="relative dropdown-container"
                  onMouseEnter={() => openDesktopDropdown(idx)}
                  onMouseLeave={closeDesktopDropdown}
                >
                  <button className="flex items-center text-white  text-sm xl:text-base font-medium hover:text-blue-200 transition-colors py-2 whitespace-nowrap">
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform duration-200 ${
                        desktopDropdown === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {desktopDropdown === idx && (
                    <div className="absolute top-full left-0 mt-2 w-56 xl:w-64 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.submenu.map((sub, i) => (
                        <Link
                          key={i}
                          to={sub.path}
                          className="flex items-center px-4 py-2.5 xl:py-3 text-sm xl:text-base text-gray-700 hover:bg-blue-50 hover:text-primary/95 transition-colors"
                        >
                          <sub.icon
                            size={18}
                            className="mr-3 text-primary/95"
                          />
                          <span className="font-medium">{sub.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white text-sm xl:text-base font-medium hover:text-blue-200 transition-colors py-2 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden transition-all duration-300 ease-in-out max-h-[90vh] overflow-y-auto mt-2 bg-primary/95 backdrop-blur-md rounded-b-xl shadow-lg">
            {navItems.map((item, idx) =>
              item.submenu ? (
                <div key={idx}>
                  <button
                    className="w-full flex justify-between items-center px-4 py-3 text-base text-white hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => toggleMobileDropdown(idx)}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon size={20} className="text-blue-200" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`transform transition-transform duration-200 ${
                        mobileDropdown[idx] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileDropdown[idx] ? "max-h-[1000px]" : "max-h-0"
                    }`}
                  >
                    <div className="pl-4 pr-2 py-2 space-y-1">
                      {item.submenu.map((sub, i) => (
                        <Link
                          key={i}
                          to={sub.path}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-white hover:bg-white/10 rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <sub.icon size={18} className="text-blue-300" />
                          <span>{sub.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center gap-3 px-4 py-3 text-base text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon size={20} className="text-blue-200" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              )
            )}
          </div>
        )}
      </div>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;
