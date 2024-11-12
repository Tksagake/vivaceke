import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [loading, setLoading] = useState(false); // Track loading state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading to true
    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);

    // Show the success toast immediately when the user submits the form
    toast.success('Your message was sent successfully!', {
      autoClose: 5000,
    });

    try {
      await fetch('https://formspree.io/f/xvgorqry', {
        method: 'POST',
        body: formDataObj,
      });
      // Clear the form after submission
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        countryCode: '+254',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      
    } finally {
      setLoading(false); // Reset loading state

      // Wait for 1.5 seconds before reloading the page
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      onChange={handleChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      required
    >
      <option value="+93">+93 Afghanistan</option>
      <option value="+355">+355 Albania</option>
      <option value="+213">+213 Algeria</option>
      <option value="+1-684">+1-684 American Samoa</option>
      <option value="+376">+376 Andorra</option>
      <option value="+244">+244 Angola</option>
      <option value="+1-264">+1-264 Anguilla</option>
      <option value="+672">+672 Antarctica</option>
      <option value="+1-268">+1-268 Antigua and Barbuda</option>
      <option value="+54">+54 Argentina</option>
      <option value="+374">+374 Armenia</option>
      <option value="+297">+297 Aruba</option>
      <option value="+61">+61 Australia</option>
      <option value="+43">+43 Austria</option>
      <option value="+994">+994 Azerbaijan</option>
      <option value="+1-242">+1-242 Bahamas</option>
      <option value="+973">+973 Bahrain</option>
      <option value="+880">+880 Bangladesh</option>
      <option value="+1-246">+1-246 Barbados</option>
      <option value="+375">+375 Belarus</option>
      <option value="+32">+32 Belgium</option>
      <option value="+501">+501 Belize</option>
      <option value="+229">+229 Benin</option>
      <option value="+1-441">+1-441 Bermuda</option>
      <option value="+975">+975 Bhutan</option>
      <option value="+591">+591 Bolivia</option>
      <option value="+387">+387 Bosnia and Herzegovina</option>
      <option value="+267">+267 Botswana</option>
      <option value="+55">+55 Brazil</option>
      <option value="+246">+246 British Indian Ocean Territory</option>
      <option value="+1-284">+1-284 British Virgin Islands</option>
      <option value="+673">+673 Brunei</option>
      <option value="+359">+359 Bulgaria</option>
      <option value="+226">+226 Burkina Faso</option>
      <option value="+257">+257 Burundi</option>
      <option value="+855">+855 Cambodia</option>
      <option value="+237">+237 Cameroon</option>
      <option value="+1">+1 Canada</option>
      <option value="+238">+238 Cape Verde</option>
      <option value="+1-345">+1-345 Cayman Islands</option>
      <option value="+236">+236 Central African Republic</option>
      <option value="+235">+235 Chad</option>
      <option value="+56">+56 Chile</option>
      <option value="+86">+86 China</option>
      <option value="+61">+61 Christmas Island</option>
      <option value="+61">+61 Cocos Islands</option>
      <option value="+57">+57 Colombia</option>
      <option value="+269">+269 Comoros</option>
      <option value="+682">+682 Cook Islands</option>
      <option value="+506">+506 Costa Rica</option>
      <option value="+385">+385 Croatia</option>
      <option value="+53">+53 Cuba</option>
      <option value="+599">+599 Curacao</option>
      <option value="+357">+357 Cyprus</option>
      <option value="+420">+420 Czech Republic</option>
      <option value="+243">+243 Democratic Republic of the Congo</option>
      <option value="+45">+45 Denmark</option>
      <option value="+253">+253 Djibouti</option>
      <option value="+1-767">+1-767 Dominica</option>
      <option value="+1-809">+1-809 Dominican Republic</option>
      <option value="+670">+670 East Timor</option>
      <option value="+593">+593 Ecuador</option>
      <option value="+20">+20 Egypt</option>
      <option value="+503">+503 El Salvador</option>
      <option value="+240">+240 Equatorial Guinea</option>
      <option value="+291">+291 Eritrea</option>
      <option value="+372">+372 Estonia</option>
      <option value="+251">+251 Ethiopia</option>
      <option value="+500">+500 Falkland Islands</option>
      <option value="+298">+298 Faroe Islands</option>
      <option value="+679">+679 Fiji</option>
      <option value="+358">+358 Finland</option>
      <option value="+33">+33 France</option>
      <option value="+689">+689 French Polynesia</option>
      <option value="+241">+241 Gabon</option>
      <option value="+220">+220 Gambia</option>
      <option value="+995">+995 Georgia</option>
      <option value="+49">+49 Germany</option>
      <option value="+233">+233 Ghana</option>
      <option value="+350">+350 Gibraltar</option>
      <option value="+30">+30 Greece</option>
      <option value="+299">+299 Greenland</option>
      <option value="+1-473">+1-473 Grenada</option>
      <option value="+1-671">+1-671 Guam</option>
      <option value="+502">+502 Guatemala</option>
      <option value="+44-1481">+44-1481 Guernsey</option>
      <option value="+224">+224 Guinea</option>
      <option value="+245">+245 Guinea-Bissau</option>
      <option value="+592">+592 Guyana</option>
      <option value="+509">+509 Haiti</option>
      <option value="+504">+504 Honduras</option>
      <option value="+852">+852 Hong Kong</option>
      <option value="+36">+36 Hungary</option>
      <option value="+354">+354 Iceland</option>
      <option value="+91">+91 India</option>
      <option value="+62">+62 Indonesia</option>
      <option value="+98">+98 Iran</option>
      <option value="+964">+964 Iraq</option>
      <option value="+353">+353 Ireland</option>
      <option value="+44-1624">+44-1624 Isle of Man</option>
      <option value="+972">+972 Israel</option>
      <option value="+39">+39 Italy</option>
      <option value="+1-876">+1-876 Jamaica</option>
      <option value="+81">+81 Japan</option>
      <option value="+44-1534">+44-1534 Jersey</option>
      <option value="+962">+962 Jordan</option>
      <option value="+7">+7 Kazakhstan</option>
      <option value="+254">+254 Kenya</option>
      <option value="+686">+686 Kiribati</option>
      <option value="+383">+383 Kosovo</option>
      <option value="+965">+965 Kuwait</option>
      <option value="+996">+996 Kyrgyzstan</option>
      <option value="+856">+856 Laos</option>
      <option value="+371">+371 Latvia</option>
      <option value="+961">+961 Lebanon</option>
      <option value="+266">+266 Lesotho</option>
      <option value="+231">+231 Liberia</option>
      <option value="+218">+218 Libya</option>
      <option value="+423">+423 Liechtenstein</option>
      <option value="+370">+370 Lithuania</option>
      <option value="+352">+352 Luxembourg</option>
      <option value="+853">+853 Macau</option>
      <option value="+389">+389 Macedonia</option>
      <option value="+261">+261 Madagascar</option>
      <option value="+265">+265 Malawi</option>
      <option value="+60">+60 Malaysia</option>
      <option value="+960">+960 Maldives</option>
      <option value="+223">+223 Mali</option>
      <option value="+356">+356 Malta</option>
      <option value="+692">+692 Marshall Islands</option>
      <option value="+222">+222 Mauritania</option>
      <option value="+230">+230 Mauritius</option>
      <option value="+262">+262 Mayotte</option>
      <option value="+52">+52 Mexico</option>
      <option value="+691">+691 Micronesia</option>
      <option value="+373">+373 Moldova</option>
      <option value="+377">+377 Monaco</option>
      <option value="+976">+976 Mongolia</option>
      <option value="+382">+382 Montenegro</option>
      <option value="+1-664">+1-664 Montserrat</option>
      <option value="+212">+212 Morocco</option>
      <option value="+258">+258 Mozambique</option>
      <option value="+95">+95 Myanmar</option>
      <option value="+264">+264 Namibia</option>
      <option value="+674">+674 Nauru</option>
      <option value="+977">+977 Nepal</option>
      <option value="+31">+31 Netherlands</option>
      <option value="+599">+599 Netherlands Antilles</option>
      <option value="+687">+687 New Caledonia</option>
      <option value="+64">+64 New Zealand</option>
      <option value="+505">+505 Nicaragua</option>
      <option value="+227">+227 Niger</option>
      <option value="+234">+234 Nigeria</option>
      <option value="+683">+683 Niue</option>
      <option value="+850">+850 North Korea</option>
      <option value="+1-670">+1-670 Northern Mariana Islands</option>
      <option value="+47">+47 Norway</option>
      <option value="+968">+968 Oman</option>
      <option value="+92">+92 Pakistan</option>
      <option value="+680">+680 Palau</option>

      
          </select>
  </div>
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
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className={`w-full px-4 py-2 font-semibold text-white rounded-lg ${
                  loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
          <ToastContainer />
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
