import Email from '../models/emailModel.js';
import nodemailer from 'nodemailer';

// Function to send confirmation email
const sendConfirmationEmail = async (email) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password
    },
  });

  let info = await transporter.sendMail({
    from: `"Newsletter" <${process.env.EMAIL_USER}>`, // sender address
    to: email, // list of receivers
    subject: "Newsletter Subscription Confirmation", // Subject line
    text: "Thank you for subscribing to our newsletter!", // plain text body
    html: `<b>Thank you for subscribing to our newsletter!</b>`, // html body
  });

  console.log("Email sent: %s", info.messageId);
};

// Controller to handle newsletter signup
export const subscribeNewsletter = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if email already exists
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already subscribed!" });
    }

    // Save email to DB
    const newEmail = new Email({ email });
    await newEmail.save();

    // Send confirmation email
    await sendConfirmationEmail(email);

    res.status(200).json({ message: "Subscription successful! Confirmation email sent." });
  } catch (error) {
    res.status(500).json({ message: "Server error: " + error.message });
  }
};

// Controller to get all subscribed emails
export const getSubscribedEmails = async (req, res) => {
  try {
    const emails = await Email.find();
    res.status(200).json(emails);
  } catch (error) {
    res.status(500).json({ message: "Server error: " + error.message });
  }
};
