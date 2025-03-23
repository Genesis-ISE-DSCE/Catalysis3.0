import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import RegistrationSuccess from "./RegistrationSuccess";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: [],
    semester: "",
    branch: "",
    usn: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [registeredData, setRegisteredData] = useState({
    name: '',
    events: []
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }
    if (!formData.phone || formData.phone.length !== 10 || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }
    if (!formData.usn || !/^[0-9A-Za-z]{10}$/.test(formData.usn)) {
      newErrors.usn = "Invalid USN";
    }
    if (!formData.semester) newErrors.semester = "Semester is required";
    if (!formData.branch) newErrors.branch = "Branch is required";
    if (formData.event.length === 0) newErrors.event = "At least one event must be selected";

    setErrors(newErrors);

    if (!isValid) {
      toast.error("Phone number or Email is not valid!");
    }

    return isValid;
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "event") {
      setFormData((prevData) => ({
        ...prevData,
        event: checked
          ? [...prevData.event, value]
          : prevData.event.filter((event) => event !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      console.log("Form validation failed:", errors);
      return;
    }
  
    console.log("Submitting form data:", formData);
    
    // Set loading state to true when form submission starts
    setIsLoading(true);
  
    try {
      const response = await axios.post("https://catalysis.up.railway.app/register", formData);
  
      console.log("Response received:", response);
  
      if (response.status === 201) {
        // Save registered data for success screen
        setRegisteredData({
          name: formData.name,
          events: formData.event
        });
        
        // Show success screen instead of toast
        setShowSuccess(true);
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          event: [],
          semester: "",
          branch: "",
          usn: "",
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      console.log("Error response:", error.response);
      toast.error(error.response?.data?.error || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };
  
  // Comic-style loading animation component with blur background
  const ComicLoadingAnimation = () => (
    <div className="fixed inset-0 backdrop-blur-md z-50 flex items-center justify-center flex-col">
      <div className="bg-white/90 p-4 md:p-8 rounded-xl shadow-2xl text-center max-w-xs md:max-w-md border-2 border-[#FF1F53]">
        <div className="mb-6 relative">
          {/* Comic-style burst */}
          <motion.div 
            className="absolute inset-0 bg-yellow-400 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          
          <div className="relative">            
            <motion.div 
              className="text-4xl md:text-6xl font-comic font-bold text-[#2606AA] z-10 relative"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              POW!
            </motion.div>
          </div>
        </div>
        
        <h3 className="text-xl md:text-2xl font-comic text-[#FF1F53] font-bold mb-3">
          Registering you for Catalysis v3...
        </h3>
        
        <div className="flex justify-center space-x-2 my-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#FF1F53]"
              animate={{ 
                y: ["0%", "-100%", "0%"],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 0.8, 
                repeat: Infinity, 
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <p className="text-sm md:text-base text-gray-600 mt-2 font-comic">
          Your superhero registration is being processed and a personalised mail is being sent to you!
        </p>
      </div>
    </div>
  );
  
  return (
    <motion.div
      className="flex justify-center items-center min-h-screen p-8 overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Comic-style Loading Animation */}
      {isLoading && <ComicLoadingAnimation />}
      
      {/* Success Component */}
      {showSuccess && 
        <RegistrationSuccess 
          name={registeredData.name} 
          events={registeredData.events} 
          onClose={handleCloseSuccess} 
        />
      }

      <motion.form
        className="bg-white p-4 md:p-6 mt-20 rounded-2xl shadow-xl w-full max-w-4xl border-4 border-[#FF1F53]"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-comic md:text-3xl font-bold text-center text-[#FF1F53] mb-4">
          Registration Form
        </h2>

        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[#FF1F53] font-comic font-semibold text-sm md:text-base">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 md:p-3 border-2 border-[#FF1F53] rounded-lg text-sm md:text-base"
              required
            />
          </div>
          <div>
            <label className="block text-[#FF1F53] font-comic font-semibold text-sm md:text-base">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-2 md:p-3 border-2 border-[#FF1F53] rounded-lg text-sm md:text-base"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-[#FF1F53] font-comic font-semibold text-sm md:text-base">
              Phone Number:
            </label>
            <input
              type="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone No."
              className="w-full p-2 md:p-3 border-2 border-[#FF1F53] rounded-lg text-sm md:text-base"
              required
            />
          </div>
          <div>
            <label className="block text-[#FF1F53] font-comic font-semibold text-sm md:text-base">
              USN:
            </label>
            <input
              type="text"
              name="usn"
              value={formData.usn}
              onChange={handleChange}
              placeholder="Your USN"
              className="w-full p-2 md:p-3 border-2 border-[#FF1F53] rounded-lg text-sm md:text-base"
              required
            />
          </div>
        </div>

        <div className="mt-4"></div>
          <label className="block text-[#FF1F53] font-comic font-semibold text-sm md:text-base">
            Event Name:
          </label>
          <div className="grid grid-cols-1 font-comic text-[#2606AA] md:grid-cols-2 gap-2">
            {[
              "Coding Relay (Team Event)",
              "DSA SmackDown",
              "Technoseek (Team Event)",
              "TypeMaster",
              "Code Red (Team Event)",
              "UI/UX Design",
            ].map((event) => (
              <label key={event} className="flex items-center">
                <input
                  type="checkbox"
                  name="event"
                  value={event}
                  checked={formData.event.includes(event)}
                  onChange={handleChange}
                  className="mr-2"
                />
                {event}
              </label>
            ))}
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-[#FF1F53] font-comic font-semibold text-sm md:text-base">
              Semester:
            </label>
            <select
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className="w-full p-2 md:p-3 border-2 border-[#FF1F53] rounded-lg text-sm md:text-base"
              required
            >
              <option value="" disabled>
                Select Semester
              </option>
              {[...Array(8)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[#FF1F53] font-comic font-semibold text-sm md:text-base">
              Branch:
            </label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full p-2 md:p-3 border-2 border-[#FF1F53] rounded-lg text-sm md:text-base"
              required
            >
              <option value="" disabled>
                Select Branch
              </option>
              {[
                "Aeronautical Engineering",
                "Automobile Engineering",
                "Biotechnology",
                "Chemical Engineering",
                "Civil Engineering",
                "Electrical & Electronics Engineering",
                "Electronics & Communication Engineering",
                "Electronics & Instrumentation Engineering",
                "Mechanical Engineering",
                "Medical Electronics Engineering",
                "Electronics & Telecommunication Engineering",
                "Artificial Intelligence & Machine Learning",
                "Information Science & Engineering",
                "Master of Business Administration",
                "Master of Computer Applications",
                "Mathematics Department",
                "Physics Department",
                "Chemistry Department",
                "Computer Science and Engineering",
                "Computer Science and Business Systems",
                "Computer Science Engineering (Cyber Security)",
                "Computer Science Engineering (Data Science)",
                "Computer Science and Design",
                "Others",
              ].map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="w-full mt-6 bg-[#FF1F53] font-comic text-white py-2 rounded-lg font-semibold hover:bg-[#D91642] transition duration-300"
          type="submit"
        >
          Register
        </motion.button>
        <ToastContainer position="top-center" />
      </motion.form>
    </motion.div>
  );
};

export { Register };