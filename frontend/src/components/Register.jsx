import { useState } from "react";
import { motion } from "framer-motion";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    sem: "",
    branch: "",
    usn: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `✅ Registration Successful!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEvent: ${formData.event}\nUSN: ${formData.usn}\nSemester: ${formData.sem}\nBranch: ${formData.branch}`
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      event: "",
      sem: "",
      branch: "",
      usn: "",
    });
  };

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen p-4 mt-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.form
        className="bg-white p-4 md:p-6 rounded-2xl shadow-xl w-full max-w-lg border-4 border-[#FF1F53]"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#FF1F53] mb-4">
          Registration Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[#FF1F53] font-semibold text-sm md:text-base">
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
            <label className="block text-[#FF1F53] font-semibold text-sm md:text-base">
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
            <label className="block text-[#FF1F53] font-semibold text-sm md:text-base">
              Phone Number:
            </label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone No."
              className="w-full p-2 md:p-3 border-2 border-[#FF1F53] rounded-lg text-sm md:text-base"
              required
            />
          </div>
          <div>
            <label className="block text-[#FF1F53] font-semibold text-sm md:text-base">
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
          <label className="block text-[#FF1F53] font-semibold text-sm md:text-base">
            Event Name:
          </label>
          <select
            name="event"
            value={formData.event}
            onChange={handleChange}
            className="w-full p-2 md:p-3 border-2 border-[#FF1F53] rounded-lg text-sm md:text-base"
            required
          >
            <option value="" disabled>
              Select Event
            </option>
            <option value="Typemaster">Typemaster</option>
            <option value="TechnicalQuiz"> Quiz (Team Event)</option>
            <option value="DSASmackDown">DSA SmackDown</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Valorant"> Valorant (Team Event)</option>
            <option value="CodingRelayRace">
              Coding Relay Race (Team Event)
            </option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-[#FF1F53] font-semibold text-sm md:text-base">
              Semester:
            </label>
            <select
              name="sem"
              value={formData.sem}
              onChange={handleChange}
              className="w-full p-2 md:p-3 border-2 border-[#FF1F53] rounded-lg text-sm md:text-base"
              required
            >
              <option value="" disabled>
                Select Semester
              </option>
              {[...Array(8)].map((_, i) => (
                <option key={i} value={i + 1}>
                  Semester {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[#FF1F53] font-semibold text-sm md:text-base">
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
                "AI and ML",
                "Aeronautical",
                "Automobile",
                "Biotechnology",
                "Computer Science",
                "Computer Science and Data Science",
                "Cyber Security",
                "Computer Science and Business System",
                "Computer Science and Design",
                "Chemical",
                "Civil Engineering",
                "Electronics and Communication",
                "Electrical and Electronics",
                "Electronics and Instrumentation",
                "Electronics and Telecommunication",
                "Information Science",
                "Mechanical",
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
          className="w-full mt-6 bg-[#FF1F53] text-white py-2 rounded-lg font-semibold hover:bg-[#D91642] transition duration-300"
          type="submit"
        >
          Register
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export {Register};