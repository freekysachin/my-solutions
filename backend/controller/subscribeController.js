const Subscriber = require('../models/modelSubscriber'); // Adjust path as needed

// Utility function to validate email format
const isValidEmail = (email) => {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(String(email).toLowerCase());
};

const subscribeNew = async (req, res) => {
  const { email } = req.body;

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email format.' });
  }

  try {
    const existing = await Subscriber.findOne({ email });

    if (existing) {
      return res.status(409).json({ success: false, message: 'You are already subscribed.' });
    }

    // Create new subscriber
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    return res.status(201).json({ success: true, message: 'Successfully subscribed!' });
  } catch (err) {
    console.error('Subscription Error:', err);
    return res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};

module.exports = { subscribeNew };
