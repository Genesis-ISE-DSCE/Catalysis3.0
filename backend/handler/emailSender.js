const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    pool: true,
    maxConnections: 11,
    maxMessages: Infinity,
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});
/**
 * Send an email to the user
 * @param {string} to - Recipient email address
 * @param {string} subject - Email subject
 * @param {string} text - Email body (plain text)
 * @param {string} html - Email body (HTML)
 * @param {Array} attachments - Email attachments (optional)
 */
const sendEmail = async (to, subject, text, html, attachments = []) => {
  try {
    const mailOptions = {
      from: process.env.MAIL_USER,
      to, 
      subject,
      text, 
      html,
      attachments: attachments || [], // Ensure attachments is defined or use empty array
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};

module.exports = sendEmail;