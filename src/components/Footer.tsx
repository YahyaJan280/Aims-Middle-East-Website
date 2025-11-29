import { useEffect, useRef } from "react";
import Aims from "../assets/Footer-Logo.png";
import { Link } from "react-router-dom";
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

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements =
              entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.remove("opacity-0");
                el.classList.add("opacity-100");
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
        { name: "Sugar Hospital", path: "/projects/sugar-hospital", icon: Hospital },
        { name: "Community Camps", path: "/projects/community camps", icon: Users },
      ],
    },
    {
      name: "Partners",
      submenu: [
        { name: "Strategic Partners", path: "/partners/strategic", icon: Briefcase },
        { name: "MoUs & Collaborations", path: "/partners/mous", icon: FileText },
        { name: "Become a Partner", path: "/partners/become", icon: UserPlus },
      ],
    },
    {
      name: "Get Involved",
      submenu: [
        { name: "Donate", path: "/get-involved/donate", icon: Heart },
        { name: "Volunteer", path: "/get-involved/volunteer", icon: Users },
        { name: "Membership", path: "/get-involved/membership", icon: BadgeDollarSign },
        { name: "Corporate Giving & CSR", path: "/get-involved/csr", icon: Building2 },
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

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
];

  return (
    <footer
      ref={footerRef}
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-b from-slate-50 to-slate-100 pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 lg:pb-10 text-gray-700"
    >
      {/* Background dots */}
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

      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 max-w-[1360px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12 lg:mb-14">

          {/* Logo + Message */}
          <div className="sm:col-span-2 animate-on-scroll opacity-0 transition-opacity duration-700">
            <div className="flex items-center gap-4 mb-6 group">
              <img
                src={Aims}
                alt="AIMS Logo"
                className="h-12 sm:h-14 lg:h-14 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <p className="text-sm sm:text-base text-muted-foreground lg:text-lg text-gray-600 leading-relaxed mb-5 text-left">
              Like the flowing waters of the Abaseen river, we bring life, hope,
              and healing to communities across the Middle East.
            </p>

            <div className="bg-white p-5 sm:p-6 lg:p-7 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold text-base sm:text-lg text-primary">
                  Our Promise
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 text-muted-foreground leading-relaxed text-left">
                Comprehensive, affordable, and accessible diabetes healthcare
                for all.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-on-scroll opacity-0 transition-opacity duration-700">
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-4 text-left">
              Quick Links
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {navItems.map((item, i) => (
                <li key={i}>
                  {item.submenu ? (
                    <details className="group relative z-10">
                      <summary className="flex justify-between items-center cursor-pointer font-medium text-sm sm:text-base text-gray-600 text-muted-foreground hover:text-primary transition-colors">
                        {item.name}
                        <ChevronDown
                          size={16}
                          className="ml-1 group-open:rotate-180 transition-transform duration-300"
                        />
                      </summary>

                      <ul className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((sub, j) => {
                          const Icon = sub.icon;
                          return (
                            <li key={j}>
                              <Link
                                to={sub.path}
                                className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 hover:text-primary transition-all duration-300 hover:translate-x-2 group"
                              >
                                <Icon
                                  size={14}
                                  className="flex-shrink-0 group-hover:scale-110 transition-transform"
                                />
                                <span>{sub.name}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      to={item.path}
                      className="flex items-center gap-2 text-sm sm:text-base text-gray-600 hover:text-primary transition-all duration-300 hover:translate-x-2 group"
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

          {/* Contact */}
          <div className="animate-on-scroll opacity-0 transition-opacity duration-700">
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-4 text-left">
              Contact Us
            </h3>

            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-left">
                  Peshawar, Khyber Pakhtunkhwa Pakistan
                </p>
              </div>

              <a
                href="mailto:asdkhn@gmail.com"
                className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm sm:text-base">asdkhn@gmail.com</span>
              </a>

              <a
                href="tel:+971507698076"
                className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm sm:text-base">+971 50 769 8076</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-center sm:text-left">

          <div className="animate-on-scroll opacity-0 transition-opacity duration-700">
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 text-left">
              © {new Date().getFullYear()} AIMS Middle East. All Rights Reserved.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Flowing care to those in need.
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-4 mt-2">
              <Link to="/privacy-policy" className="text-xs sm:text-sm text-gray-600 hover:text-primary">
                Privacy Policy
              </Link>
              <span className="text-gray-400">•</span>
              <Link to="/terms-of-service" className="text-xs sm:text-sm text-gray-600 hover:text-primary">
                Terms of Use
              </Link>
            </div>
          </div>

          {/* Social + Back to Top */}
          <div className="flex items-center justify-center gap-4 sm:gap-5 animate-on-scroll opacity-0 transition-opacity duration-700">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white  rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-blue-800 hover:border-transparent transition-all hover:scale-110 shadow-sm hover:shadow-md"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}

            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-white  rounded-lg border border-gray-200 text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-blue-800 hover:border-transparent transition-all hover:scale-110 shadow-sm hover:shadow-md flex items-center justify-center"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
