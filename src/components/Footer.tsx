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
} from "lucide-react";
import { Link } from "react-router-dom";
import aimsLogo from "@/assets/Footer-Logo.png";

// ✅ same structure as Navigation navItems
const navItems = [
  {
    name: "About",
    submenu: [
      { name: "Overview", path: "/about/overview" },
      { name: "Impact", path: "/about/impact" },
    ],
  },
  {
    name: "Projects",
    submenu: [
      { name: "Sugar Hospital", path: "/projects/sugar-hospital" },
      { name: "Community Camps", path: "/projects/community camps" },
    ],
  },
  {
    name: "Partners",
    submenu: [
      { name: "Strategic Partners", path: "/partners/strategic" },
      { name: "MoUs & Collaborations", path: "/partners/mous" },
      { name: "Become a Partner", path: "/partners/become" },
    ],
  },
  {
    name: "Get Involved",
    submenu: [
      { name: "Donate", path: "/get-involved/donate" },
      { name: "Volunteer", path: "/get-involved/volunteer" },
      { name: "Membership", path: "/get-involved/membership" },
      { name: "Corporate Giving & CSR", path: "/get-involved/csr" },
    ],
  },
  {
    name: "News",
    submenu: [
      { name: "Updates & Events", path: "/news/updates" },
      { name: "Research & Education", path: "/news/research" },
    ],
  },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.remove("opacity-0");
                el.classList.add("animate-slide-up");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
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
    <footer id="footer" ref={footerRef} className="bg-muted/50 pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:ml-[120px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Logo + Description */}
          <div className="lg:col-span-2 animate-on-scroll opacity-0">
            <div className="font-roboto font-medium flex items-center space-x-3 mb-6">
              <img
                src={aimsLogo}
                alt="AIMS Middle East Logo"
                className="h-12 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="font-roboto font-medium text-muted-foreground mb-6 leading-relaxed max-w-md">
              Like the flowing waters of the Abaseen river, we bring life, hope,
              and healing to communities across the Middle East. Our mission is
              to transform healthcare delivery through innovation, compassion,
              and excellence.
            </p>

            <div className="bg-card p-6 rounded-xl border border-border/50 shadow-card">
              <div className="flex items-center space-x-3 mb-3">
                <Heart className="w-5 h-5 text-primary" />
                <span className="font-roboto font-medium gradient-text">
                  Our Promise
                </span>
              </div>
              <p className="font-roboto font-medium text-sm text-muted-foreground">
                Comprehensive, affordable, and accessible diabetes healthcare
                for all. Building healthier communities, one patient at a time.
              </p>
            </div>
          </div>

          {/* Quick Links with Dropdowns */}
          <div className="animate-on-scroll opacity-0">
            <h3 className="font-roboto text-lg font-bold gradient-text mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navItems.map((item, i) => (
                <li key={i}>
                  {item.submenu ? (
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer font-semibold text-muted-foreground hover:text-primary transition-colors duration-300">
                        {item.name}
                        <ChevronDown
                          size={16}
                          className="ml-1 group-open:rotate-180 transition-transform duration-300"
                        />
                      </summary>
                      <ul className="ml-4 mt-2 space-y-1">
                        {item.submenu.map((sub, j) => (
                          <li key={j}>
                            <Link
                              to={sub.path}
                              className="block text-sm text-gray-600 hover:text-primary transition-colors duration-300 hover:translate-x-2 transform font-roboto"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      to={item.path}
                      className="block font-roboto text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-2 transform"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-on-scroll opacity-0">
            <h3 className="font-roboto text-lg font-bold gradient-text mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-primary mt-1 group-hover:scale-110 transition-transform" />
                <p className="font-roboto text-sm text-muted-foreground">
                  Peshawar, Khyber Pakhtunkhwa <br /> Pakistan
                </p>
              </div>
              <a
                href="mailto:asdkhn@gmail.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-roboto">asdkhn@gmail.com</span>
              </a>
              <a
                href="tel:+971507698076"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-roboto">+971 50 769 8076</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="animate-on-scroll opacity-0 text-center md:text-left">
              <p className="text-sm font-roboto text-muted-foreground">
                © {new Date().getFullYear()} AIMS Middle East. All Rights Reserved.
              </p>
              <p className="text-xs text-muted-foreground font-roboto mt-1">
                Flowing care to those in need, like the eternal Abaseen river.
              </p>
            </div>

            <div className="flex items-center space-x-6 animate-on-scroll opacity-0">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
              <button
                onClick={scrollToTop}
                className="p-2 bg-card rounded-lg border border-border/50 text-muted-foreground hover:text-white hover:bg-gradient-primary transition-all duration-300 hover:scale-110 group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
