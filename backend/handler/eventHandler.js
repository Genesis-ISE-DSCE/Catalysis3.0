const Registration = require('../model/event');
const sendEmail = require('./emailSender');

exports.registerForEvent = async (req, res) => {
  try {
    const { name, usn, phone, email, semester, branch, events } = req.body;

    // Check if the user is already registered for the event
    const existingRegistration = await Registration.findOne({ email, events });
    if (existingRegistration) {
      return res.status(400).json({ error: 'You are already registered for this event.' });
    }

    // Create a new registration
    const newRegistration = new Registration({
      name,
      usn,
      phone,
      email,
      semester,
      branch,
      events,
    });

    await newRegistration.save();

    // Send confirmation email
    const subject = 'Event Registration Confirmation';
    const text = `Hello ${name},\n\nYou have successfully registered for the event: ${events}.\n\nThank you!`;
    const html = `<p>Hello ${name},</p>
                  <p>You have successfully registered for the event: <strong>${events}</strong>.</p>
                  <p>Thank you!</p>`;

    await sendEmail(email, subject, text, html);

    res.status(201).json({ message: 'Registration successful!', data: newRegistration });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register for the event', details: error.message });
  }
};

exports.getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find({});
    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch registrations', details: error.message });
  }
};