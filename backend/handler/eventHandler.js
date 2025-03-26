const Registration = require('../model/event');
const sendEmail = require('./emailSender');
const path = require('path');

exports.registerForEvent = async (req, res) => {
  try {
    const { name, usn, phone, email, semester, branch, event } = req.body;

    // Validate that event's array should not empty
    if (!event || !Array.isArray(event) || event.length === 0) {
      return res.status(400).json({ 
        error: 'At least one event must be selected' 
      });
    }

    // Normalize data
    const normalizedUSN = usn.toUpperCase().trim();
    const normalizedEmail = email.toLowerCase().trim();

    // Check for existing registration with the same USN or email
    const existingRegistration = await Registration.findOne({
      $or: [{ usn: normalizedUSN }, { email: normalizedEmail }]
    });

    if (existingRegistration) {
      const duplicateField = existingRegistration.usn === normalizedUSN ? 'USN' : 'Email';
      return res.status(400).json({ 
        error: `${duplicateField} is already registered. Please use a different ${duplicateField.toLowerCase()}.` 
      });
    }

    // Create a new registration with normalized values
    const newRegistration = new Registration({
      name: name.trim(),
      usn: normalizedUSN,
      phone: phone.trim(),
      email: normalizedEmail,
      semester,
      branch,
      event,
    });

    await newRegistration.save();

    // Respond to the client immediately
    res.status(201).json({ message: 'Registration successful!', data: newRegistration });

    // Send confirmation email (rest of the code remains the same)
    const subject = 'Catalysis v3 Registration Confirmation';

    const text = `Hello ${name},

You have successfully registered for Catalysis v3!

Your registered events: ${event.join(', ')}.

Thank you for joining us! Stay tuned to our Instagram page (@genesis.ise) for further updates and announcements. The event WhatsApp group link will be shared once registration closes.

For any queries, feel free to contact us via this email, our Instagram page or visit the registration desks.

Please check the attached PDFs for Rulebook, Code of Conduct and Terms and Conditions.

Looking forward to an amazing event with you! :)

Team Genesis`;

    const html = `
  <p>Hello ${name},</p>

  <p>You have successfully registered for <strong>Catalysis v3!</strong></p>

  <p><strong>Your registered events:</strong> ${event.join(', ')}.</p>

  <p>Thank you for joining us! We're excited about your enthusiastic participation. Please stay tuned to our Instagram page <a href="https://www.instagram.com/genesis.ise">@genesis.ise</a> for updates and important announcements. The event WhatsApp group link will be shared once registration closes.</p>

  <p>For any event-related queries, feel free to reach out via this email, our Instagram page or visit the registration desks.</p>

  <p><strong>Please check the attached PDFs for rulebook and code of conduct.</strong></p>

  <p>Looking forward to an amazing event with you!</p>

  <p><strong>Team Genesis</strong></p>
`;

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
    sendEmail(normalizedEmail, subject, text, html, attachments)
      .then(() => console.log('Email sent successfully with attachments'))
      .catch(emailError => console.error('Failed to send email:', emailError));
      
  } catch (error) {
    // Handle unique constraint violations
    if (error.code === 11000) {
      const duplicateField = error.message.includes('email') ? 'Email' : 'USN';
      return res.status(400).json({ 
        error: `${duplicateField} is already registered. Please use a different ${duplicateField.toLowerCase()}.` 
      });
    }
    // Handle validation errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        error: error.message 
      });
    }
    res.status(500).json({ 
      error: 'Failed to register for the event', 
      details: error.message 
    });
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
