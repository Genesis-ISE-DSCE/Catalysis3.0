import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircleQuestion, ChevronDown, ChevronUp, Zap } from 'lucide-react';

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqs = [
    {
      question: "WHEN? WHERE? HOW?",
      answer: "March 7th & 8th, 2025! Join us at ISE Department for this legendary showdown! 🚀"
    },
    {
      question: "KA-CHING! What's the registration fee and how do I register?",
      answer: "Early bird heroes get special powers (discounts)! Check our registration page, fill in the deets, and you're all set! 💰🚀"
    },
    {
      question: "BOOM! Can non-IT students join the action?",
      answer: "Absolutely! The technical fest welcomes tech enthusiasts from all branches to unleash their skills! 🎉"
    },
    {
      question: "WHAT'S ON THE MENU? (Events & Competitions)",
      answer: "Brace yourself for epic hackathons, coding duels, Tech Treasure Hunts, quizzes, and more! 🤖💻"
    },
    {
      question: "ZAP! Prizes for the brave?",
      answer: "You bet! Winners walk away with prizes, glory, and ultimate bragging rights! 🏆"
    }
  ];

  const accordionVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          type: "spring",
          stiffness: 100,
          damping: 15
        },
        opacity: { duration: 0.2 }
      }
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.2 },
        opacity: { duration: 0.1 }
      }
    }
  };

  return (
    <div className="relative w-full max-w-[100vw] mx-auto py-10 bg-[#FFC247] overflow-hidden">
      <div className="container mx-auto px-4 relative flex flex-col lg:flex-row items-center justify-between gap-8">
        
        <div className="w-full lg:w-[60%] space-y-6 z-10"> 
          <motion.div 
            className="relative mb-16"
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <span className="inline-block bg-[#ff1f53] text-white px-6 py-2 rounded-full text-lg mb-4 font-bold">
              Got Questions?
            </span>
            <h2 className="text-7xl font-comic text-[#421AE8]"> 
              Frequently Asked Questions
            </h2>
          </motion.div>

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-[#ffc247] transform rotate-1 rounded-xl"></div>
              <div className="relative bg-white rounded-xl border-4 border-black overflow-hidden shadow-comic">
                <button
                  className="w-full p-6 text-left flex items-center gap-4 bg-white"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <MessageCircleQuestion className="w-8 h-8 text-[#ff1f53] flex-shrink-0" />
                  <span className="font-comic text-xl text-[#00237a] flex-grow">
                    {faq.question}
                  </span>
                  {activeIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[#ff1f53]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#ff1f53]" />
                  )}
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      variants={accordionVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t-2 border-dashed border-gray-200">
                        <div className="flex items-start gap-2 pt-4">
                          <Zap className="w-6 h-6 text-[#ffc247] flex-shrink-0 mt-1" />
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

      
        
      <motion.div
      className="w-full lg:w-[40%] lg:mt-0 mt-8 relative z-0 hidden lg:block"
      whileHover={{ scale: 1.1, rotate:2 }} 
      initial={{ opacity: 0, scale: 0.9, y: 50 }} 
      animate={{ opacity: 1, scale: 1, y: 0 }} 
      exit={{ opacity: 0, scale: 0.9, y: 50 }} 
      transition={{ duration: 0.5, ease: "easeInOut" }} 
    >
      <img
        src="/images/Group 2960.svg"
        alt="FAQ Illustration"
        className="w-full h-auto opacity-50 lg:opacity-100 transition-opacity duration-300"
      />
    </motion.div> 

       
        <motion.div
          className="absolute inset-0 w-full h-full opacity-20 z-0 lg:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
        >
          <img
            src="/images/Group 2960.svg"
            alt="FAQ Illustration Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};



