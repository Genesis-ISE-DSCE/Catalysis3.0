const mongoos = require("mongoose");

// events available
const events = [
  "Coding Relay (Team Event)",
  "DSA SmackDown",
  "Technoseek (Team Event)",
  "TypeMaster",
  "Code Red (Team Event)",
  "UI/UX Design",
];

const engineering_departments = [
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
];

// database schema
const eventSchema = new mongoos.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    usn: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    semester: {
      type: Number,
      enum: [1, 2, 3, 4, 5, 6, 7, 8],
      required: true,
    },
    branch: {
      type: String,
      enum: engineering_departments,
      required: true,
    },
    event: {
      type: [String],
      enum: events,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoos.model("Event", eventSchema);
