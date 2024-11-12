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
    // Submit to Formspree
    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);
    fetch('https://formspree.io/f/xvgorqry', {
      method: 'POST',
      body: formDataObj,
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true); // Set form as submitted
        } else {
          console.error('Form submission error');
        }
      })
      .catch((error) => console.error('Form submission error:', error));
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
          {[{
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
          }].map((item, index) => (
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
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xvgorqry"
              method="POST"
              className="space-y-6"
            >
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
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="mt-4 px-8 py-3 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Send Message <Send className="inline-block ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
