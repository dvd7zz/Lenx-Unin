import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", to: "home" },
  { name: "About Me", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Blog", to: "blog" },
  { name: "Playlist", to: "playlist" },
  { name: "Social Media", to: "social" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer text-2xl font-bold font-display tracking-tighter hover:text-primary transition-colors"
        >
          PORTFOLIO<span className="text-primary">.</span>
        </ScrollLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              activeClass="text-primary font-medium"
              className="text-sm font-medium text-muted-foreground hover:text-white cursor-pointer transition-colors uppercase tracking-wide"
            >
              {item.name}
            </ScrollLink>
          ))}
          <ScrollLink to="contact" smooth={true} duration={500}>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
              Let's Talk
            </Button>
          </ScrollLink>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-primary cursor-pointer py-2 border-b border-white/5 last:border-0"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
