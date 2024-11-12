import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    countryCode: '+254', // default country code (Kenya)
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false); // Track submission status

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (without a backend)
    console.log('Form submitted:', formData);
    setSubmitted(true); // Set form as submitted
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-20 py-16">
      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to start your musical journey or learn more about our programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Phone className="h-8 w-8" />,
              title: 'Phone',
              info: '+254-794-068-508, +254-795-958-448',
              subInfo: 'Mon-Fri 9am-6pm',
            },
            {
              icon: <Mail className="h-8 w-8" />,
              title: 'Email',
              info: 'vivacemusicke@gmail.com',
              subInfo: 'We reply within 24 hours',
            },
            {
              icon: <MapPin className="h-8 w-8" />,
              title: 'Location',
              info: 'Juja Square',
              subInfo: 'Juja, Kenya',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="text-indigo-600 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-1">{item.info}</p>
              <p className="text-gray-500">{item.subInfo}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          {submitted ? (
            <div className="text-center text-green-600">
              <h3 className="text-xl font-semibold mb-4">Thank you for reaching out!</h3>
              <p>
                We have received your message and our team will get back to you shortly.
                In the meantime, feel free to explore our website for more information about our programs and services.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700 mb-2">
                    Country Code
                  </label>
                  <select
                    id="countryCode"
                    name="countryCode"
                    value={formData.countryCode}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  >
                    <option value="+254">+254 Kenya</option>
                    <option value="+1">+1 USA</option>
                    <option value="+44">+44 UK</option>
                    <option value="+91">+91 India</option>
                    <option value="+61">+61 Australia</option>
                    <option value="+55">+55 Brazil</option>
                    <option value="+86">+86 China</option>
                    <option value="+33">+33 France</option>
                    <option value="+49">+49 Germany</option>
                    <option value="+1">+1 Canada</option>
                    <option value="+81">+81 Japan</option>
                    <option value="+54">+54 Argentina</option>
                    <option value="+60">+60 Malaysia</option>
                    <option value="+7">+7 Korea</option>
                    <option value="+90">+90 Turkey</option>
                    <option value="+82">+82 South Korea</option>
                    <option value="+504">+504 Nicaragua</option>
                    <option value="+56">+56 Chile</option>
                    <option value="+57">+57 Colombia</option>
                    <option value="+58">+58 Venezuela</option>
                    <option value="+593">+593 Ecuador</option>
                    <option value="+595">+595 Paraguay</option>
                    <option value="+598">+598 Uruguay</option>
                    <option value="+51">+51 Peru</option>
                    <option value="+52">+52 Mexico</option>
                    <option value="+63">+63 Philippines</option>
                    <option value="+64">+64 New Zealand</option>
                    <option value="+852">+852 Hong Kong</option>
                    <option value="+853">+853 China (Hong Kong)</option>
                    <option value="+855">+855 Cambodia</option>
                    <option value="+856">+856 Taiwan</option>
                    <option value="+857">+857 Singapore</option>
                    <option value="+858">+858 Macau</option>
                    <option value="+859">+859 Hong Kong SAR</option>
                    <option value="+860">+860 Macau SAR</option>
                    <option value="+861">+861 China (Macau)</option>
                    <option value="+862">+862 China (Taiwan)</option>
                    <option value="+863">+863 China (Hong Kong)</option>
                    <option value="+864">+864 China (Singapore)</option>
                    <option value="+865">+865 China (Taiwan)</option>

                  </select>
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
