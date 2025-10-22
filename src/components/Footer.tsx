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
      { name: "Community Camps", path: "/projects/community-camps" },
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
      className="bg-muted/50 pt-10 pb-6 sm:pb-10 text-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✅ Grid adjusts perfectly for xs → xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* ✅ Logo + Description */}
          <div className="sm:col-span-2 animate-on-scroll opacity-0">
            <div className="flex items-center space-x-3 mb-5">
              <img
                src={aimsLogo}
                alt="AIMS Middle East Logo"
                className="h-10 sm:h-12 hover:scale-105 transition-transform"
              />
            </div>
            <p className="font-roboto text-sm sm:text-base text-muted-foreground leading-relaxed mb-5">
              Like the flowing waters of the Abaseen river, we bring life, hope,
              and healing to communities across the Middle East. Our mission is
              to transform healthcare delivery through innovation, compassion,
              and excellence.
            </p>

            <div className="bg-card p-5 sm:p-6 rounded-xl border border-border/50 shadow-card">
              <div className="flex items-center space-x-3 mb-2">
                <Heart className="w-5 h-5 text-primary" />
                <span className="font-roboto font-semibold gradient-text">
                  Our Promise
                </span>
              </div>
              <p className="text-sm sm:text-base font-roboto text-muted-foreground">
                Comprehensive, affordable, and accessible diabetes healthcare for
                all. Building healthier communities, one patient at a time.
              </p>
            </div>
          </div>

          {/* ✅ Quick Links */}
          <div className="animate-on-scroll opacity-0">
            <h3 className="font-roboto text-lg font-bold gradient-text mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navItems.map((item, i) => (
                <li key={i}>
                  {item.submenu ? (
                    <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer font-medium text-muted-foreground hover:text-primary transition">
                        {item.name}
                        <ChevronDown
                          size={16}
                          className="ml-1 group-open:rotate-180 transition-transform"
                        />
                      </summary>
                      <ul className="ml-4 mt-2 space-y-1">
                        {item.submenu.map((sub, j) => (
                          <li key={j}>
                            <Link
                              to={sub.path}
                              className="block text-sm text-gray-600 hover:text-primary transition hover:translate-x-2 transform"
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
                      className="block text-sm font-roboto text-muted-foreground hover:text-primary transition hover:translate-x-2 transform"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Contact Info */}
          <div className="animate-on-scroll opacity-0">
            <h3 className="font-roboto text-lg font-bold gradient-text mb-4">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-primary mt-1 group-hover:scale-110 transition-transform" />
                <p className="text-sm sm:text-base text-muted-foreground">
                  Peshawar, Khyber Pakhtunkhwa <br /> Pakistan
                </p>
              </div>
              <a
                href="mailto:asdkhn@gmail.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base font-roboto">
                  asdkhn@gmail.com
                </span>
              </a>
              <a
                href="tel:+971507698076"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base font-roboto">
                  +971 50 769 8076
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Footer Bottom */}
        <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="animate-on-scroll opacity-0">
            <p className="text-xs sm:text-sm font-roboto text-muted-foreground">
              © {new Date().getFullYear()} AIMS Middle East. All Rights Reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1 font-roboto">
              Flowing care to those in need, like the eternal Abaseen river.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-5 sm:space-x-6 animate-on-scroll opacity-0">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                aria-label={social.label}
                className="text-muted-foreground hover:text-primary transition"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="p-2 bg-card rounded-lg border border-border/50 text-muted-foreground hover:text-white hover:bg-gradient-primary transition hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
