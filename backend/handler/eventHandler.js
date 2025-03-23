const Registration = require('../model/event');
const sendEmail = require('./emailSender');
const path = require('path');

exports.registerForEvent = async (req, res) => {
  try {
    const { name, usn, phone, email, semester, branch, event } = req.body;

    // Check if the user is already registered for the event
    const existingRegistration = await Registration.findOne({ email, event });
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
      event,
    });

    await newRegistration.save();

    // Respond to the client immediately
    res.status(201).json({ message: 'Registration successful!', data: newRegistration });

    // Send confirmation email asynchronously (after response is sent)
    const subject = 'Catalysis v3 Registration Confirmation';

    const text = `Hello ${name},

You have successfully registered for Catalysis v3!

Your registered events: ${event}.

Thank you for joining us! Stay tuned to our Instagram page (@genesis.ise) for further updates and announcements. The event WhatsApp group link will be shared once registration closes.

For any queries, feel free to contact us via this email, our Instagram page or visit the registration desks.

Please check the attached PDFs for Rulebook, Code of Conduct and Terms and Conditions.

Looking forward to an amazing event with you! :)

Team Genesis`;

    const html = `
  <p>Hello ${name},</p>

  <p>You have successfully registered for <strong>Catalysis v3!</strong></p>

  <p><strong>Your registered events:</strong> ${event}.</p>

  <p>Thank you for joining us! We're excited about your enthusiastic participation. Please stay tuned to our Instagram page <a href="https://www.instagram.com/genesis.ise">@genesis.ise</a> for updates and important announcements. The event WhatsApp group link will be shared once registration closes.</p>

  <p>For any event-related queries, feel free to reach out via this email, our Instagram page or visit the registration desks.</p>

  <p><strong>Please check the attached PDFs for rulebook and code of conduct.</strong></p>

  <p>Looking forward to an amazing event with you!</p>

  <p><strong>Team Genesis</strong></p>
`;
    // Fix attachment paths to use path.join for proper cross-platform compatibility
    const attachments = [
      {
        filename: 'Rulebook.pdf',
        path: path.join(__dirname, 'RuleBook_final.pdf')
      },
      {
        filename: 'Code-of-conduct.pdf',
        path: path.join(__dirname, 'Code of Conduct.pdf')
      },
      {
        filename: 'Terms-and-conditions.pdf',
        path: path.join(__dirname, 'Terms and Conditions.pdf')
      }
    ];

    // Send email asynchronously (don't await)
    sendEmail(email, subject, text, html, attachments)
      .then(() => console.log('Email sent successfully with attachments'))
      .catch(emailError => console.error('Failed to send email:', emailError));
      
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