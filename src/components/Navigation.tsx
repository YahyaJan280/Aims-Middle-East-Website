import { useState, useEffect } from "react";
import Aims from "@/assets/Navbar-Logo-White.png";
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
      { name: "Sugar Hospital", path: "/projects/sugar-hospital", icon: Hospital },
      { name: "Community Camps", path: "/projects/community camps", icon: Users },
    ],
  },
  {
    name: "Partners",
    icon: Handshake,
    submenu: [
      { name: "Strategic Partners", path: "/partners/strategic", icon: Briefcase },
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
      { name: "Membership", path: "/get-involved/membership", icon: BadgeDollarSign },
      { name: "Corporate Giving & CSR", path: "/get-involved/csr", icon: Building2 },
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
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (idx) => setOpenDropdown(openDropdown === idx ? null : idx);
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-primary/95 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-md"
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center space-x-2 xl:ml-24 sm:space-x-3 md:space-x-4">
              <img src={Aims} alt="AIMS Logo" className="h-8 sm:h-10 md:h-12 w-auto" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-4 xl:px-8">
            <div className="flex items-center space-x-1 xl:ml-80">
              {navItems.map((item, idx) =>
                item.submenu ? (
                  <div key={idx} className="relative group">
                    <button
                      onClick={() => toggleDropdown(idx)}
                      onMouseEnter={() => setOpenDropdown(idx)}
                      className="flex items-center px-3 xl:px-4 py-2 text-white text-sm xl:text-base font-medium hover:bg-white hover:bg-opacity-10 rounded-md transition-all duration-200"
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform duration-200 ${
                          openDropdown === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    {openDropdown === idx && (
                      <div
                        className="absolute left-0 top-full mt-1 w-56 xl:w-60 bg-white rounded-lg shadow-xl py-2 z-50"
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.submenu.map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.path}
                            className="flex items-center px-4 py-2.5 text-sm xl:text-base text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-150"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <sub.icon size={18} className="mr-3 text-indigo-600" />
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center px-3 xl:px-4 py-2 text-white text-sm xl:text-base font-medium hover:bg-white hover:bg-opacity-10 rounded-md transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white hover:bg-white hover:bg-opacity-10 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-3 space-y-1 bg-indigo-700 bg-opacity-50 rounded-lg mb-3 max-h-96 overflow-y-auto">
            {navItems.map((item, idx) =>
              item.submenu ? (
                <div key={idx} className="border-b border-white border-opacity-10 last:border-0">
                  <button
                    className="w-full flex justify-between items-center px-4 py-3 text-base sm:text-lg text-white font-medium hover:bg-white hover:bg-opacity-5 transition-colors"
                    onClick={() => toggleDropdown(idx)}
                  >
                    <div className="flex items-center">
                      <item.icon size={20} className="mr-3" />
                      {item.name}
                    </div>
                    <ChevronDown
                      size={18}
                      className={`transform transition-transform duration-200 ${
                        openDropdown === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openDropdown === idx ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="bg-indigo-800 bg-opacity-30 py-2">
                      {item.submenu.map((sub, i) => (
                        <Link
                          key={i}
                          to={sub.path}
                          className="flex items-center px-6 sm:px-8 py-2.5 text-sm sm:text-base text-white text-opacity-90 hover:text-white hover:bg-white hover:bg-opacity-5 transition-colors"
                          onClick={closeAllMenus}
                        >
                          <sub.icon size={18} className="mr-3 text-indigo-300" />
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center w-full px-4 py-3 text-base sm:text-lg text-white font-medium hover:bg-white hover:bg-opacity-5 transition-colors border-b border-white border-opacity-10 last:border-0"
                  onClick={closeAllMenus}
                >
                  <item.icon size={20} className="mr-3" />
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
