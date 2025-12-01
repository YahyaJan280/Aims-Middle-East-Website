import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Aims from "../assets/Navbar-Logo.png";
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
  Home,
} from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
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
  const [mobileDropdown, setMobileDropdown] = useState({});
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileDropdown = (idx) => {
    setMobileDropdown((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const openDesktopDropdown = (idx) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setDesktopDropdown(idx);
  };

  const closeDesktopDropdown = () => {
    const timeout = setTimeout(() => setDesktopDropdown(null), 150);
    setDropdownTimeout(timeout);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    setMobileDropdown({});
  };

  const handleDropdownLinkClick = () => {
    setDesktopDropdown(null);
  };

  return (
    <>
      <nav
        className={`fixed bg-white top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-primary backdrop-blur-lg shadow-lg"
            : "bg-primary "
        }`}
      >
        <div className="w-full max-w-[1230px] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0 z-50 group">
              <img
                src={Aims}
                alt="Aims Logo"
                className="h-12 sm:h-11 lg:h-14 w-36 sm:w-40 lg:w-44 rounded-lg lg:-ml-4 font-bold text-white text-lg sm:text-xl lg:text-2xl -ml-3 transition-all duration-300 group-hover:scale-105 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3">
              {navItems.map((item, idx) =>
                item.submenu ? (
                  <div
                    key={idx}
                    className="relative"
                    onMouseEnter={() => openDesktopDropdown(idx)}
                    onMouseLeave={closeDesktopDropdown}
                  >
                    <button className="group flex items-center gap-1.5 px-3 xl:px-4 py-2 text-[#055baa] text-sm xl:text-[15px] font-medium rounded-lg transition-all duration-200 hover:bg-[#00adee] whitespace-nowrap">
                      <span className="group-hover:text-blue-100 transition-colors">
                        {item.name}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`transition-all duration-300 group-hover:text-blue-100 ${
                          desktopDropdown === idx
                            ? "rotate-180 text-blue-200"
                            : ""
                        }`}
                      />
                    </button>

                    {/* Desktop Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-1 w-64 xl:w-72 transition-all duration-200 origin-top ${
                        desktopDropdown === idx
                          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="bg-white rounded-xl  shadow-2xl py-2 border border-gray-100 overflow-hidden">
                        {item.submenu.map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.path}
                            onClick={handleDropdownLinkClick}
                            className="group/item flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100/50 transition-all duration-200 border-l-4 border-transparent hover:border-blue-600"
                          >
                            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-50 group-hover/item:bg-blue-100 transition-colors">
                              <sub.icon
                                size={18}
                                className="text-blue-600 group-hover/item:scale-110 transition-transform"
                              />
                            </div>
                            <span className="font-medium text-sm xl:text-base group-hover/item:text-blue-900 transition-colors">
                              {sub.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center gap-2 px-3 xl:px-4 py-2 text-[#055baa]  text-sm xl:text-[15px] font-medium rounded-lg transition-all duration-200 hover:bg-[#00adee] hover:text-blue-100 whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2  -mr-2 text-[#00adee] hover:bg-white/10 rounded-lg transition-all duration-200 z-50 active:scale-95"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={28} className="sm:w-8 sm:h-8" />
              ) : (
                <Menu size={28} className="sm:w-8 sm:h-8" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 sm:top-18 right-0  bottom-0 w-full sm:w-96 bg-white z-40 transition-all duration-300 overflow-y-auto shadow-2xl ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="p-4 sm:p-6 space-y-2">
          {navItems.map((item, idx) =>
            item.submenu ? (
              <div key={idx} className="rounded-xl overflow-hidden bg-[#00adee]">
                <button
                  className="w-full flex justify-between items-center px-4 py-3.5 text-white hover:bg-white/10 transition-all duration-200 active:scale-98"
                  onClick={() => toggleMobileDropdown(idx)}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10">
                      <item.icon size={20} className="text-blue-200" />
                    </div>
                    <span className="font-semibold text-base ">{item.name}</span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 text-blue-200 ${
                      mobileDropdown[idx] ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    mobileDropdown[idx]
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-2 pb-2 space-y-1  bg-black/20">
                    {item.submenu.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.path}
                        className="flex items-center gap-3 px-4 py-3  text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group active:scale-98"
                        onClick={handleNavClick}
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                          <sub.icon size={16} className="text-blue-300" />
                        </div>
                        <span className="text-sm font-medium">{sub.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center gap-3 px-4 py-3.5  text-white bg-[#00adee] rounded-xl transition-all duration-200 active:scale-98"
                onClick={handleNavClick}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10">
                  <item.icon size={20} className="text-blue-200" />
                </div>
                <span className="font-semibold text-base">{item.name}</span>
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;