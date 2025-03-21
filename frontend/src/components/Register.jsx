import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import axios from "axios";

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
  
    try {
      const response = await axios.post("http://localhost:8080/register", formData);
  
      console.log("Response received:", response);
  
      if (response.status === 201) {
        toast.success("Registration successful!");
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
    }
  };
  
  return (
    <motion.div
      className="flex justify-center items-center min-h-screen p-8 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
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

        <div className="mt-4">
          <label className="block text-[#FF1F53] font-comic font-semibold text-sm md:text-base">
            Event Name:
          </label>
          <div className="grid grid-cols-1 font-comic text-[#2606AA] md:grid-cols-2 gap-2">
            {[
              "Coding Relay (Team Event)",
              "DSA SmackDown",
              "Technoseek (Team Event)",
              "TypeMaster",
              "UI/UX Design (Team Event)",
              "Valorant",
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