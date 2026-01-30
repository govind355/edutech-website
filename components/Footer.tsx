import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { INSTITUTE_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-royal text-white border-t-8 border-gold">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-gold">{INSTITUTE_NAME}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering students with tradition and excellence in the heart of Jaipur. We are committed to fostering academic brilliance and moral integrity.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold border-b border-blue-800 inline-block pb-1">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-gold transition-colors">Courses Offered</Link></li>
              <li><Link to="/admissions" className="hover:text-gold transition-colors">Admission Process</Link></li>
              <li><Link to="/#faculty" className="hover:text-gold transition-colors">Faculty</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold border-b border-blue-800 inline-block pb-1">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-1" />
                <span>123, Education Lane,<br/>Malviya Nagar, Jaipur, RJ 302017</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <span>+91 141 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <span>info@jhe.edu.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold border-b border-blue-800 inline-block pb-1">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">Subscribe for latest updates and events.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-blue-900 border border-blue-700 text-white px-4 py-2 rounded focus:outline-none focus:border-gold"
              />
              <button className="bg-maroon hover:bg-red-900 text-white px-4 py-2 rounded font-bold transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {INSTITUTE_NAME}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
