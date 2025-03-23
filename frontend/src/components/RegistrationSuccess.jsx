import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const RegistrationSuccess = ({ name, events, onClose }) => {
  return (
    <div className="fixed inset-0 backdrop-blur-md z-50 mt-12 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="bg-white/90 p-8 rounded-xl shadow-2xl text-center max-w-md m-4 border-2 border-[#FF1F53] max-h-[60vh] lg:max-h-[80vh] overflow-y-auto"
      >
        <div className="mb-6 flex justify-center">
          {/* Success icon/animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
          </motion.div>
        </div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-3xl font-comic font-bold text-[#FF1F53] mb-4"
        >
          Registration Complete!
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-xl font-comic mb-2">
            Thanks, <span className="font-bold">{name}</span>!
          <p className="text-gray-600">
            You&apos;ve successfully registered for:
          </p>
          </p>
          <ul className="bg-gray-50 rounded-lg p-4 text-left">
            {events.map((event, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                className="flex items-center font-comic text-[#2606AA] mb-2"
              >
                <span className="mr-2">🤖</span> {event}
              </motion.li>
            ))}
          </ul>
          <p className="text-gray-600 mb-6">
            A confirmation email has been sent to your email address with all the details.
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="w-full bg-[#FF1F53] font-comic text-white py-3 rounded-lg font-bold hover:bg-[#D91642] transition duration-300"
          onClick={onClose}
        >
          Done
        </motion.button>
      </motion.div>
    </div>
  );
};

RegistrationSuccess.propTypes = {
  name: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired
};

export default RegistrationSuccess;
