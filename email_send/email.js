const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://srivastavaji529:OMQdGaPhCokqrSOz@cluster0.sqbwl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

const EventSchema = new mongoose.Schema({ email: String });
const Event = mongoose.model('Event', EventSchema, 'events'); // Collection name is 'events'

async function fetchEmails() {
    try {
        const emails = await Event.find({}, { _id: 0, email: 1 }).lean();
        console.log(JSON.stringify(emails.map(e => e.email), null, 2)); // Extracting only email
    } catch (error) {
        console.error("Error fetching emails:", error);
    } finally {
        mongoose.connection.close(); // Close connection
    }
}

fetchEmails();
