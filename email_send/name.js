const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://srivastavaji529:OMQdGaPhCokqrSOz@cluster0.sqbwl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

const EventSchema = new mongoose.Schema({ name: String });
const Event = mongoose.model('Event', EventSchema, 'events'); // Collection name is 'events'

async function fetchNames() {
    try {
        const data = await Event.find({}, { _id: 0, name: 1 }).lean();
        const nameList = data.map(item => item.name); // Extract name values
        console.log(JSON.stringify(nameList, null, 2)); // Pretty print the result
    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        mongoose.connection.close(); // Close connection
    }
}

fetchNames();
