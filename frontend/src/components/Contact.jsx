import { Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import TrueFocus from '../Animations/TrueFocus'; // Adjust the path if needed
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {

  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('https://catalysis.up.railway.app/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          toast.success('Message sent successfully!'); // Use toast for success
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        } else {
          toast.error('Failed to send message.'); // Use toast for error
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('An error occurred while sending the message.'); // Use toast for catch block
      }
    };
  
  return (
    <section className="py-20 min-h-screen overflow-hidden w-full relative" id="contact">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#FFC247]">
        <div className="absolute inset-0 opacity-10 action-lines"></div>
        <div className="absolute inset-0 opacity-5 halftone"></div>
      </div>

      <div className="container mx-auto px-0">
        <motion.div
          className="text-center mt-4 mb-20"
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

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 md:mt-42 mt-12 max-w-8xl mx-auto">
          
          <motion.div
            className="w-full lg:w-[90%] lg:mt-0 mt-8 relative z-0 hidden lg:block"
            whileHover={{ scale: 1.1, rotate: 2 }}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              src="/images/Group 2962.png"
              alt="game"
              className="w-full h-auto opacity-50 lg:opacity-100 transition-opacity duration-300"
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 w-full h-full opacity-20 z-0 lg:hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
          >
            <img
              src="/images/Group 2962.png"
              alt="game"
              className="w-full h-full mt-24 object-cover"
            />
          </motion.div>

          
          <motion.form
            className="space-y-6 px-8"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            onSubmit={handleSubmit}
          >
            <div className="relative group">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-[#FFE0E0] text-[#161616] font-bold placeholder-[#161616] placeholder:font-bold focus:outline-none focus:border-[#ff1f53] shadow-comic transform transition-transform shadow-[4px_4px_0_#000]"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="relative group">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-[#FFE0E0] text-[#161616] font-bold placeholder-[#161616] placeholder:font-bold focus:outline-none focus:border-[#ff1f53] shadow-comic transform transition-transform shadow-[4px_4px_0_#000]"
              />
            </div>
            <div className="relative group">
              <textarea
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-[#FFE0E0] text-[#161616] font-bold placeholder-[#161616] placeholder:font-bold focus:outline-none focus:border-[#ff1f53] shadow-comic transform transition-transform shadow-[4px_4px_0_#000]"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-4 bg-[#ff1f53] text-white rounded-xl shadow-comic font-comic text-lg flex items-center justify-center space-x-2 relative overflow-hidden group shadow-[4px_4px_0_#000] border-l-[#FFE0E0]"
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
              ></motion.div>
          </motion.button>
          </motion.form>
        </div>
      </div>
      {/* Add ToastContainer to display notifications */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export { Contact };
