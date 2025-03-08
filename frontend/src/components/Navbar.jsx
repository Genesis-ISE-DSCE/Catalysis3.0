import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#events", label: "Events" },
    { href: "#schedule", label: "Schedule" },
    { href: "#sponsors", label: "Sponsors" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <motion.nav 
      className="fixed w-full top-0 z-50 transition-all duration-300 py-2 mb-5"
      initial={{ y: 0 }}
      animate={{ 
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        boxShadow: scrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-[#0047fa] rounded-full transform rotate-45"></div>
              <Calendar className="w-8 h-8 text-white relative z-10" />
            </div>
            <span className="text-2xl font-comic text-[#0047fa]">CATALYSIS</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-[#0047fa] hover:text-[#ff1f53] font-medium relative group"
                whileHover={{ scale: 1.1 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff1f53] group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-[#0047fa] text-white rounded-lg font-bold shadow-comic flex items-center"
            >
              Register <ChevronRight className="w-4 h-4 ml-1" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#0047fa] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-[#0047fa]/10">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-[#0047fa] hover:text-[#ff1f53] font-medium px-4 py-2 rounded-lg hover:bg-[#0047fa]/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <button className="w-full px-4 py-2 bg-[#0047fa] text-white rounded-lg font-bold shadow-comic">
                  Register Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;