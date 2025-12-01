import { useState, useRef } from "react";
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
import Logo from "@/assets/Navbar-Logo.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const timeoutRef = useRef<any>(null);

  const handleEnter = (name: string) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(name);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 240); // << Delay prevents fast hiding
  };

  const navItems = [
    { name: "Home", path: "/", icon: BookOpen },

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
        { name: "Community Camps", path: "/projects/community-camps", icon: Users },
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

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow z-50">
      <div className="max-w-[1230px] mx-auto flex justify-between items-center px-4 py-3">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.submenu ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleEnter(item.name)}
                onMouseLeave={handleLeave}
              >
                {/* Button */}
                <button
                  className="flex items-center gap-1.5 px-3 py-1.5 text-[#055baa] 
                  text-sm font-medium rounded-lg hover:bg-[#00adee] hover:text-white transition-all"
                >
                  <item.icon size={16} />
                  {item.name}
                  <ChevronDown size={14} />
                </button>

                {/* Dropdown */}
                {openDropdown === item.name && (
                  <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-2 min-w-[220px] z-40">

                    {/* UL spacing reduced */}
                    <ul className="space-y-1">
                      {item.submenu.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            to={sub.path}
                            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 
                            hover:bg-[#00adee] hover:text-white rounded"
                          >
                            <sub.icon size={15} />
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center gap-1.5 px-3 py-1.5 text-[#055baa] text-sm 
                font-medium rounded-lg hover:bg-[#00adee] hover:text-white transition-all"
              >
                <item.icon size={16} />
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#055baa]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-inner px-4 pb-4">
          {navItems.map((item) => (
            <div key={item.name} className="border-b py-2">

              {item.submenu ? (
                <>
                  <button
                    className="flex justify-between items-center w-full text-left text-[#055baa] font-medium"
                    onClick={() =>
                      setOpenSubmenu(openSubmenu === item.name ? null : item.name)
                    }
                  >
                    <div className="flex items-center gap-2">
                      <item.icon size={18} />
                      {item.name}
                    </div>

                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        openSubmenu === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openSubmenu === item.name && (
                    <div className="mt-2 pl-6 flex flex-col gap-2">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="flex items-center gap-2 text-gray-700 hover:text-[#00adee]"
                        >
                          <sub.icon size={15} />
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className="flex items-center gap-2 text-[#055baa] font-medium"
                >
                  <item.icon size={18} />
                  {item.name}
                </Link>
              )}

            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
