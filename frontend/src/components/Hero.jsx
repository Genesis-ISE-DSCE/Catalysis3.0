import { ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import '@fontsource/staatliches';
const Chem = "/images/chem.png";
const Game = "/images/game.png";


const calculateTimeLeft = () => {
  const eventDate = new Date("March 28, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = eventDate - now;

  if (difference < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
};

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden py-24 px-0 font-comic ">
      <div className=" z-10 container mx-auto py-2">
        <div className="text-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center md:p-4"
          >
            <p className="text-md md:text-xl font-bold text-white rounded-full bg-[#ffcc66] px-4 py-2 font-comic-neue inline-block">
              March 28-29, 2025
            </p>
          </motion.div>


          <motion.div
            className="absolute bottom-3 left-0"
            animate={{
              rotate: [0, 5, -5, 0],
              y: [0, -10, 0]
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <img
              src={Chem}
              alt="Chemistry"
              className="drop-shadow-lg w-30 h-50 sm:w-50 sm:h-70 xl:w-80 xl:h-120 md:w-55 md:h-80 
               transform transition-transform duration-500 hover:scale-110 hover:rotate-3"
            />
          </motion.div>

          <motion.div
            className="absolute right-0 top-8"
            animate={{
              rotate: [0, -5, 5, 0],
              y: [0, 10, 0]
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <img
              src={Game}
              alt="Game"
              className="drop-shadow-lg w-32 h-30 sm:w-48 sm:h-48 xl:w-86 xl:h-86 md:w-54 md:h-50 mt-12
               transform transition-transform duration-500 hover:scale-110 hover:-rotate-3"
            />
          </motion.div>





          {/* this is excite image, add this above the Catalysis text */}

          {/* <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-3 xl:block 2xl:block block lg:hidden md:hidden sm:hidden"
          >
            <motion.img
              src={Excite}
              alt="Excite"
              className="absolute xl:top-14 top-24 left-4 xl:left-84  transform rotate-0 w-16 h-16 xl:w-44 xl:h-44"
           </h1> />
          </motion.div> */}


          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="inline-block mb-3 relative"
          >
            <div className="relative text-center">
              <h1 className="text-[#ff1f53] mt-5 sm:text-8xl text-7xl md:text-[8rem] font-stat font-bold relative tracking-wide">
                {Array.from("CATALYSIS").map((letter, index) => (
                  <span key={index} className="relative inline-block mx-0.5">
                    <span className="absolute md:top-[7px] top-[4px] right-[7px] text-black">
                      {letter}
                    </span>
                    <span className="relative text-[#ff1f53]">{letter}</span>
                  </span>
                ))}
              </h1>

              {/* Adding V2.0 in a stylish way */}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute text-white text-sm sm:text-md md:text-2xl lg:text-2xl right-[-20px] sm:right-[-30px] md:right-[-40px] lg:right-[-40px] bottom-0 transform rotate-[-10deg] bg-[#2606AA] px-2 sm:px-3 py-1 rounded-xl shadow-md"
              >
                V3.0
              </motion.span>
            </div>
          </motion.div>


          <motion.p
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl text-[#FFF2F2] mb-16 max-w-3xl mx-auto font-comic"
          >
            The Ultimate Technical Showdown by Genesis Club
            <br />
            <span className="text-[#2606AA]">ISE Department</span>
          </motion.p>


          <div className="mb-14 flex flex-wrap space-x-4 justify-center text-white text-2xl sm:text-3xl">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center mb-4">
                <motion.div
                  className="bg-[#ff1f53] px-4 py-3 sm:px-5 sm:py-4 font-comic-neue rounded-xl border-4 border-black shadow-comic text-center w-16 h-16 sm:w-20 sm:h-20 relative overflow-hidden"
                  style={{ transform: 'rotate(-2deg)' }}
                >
                  <span className="relative z-10 block text-3xl sm:text-4xl font-bold">{value}</span>
                  <motion.div
                    className="absolute inset-0 bg-[#ffc247]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  />
                </motion.div>
                <span className="mt-2 font-comic-neue z-10 uppercase text-xs sm:text-sm font-bold">{unit}</span>
              </div>
            ))}
          </div>


          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-[#ff1f53] text-white rounded-xl border-4 border-black shadow-comic text-lg sm:text-xl font-comic flex items-center group relative overflow-hidden"
              onClick={() => (window.location.href = "/register")}
            >
              <span className="relative z-10 flex items-center">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                REGISTER NOW!
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-[#ffc247]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
            </motion.button>

          </div>
        </div>
      </div>
    </div>
  );
};
