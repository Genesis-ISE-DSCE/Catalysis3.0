import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { Calendar, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    { to: "about", label: "About" },
    { to: "events", label: "Events" },
    { to: "schedule", label: "Schedule" },
    { to: "sponsors", label: "Sponsors" },
    { to: "contact", label: "Contact" }
  ];

  return (
    <motion.nav
      className="fixed w-full top-0 z-60 transition-all duration-300 py-2 mb-5"
      initial={{ y: 0 }}
      animate={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        boxShadow: scrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <motion.div className="flex items-center space-x-2 w-1/4" whileHover={{ scale: 1.05 }}>
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-[#2606AA] rounded-full transform rotate-45"></div>
              <Calendar className="w-8 h-8 text-white relative z-10" />
            </div>
            <span className="text-2xl font-comic text-[#2606AA]">CATALYSIS</span>
          </motion.div>

          {/* Centered Navigation Items */}
          <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className="text-[#2606AA] hover:text-[#ff1f53] font-medium relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff1f53] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Register Button */}
          <div className="hidden md:flex items-center justify-end w-1/4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-[#2606AA] text-white rounded-lg font-bold shadow-comic flex items-center"
              onClick={() => (window.location.href = "/register")}
            >
              Register <ChevronRight className="w-4 h-4 ml-1" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#2606AA] p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
              <div className="flex flex-col space-y-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-[#2606AA]/10">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    className="text-[#2606AA] hover:text-[#ff1f53] font-medium px-4 py-2 rounded-lg hover:bg-[#2606AA]/5 cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  className="w-full px-4 py-2 bg-[#2606AA] text-white rounded-lg font-bold shadow-comic"
                  onClick={() => (window.location.href = "/register")}
                >
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
