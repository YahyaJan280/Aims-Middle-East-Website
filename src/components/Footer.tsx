import { useEffect, useRef } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
  ChevronDown,
  Eye,
  TrendingUp,
  Hospital,
  Users,
  Briefcase,
  FileText,
  UserPlus,
  BadgeDollarSign,
  Building2,
  Bell,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import aimsLogo from "@/assets/Footer-Logo.png";

const navItems = [
  {
    name: "About",
    submenu: [
      { name: "Overview", path: "/about/overview", icon: Eye },
      { name: "Impact", path: "/about/impact", icon: TrendingUp },
    ],
  },
  {
    name: "Projects",
    submenu: [
      {
        name: "Sugar Hospital",
        path: "/projects/sugar-hospital",
        icon: Hospital,
      },
      {
        name: "Community Camps",
        path: "/projects/community-camps",
        icon: Users,
      },
    ],
  },
  {
    name: "Partners",
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
    submenu: [
      { name: "Donate", path: "/get-involved/donate", icon: Heart },
      { name: "Volunteer", path: "/get-involved/volunteer", icon: Users },
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
    submenu: [
      { name: "Updates & Events", path: "/news/updates", icon: Bell },
      { name: "Research & Education", path: "/news/research", icon: BookOpen },
    ],
  },
  { name: "Contact", path: "/contact", icon: Mail },
];

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements =
              entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.remove("opacity-0", "translate-y-4");
                el.classList.add("opacity-100", "translate-y-0");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer
      id="footer"
      ref={footerRef}
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] mt-12 -mr-[50vw] h-[calc(100vh-80px)] overflow-hidden flex items-center bg-gradient-to-b from-slate-50 to-slate-100 pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 lg:pb-10 text-gray-700"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)",
            backgroundSize: "40px 40px",
            height: "100%",
            width: "100%",
          }}
        />
      </div>

      {/* Main container matching navbar max-width of 1920px */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Inner content container with max-width 1200px */}
        <div className="max-w-[1200px] mx-auto">
          {/* Grid adjusts perfectly for xs → xl */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 xl:gap-14 mb-10 sm:mb-12 lg:mb-14">
            {/* Logo + Description */}
            <div className="sm:col-span-2 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700">
              <div className="flex items-center space-x-3 mb-5 sm:mb-6">
                <img
                  src={aimsLogo}
                  alt="AIMS Middle East Logo"
                  className="h-10 sm:h-12 lg:h-14 hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="font-roboto text-sm sm:text-base lg:text-base xl:text-lg text-muted-foreground leading-relaxed mb-5 sm:mb-6">
                Like the flowing waters of the Abaseen river, we bring life,
                hope, and healing to communities across the Middle East. Our
                mission is to transform healthcare delivery through innovation,
                compassion, and excellence.
              </p>

              <div className="bg-card p-5 sm:p-6 lg:p-7 rounded-xl border border-border/50 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <span className="font-roboto font-semibold text-base sm:text-lg gradient-text">
                    Our Promise
                  </span>
                </div>
                <p className="text-sm sm:text-base lg:text-base font-roboto text-muted-foreground leading-relaxed">
                  Comprehensive, affordable, and accessible diabetes healthcare
                  for all. Building healthier communities, one patient at a
                  time.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700">
              <h3 className="font-roboto text-lg sm:text-xl lg:text-xl font-bold gradient-text mb-4 sm:mb-5 lg:mb-6 text-left">
                Quick Links
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {navItems.map((item, i) => (
                  <li key={i}>
                    {item.submenu ? (
                      <details className="group">
                        <summary className="flex justify-between items-center cursor-pointer font-medium text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                          {item.name}
                          <ChevronDown
                            size={16}
                            className="ml-1 group-open:rotate-180 transition-transform duration-300"
                          />
                        </summary>
                        <ul className="ml-4 mt-2 space-y-2">
                          {item.submenu.map((sub, j) => (
                            <li key={j}>
                              <Link
                                to={sub.path}
                                className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 hover:text-primary transition-all duration-300 hover:translate-x-2 transform group"
                              >
                                <sub.icon
                                  size={14}
                                  className="flex-shrink-0 group-hover:scale-110 transition-transform"
                                />
                                <span>{sub.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <Link
                        to={item.path}
                        className="flex items-center space-x-2 text-sm sm:text-base font-roboto text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 transform group"
                      >
                        {item.icon && (
                          <item.icon
                            size={16}
                            className="flex-shrink-0 group-hover:scale-110 transition-transform"
                          />
                        )}
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700">
              <h3 className="font-roboto text-lg sm:text-xl lg:text-xl font-bold gradient-text mb-4 sm:mb-5 lg:mb-6 text-left">
                Contact Us
              </h3>
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mt-1">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm sm:text-base lg:text-base text-muted-foreground leading-relaxed mt-2 text-left">
                    Peshawar, Khyber Pakhtunkhwa Pakistan
                  </p>
                </div>
                <a
                  href="mailto:asdkhn@gmail.com"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm sm:text-base lg:text-base font-roboto">
                    asdkhn@gmail.com
                  </span>
                </a>
                <a
                  href="tel:+971507698076"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm sm:text-base lg:text-base font-roboto">
                    +971 50 769 8076
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-border/50 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-center sm:text-left">
            <div className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700">
              <p className="text-xs sm:text-sm lg:text-base font-roboto text-muted-foreground">
                © {new Date().getFullYear()} AIMS Middle East. All Rights
                Reserved.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-roboto">
                Flowing care to those in need, like the eternal Abaseen river.
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-4 mt-2">
                <Link
                  to="/privacy-policy"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-roboto"
                >
                  Privacy Policy
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link
                  to="/terms-of-service"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-roboto"
                >
                  Terms of Use
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-5 sm:space-x-6 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-card rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-blue-800 hover:border-transparent transition-all duration-300 hover:scale-110 transform shadow-sm hover:shadow-md"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-card rounded-lg border border-border/50 text-muted-foreground hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-blue-800 hover:border-transparent transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md flex items-center justify-center"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
