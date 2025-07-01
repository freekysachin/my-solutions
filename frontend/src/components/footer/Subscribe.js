import React, { useState } from 'react';

const SubscriptionSection = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      let path = process.env.REACT_APP_API_URL + '/subscribe-new';
      const response = await fetch(path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('✅ You subscribed!');
        setEmail('');
      } else {
        const result = await response.json();
        alert(`${result.message || 'Subscription failed.'}`);
      }
    } catch (err) {
      console.error('Subscription error:', err);
      alert(' Subscription failed.');
    }
  };

  return (
    <div className="w-full bg-[#1e90ff] py-6 px-4 flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap">
      <div className="flex gap-4 text-white font-bold flex-wrap justify-center md:mr-10">
        <h1 className="cursor-pointer">Home</h1>
        <h1 className="cursor-pointer">Services</h1>
        <h1 className="cursor-pointer">Projects</h1>
        <h1 className="cursor-pointer">Testimonials</h1>
        <h1 className="cursor-pointer">Contact</h1>
      </div>

      <div className="flex items-center gap-2 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-md outline-none"
        />
        <button
          onClick={handleSubscribe}
          className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscriptionSection;
