const mongoose = require('mongoose');
const Registration = require('../model/event');

// Connect to MongoDB
mongoose.connect('mongodb+srv://dhruv:12345@cluster0.qslxm.mongodb.net/')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const events = [
  "DSASmackDown",
  "UI/UXDesign",
  "Technoseek",
  "CodeRelay",
  "TypeMaster"
];

const branches = [
  "Computer Science and Engineering",
  "Information Science & Engineering",
  "Electronics & Communication Engineering",
  "Artificial Intelligence & Machine Learning"
];

// Generate random data
function generateRandomRegistration(index) {
  const randomEvents = events
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.floor(Math.random() * 2) + 1); // Random 1-2 events

  return {
    name: `Test Student ${index}`,
    usn: `1DS23IS${String(index).padStart(3, '0')}`,
    phone: `98765${String(Math.floor(Math.random() * 100000)).padStart(5, '0')}`,
    email: `student${index}@test.com`,
    semester: Math.floor(Math.random() * 8) + 1,
    branch: branches[Math.floor(Math.random() * branches.length)],
    event: randomEvents
  };
}

async function seedDatabase() {
  try {
    // Clear existing data
    await Registration.deleteMany({});
    console.log('Cleared existing data');

    // Generate 50 test registrations
    const registrations = Array.from({ length: 50 }, (_, i) => 
      generateRandomRegistration(i + 1)
    );

    // Insert the data
    await Registration.insertMany(registrations);
    console.log('Successfully seeded database with 50 registrations');

    // Display some statistics
    const eventCounts = {};
    events.forEach(event => {
      eventCounts[event] = registrations.filter(r => r.event.includes(event)).length;
    });
    console.log('\nRegistrations per event:');
    console.table(eventCounts);

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();
