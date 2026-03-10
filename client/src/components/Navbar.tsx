import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Wifi } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Internet Packages" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
              <Wifi className="w-6 h-6" />
            </div>
            <span className={`text-2xl font-bold font-display tracking-tight ${isScrolled ? 'text-primary' : 'text-primary md:text-white'}`}>
              Mosaynet<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`font-semibold text-sm transition-colors hover:text-accent ${
                  location === link.href 
                    ? 'text-accent' 
                    : isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-accent py-2 px-5 text-sm">
              Get Connected
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-foreground' : 'text-primary'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl md:hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`p-4 rounded-xl font-bold text-lg ${
                    location === link.href ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary mt-4 w-full">
                Get Connected Today
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
