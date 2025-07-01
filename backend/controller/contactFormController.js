const ContactForm = require('../models/modelContactForm');

// Utility to validate email
const isValidEmail = (email) => {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(String(email).toLowerCase());
};

// Utility to validate mobile number (basic, can improve)
const isValidPhone = (phone) => {
  const re = /^[6-9]\d{9}$/; // Indian 10-digit number
  return re.test(phone);
};

const submitContactForm = async (req, res) => {
  const { full_name, email, mob_no, city } = req.body;

  // Check for missing fields
  if (!full_name || !email || !mob_no || !city) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  // Validate email and mobile number
  if (!isValidEmail(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email format.' });
  }
  if (!isValidPhone(mob_no)) {
    return res.status(400).json({ success: false, message: 'Invalid mobile number.' });
  }

  try {
    // Check if email or mobile already exists
    const existing = await ContactForm.findOne({ $or: [{ email }, { mob_no }] });
    if (existing) {
      return res.status(409).json({ success: false, message: 'Email or Mobile number already submitted.' });
    }

    // Save form
    const newContact = new ContactForm({ full_name, email, mob_no, city });
    await newContact.save();

    return res.status(201).json({ success: true, message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Contact Form Error:', error);
    return res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};

module.exports = { submitContactForm };
