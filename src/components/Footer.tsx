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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import aimsLogo from '@/assets/Footer-Logo.png';

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
                el.classList.remove("opacity-0");
                el.classList.add("animate-slide-up");
              }, index * 100);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "Home", action: () => scrollToSection("hero") },
    { name: "Mission & Vision", action: () => scrollToSection("mission") },
    { name: "Our Objectives", action: () => scrollToSection("objectives") },
    { name: "Projects", action: () => scrollToSection("projects") },
    { name: "Our Impact", action: () => scrollToSection("achievements") },
    { name: "Get Involved", action: () => scrollToSection("cta") },
  ];

  return (
    <footer id="footer" ref={footerRef} className="bg-muted/50 pt-20 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-2 animate-on-scroll opacity-0">
            <div className="flex items-center space-x-3 mb-6">
                  <img src={aimsLogo} alt="AIMS Middle East Logo" className="h-12 hover:scale-105 transition-transform duration-300" />
              
            </div>
            <p className="paragraph-text text-muted-foreground mb-6 leading-relaxed max-w-md">
              Like the flowing waters of the Abaseen river, we bring life, hope,
              and healing to communities across the Middle East. Our mission is
              to transform healthcare delivery through innovation, compassion,
              and excellence.
            </p>

            {/* Mission Statement */}
            <div className="bg-card p-6 rounded-xl border border-border/50 shadow-card">
              <div className="flex items-center space-x-3 mb-3">
                <Heart className="w-5 h-5 text-primary" />
                <span
                  className="font-semibold gradient-text"
                  style={{ fontFamily: "Gotham HTF" }}
                >
                  Our Promise
                </span>
              </div>
              <p className="paragraph-text text-sm text-muted-foreground">
                Comprehensive, affordable, and accessible diabetes healthcare
                for all. Building healthier communities, one patient at a time.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-on-scroll opacity-0">
            <h3
              className="text-lg font-bold gradient-text mb-6"
              style={{ fontFamily: "Gotham HTF" }}
            >
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={link.action}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-2 transform"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-on-scroll opacity-0">
            <h3
              className="text-lg font-bold gradient-text mb-6"
              style={{ fontFamily: "Gotham HTF" }}
            >
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-primary mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="paragraph-text text-sm text-muted-foreground">
                    Peshawar, Khyber Pakhtunkhwa
                    <br />
                    Pakistan
                  </p>
                </div>
              </div>

              <a
                href="mailto:info@aimsmiddleeast.org"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">info@aimsmiddleeast.org</span>
              </a>

              <a
                href="tel:+92000000000"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">+92 (000) 000-0000</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4
                className="font-semibold text-foreground mb-4"
                style={{ fontFamily: "Gotham HTF" }}
              >
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 bg-card rounded-xl border border-border/50 text-muted-foreground hover:text-white hover:bg-gradient-primary transition-all duration-300 hover:scale-110 hover:shadow-glow group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="animate-on-scroll opacity-0 mb-12">
          <div className="bg-gradient-primary/5 p-8 lg:p-12 rounded-2xl border border-primary/10 text-center">
            <h3
              className="text-2xl font-bold gradient-text mb-4"
              style={{ fontFamily: "Gotham HTF" }}
            >
              Stay Connected
            </h3>
            <p className="paragraph-text text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for updates on our projects, research
              breakthroughs, and ways to get involved in transforming
              healthcare.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              />
              <Button variant="gradient" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="animate-on-scroll opacity-0">
              <p className="paragraph-text text-sm text-muted-foreground">
                © 2024 AIMS Middle East. All Rights Reserved.
              </p>
              <p className="paragraph-text text-xs text-muted-foreground mt-1">
                Flowing care to those in need, like the eternal Abaseen river.
              </p>
            </div>

            <div className="flex items-center space-x-6 animate-on-scroll opacity-0">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </a>
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
