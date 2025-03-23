import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Star, Users } from 'lucide-react';
import "typeface-comic-neue";

export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2, 
  });

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-[#00237A]" />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge tech challenges",
      bgColor: "bg-[#FF1F53]",
    },
    {
      icon: <Star className="w-8 h-8 text-[#00237A]" />,
      title: "Excellence",
      description: "Showcasing the best technical talent",
      bgColor: "bg-[#7B5CF7]",
    },
    {
      icon: <Users className="w-8 h-8 text-[#00237A]" />,
      title: "Community",
      description: "Building connections in tech community",
      bgColor: "bg-[#00D37C]",
    },
  ];

  return (
    <div ref={ref} className="min-h-screen py-12 h-auto relative overflow-hidden" id="about">
      <img
        src="/images/books.svg"
        alt="Books"
        className="absolute left-0 bottom-2 w-32 md:w-44 transform transition-transform duration-200 hover:scale-110"
      />

      <div className="container h-auto mx-auto px-4 relative z-50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-14 relative">
            <h2 className="text-5xl font-comic text-[#ffffff] mb-8">
              ABOUT US
            </h2>
            <p className="text-[#ffffff] text-xl font-comic-neue leading-relaxed">
              Catalysis is an inter-department, extravagant 2-days tech fest, 
              hosted by the ISE Department of Dayananda Sagar College of Engineering (DSCE), Bangalore. 
              Catalysis aims to bring out the technical aspects in students by incorporating tech in 
              various events going to be held through the whole of the fest. Through this event, we seek to 
              help students demonstrate how technology integrates with other fields to help solve real-world problems 
              and provide students with a platform to develop and showcase their tech skills.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group flex flex-col"
              >
                <div className={`absolute inset-0 ${feature.bgColor} rounded-xl transform rotate-3`}></div>
                <div className={`relative ${feature.bgColor} p-8 rounded-xl backdrop-blur-sm border-4 border-[#ffffff] transform group-hover:-rotate-2 transition-transform duration-300 flex-grow flex flex-col justify-between`}>
                  <div className="w-16 h-16 bg-[#ffffff] rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-comic text-[#ffffff] text-center mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#ffffff] font-comic-neue text-lg text-center">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <img
        src="/images/pc.svg"
        alt="PC"
        className="absolute right-0 bottom-0 w-16 md:w-30 transform transition-transform duration-200 hover:scale-110"
      />
    </div>
  );
};
