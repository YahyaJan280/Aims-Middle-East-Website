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
    { name: "Impact", path: "/about/impact", icon: TrendingUp }, // <-- fixed path
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
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (idx: number) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  return (
    <nav
      className={`fixed top-0 left-0 bg-primary/95 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? " backdrop-blur-md shadow-md"
          : ""
      }`}
    >
      <div className="max-w-full mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/">
            <img
              src={aimsLogo}
              alt="AIMS Logo"
              className="h-10 px-2 sm:h-12 w-auto max-w-[120px] hover:scale-105 lg:ml-28 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center space-x-8  lg:mr-48">
            {navItems.map((item, idx) =>
              item.submenu ? (
                <div key={idx} className="relative">
                  <button
                    onClick={() => toggleDropdown(idx)}
                    className="flex items-center text-white text-base font-medium"
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform ${
                        openDropdown === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === idx && (
                    <div className="absolute left-0 top-full mt-2 w-32 bg-white rounded-lg shadow-lg py-2 z-50">
                      {item.submenu.map((sub, i) => (
                        <Link
                          key={i}
                          to={sub.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <sub.icon
                            size={16}
                            className="mr-2 text-indigo-600"
                          />
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
                  className="flex items-center text-white text-base font-medium"
                >
                  {item.name}
                </Link>
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
            isMobileMenuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-1 bg-primary/95 backdrop-blur-md rounded-lg mt-2">
            {navItems.map((item, idx) =>
              item.submenu ? (
                <div key={idx}>
                  <button
                    className="w-full flex justify-between items-center px-4 py-2 text-base text-white"
                    onClick={() => toggleDropdown(idx)}
                  >
                    <div className="flex items-center">{item.name}</div>
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${
                        openDropdown === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === idx && (
                    <div className="pl-6">
                      {item.submenu.map((sub, i) => (
                        <Link
                          key={i}
                          to={sub.path}
                          className="block px-4 py-2 text-sm text-white flex items-center"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          <sub.icon
                            size={16}
                            className="mr-2 text-indigo-600"
                          />
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
                  className=" w-full px-4 py-2 text-base text-white flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
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
