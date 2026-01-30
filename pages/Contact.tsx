import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-royal text-center mb-12">Get in Touch</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
             <div className="bg-white p-8 rounded-xl shadow-md">
               <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
               <div className="space-y-6">
                 <div className="flex items-start">
                   <div className="bg-blue-100 p-3 rounded-full mr-4">
                     <MapPin className="text-royal" size={24} />
                   </div>
                   <div>
                     <h3 className="font-bold text-gray-800">Campus Address</h3>
                     <p className="text-gray-600">123, Education Lane, Near JLN Marg,<br/>Malviya Nagar, Jaipur, Rajasthan 302017</p>
                   </div>
                 </div>
                 
                 <div className="flex items-start">
                   <div className="bg-blue-100 p-3 rounded-full mr-4">
                     <Phone className="text-royal" size={24} />
                   </div>
                   <div>
                     <h3 className="font-bold text-gray-800">Phone Numbers</h3>
                     <p className="text-gray-600">+91 141 123 4567 (Reception)</p>
                     <p className="text-gray-600">+91 987 654 3210 (Admissions)</p>
                   </div>
                 </div>

                 <div className="flex items-start">
                   <div className="bg-blue-100 p-3 rounded-full mr-4">
                     <Mail className="text-royal" size={24} />
                   </div>
                   <div>
                     <h3 className="font-bold text-gray-800">Email Address</h3>
                     <p className="text-gray-600">info@jhe.edu.in</p>
                     <p className="text-gray-600">admissions@jhe.edu.in</p>
                   </div>
                 </div>

                 <div className="flex items-start">
                   <div className="bg-blue-100 p-3 rounded-full mr-4">
                     <Clock className="text-royal" size={24} />
                   </div>
                   <div>
                     <h3 className="font-bold text-gray-800">Office Hours</h3>
                     <p className="text-gray-600">Mon - Sat: 9:00 AM - 4:00 PM</p>
                     <p className="text-gray-600">Sunday: Closed</p>
                   </div>
                 </div>
               </div>
             </div>
             
             {/* Map Placeholder */}
             <div className="bg-gray-200 h-64 rounded-xl shadow-inner flex items-center justify-center">
                <span className="text-gray-500 font-bold">Google Map Integration Here</span>
             </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-gold">
            <h2 className="text-2xl font-bold text-royal mb-2">Send us a Message</h2>
            <p className="text-gray-600 mb-8">Have a question? Fill out the form below and we'll get back to you shortly.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-royal bg-gray-50" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-royal bg-gray-50" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-royal bg-gray-50" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-royal bg-gray-50" placeholder="+91 98765 43210" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Interested Course</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-royal bg-gray-50">
                  <option>Select a program</option>
                  <option>Science</option>
                  <option>Commerce</option>
                  <option>Arts</option>
                  <option>Diploma</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-royal bg-gray-50" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full bg-royal text-white font-bold py-4 rounded hover:bg-blue-900 transition-colors shadow-lg">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
