import React from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import TrueFocus from '../Animations/TrueFocus'; // Adjust the path if needed

const Contact = () => {
  return (
    <section className="py-20 min-h-screen overflow-hidden w-screen relative" id="contact">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#FFC247]">
        <div className="absolute inset-0 opacity-10 action-lines"></div>
        <div className="absolute inset-0 opacity-5 halftone"></div>
      </div>

      <div className="container mx-auto px-0 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          {/* Replace the static text with the animated TrueFocus component */}
          <TrueFocus
            sentence="Get in Touch"
            borderColor="#ff1f53"
            glowColor="rgba(255, 31, 83, 0.6)"
            animationDuration={0.5}
            pauseBetweenAnimations={0.5}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="Group 2962 (1).png" 
              alt="Colorful 3D illustration" 
              className="w-full max-w-md h-auto object-contain transform -translate-x-4  md:scale-[2]"
            />
          </div>

          <motion.form 
            className="space-y-6 px-8"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <div className="relative group">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-[#FFE0E0] text-white placeholder-white/50 focus:outline-none focus:border-[#ff1f53] shadow-comic transform group-hover:-rotate-1 transition-transform shadow-[4px_4px_0_#000]"
              />
            </div>
            <div className="relative group">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-[#FFE0E0] text-white placeholder-white/50 focus:outline-none focus:border-[#ff1f53] shadow-comic transform group-hover:-rotate-1 transition-transform shadow-[4px_4px_0_#000]"
              />
            </div>
            <div className="relative group">
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-[#FFE0E0] text-white placeholder-white/50 focus:outline-none focus:border-[#ff1f53] shadow-comic transform group-hover:-rotate-1 transition-transform shadow-[4px_4px_0_#000]"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-4 bg-[#ff1f53] text-white rounded-xl shadow-comic font-comic text-lg flex items-center justify-center space-x-2 relative overflow-hidden group shadow-[4px_4px_0_#000] border-l-10 border-l-[#FFE0E0]"
            >
              <span className="relative z-10 flex items-center">
                Send Message
                <Send className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-[#ffc247]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export { Contact };
