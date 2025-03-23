import { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  const navItems = [
    { to: "about", label: "About" },
    { to: "events", label: "Events" },
    { to: "schedule", label: "Schedule" },
    { to: "faqs", label: "FAQs" }, // Ensure the section with id="faqs" exists in the target page
    { to: null, label: "Brochure", pdfPath: "/pdfs/brochure.pdf" },
    { to: null, label: "Rulebook", pdfPath: "/pdfs/Rulebook.pdf" }
  ];

  // Function to handle navigation and scrolling
  const handleNavClick = (to, pdfPath) => {
    if (pdfPath) {
      window.open(pdfPath, '_blank'); // Open the PDF in a new tab
    } else if (isHome) {
      scroller.scrollTo(to, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    } else {
      navigate(`/#${to}`);
      setTimeout(() => {
        scroller.scrollTo(to, {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }, 100);
    }
  };

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
          <motion.div
            className="flex items-center space-x-2 w-1/4 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/")}
          >
            <img src="/favicon-1.png" alt="Logo" className="w-8 h-8" />
            <span className="text-2xl font-comic text-[#2606AA]">CATALYSIS</span>
          </motion.div>

          {/* Centered Navigation Items */}
          <div className="hidden md:flex font-comic items-center justify-center lg:space-x-8 md:space-x-3 p-1 flex-1">
            {navItems.map((item) => (
              <button
                onClick={() => handleNavClick(item.to, item.pdfPath)}
                key={item.to || item.label}
                className="text-[#2606AA] hover:text-[#ff1f53] lg:text-lg text-md relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff1f53] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Register Button */}
          <div className="hidden md:flex items-center justify-end w-1/4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-[#2606AA] text-white rounded-lg font-comic font-bold shadow-comic flex items-center"
              onClick={() => navigate("/register")}
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
                  <button
                    key={item.to || item.label}
                    onClick={() => {
                      handleNavClick(item.to, item.pdfPath);
                      setIsMenuOpen(false);
                    }}
                    className="text-[#2606AA] hover:text-[#ff1f53] font-medium px-4 py-2 rounded-lg hover:bg-[#2606AA]/5 cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  className="w-full px-4 py-2 bg-[#2606AA] text-white rounded-lg font-bold shadow-comic"
                  onClick={() => navigate("/register")}
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
