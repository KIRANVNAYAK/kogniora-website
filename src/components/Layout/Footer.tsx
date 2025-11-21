import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/Logo_small.png"
                alt="Kogniora Global Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Kogniora Global</h3>
                <p className="text-sm text-gray-400">EdTech Private Limited</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Transforming Education Through Innovative Technology and Expert-led Training. 
              We deliver world-class professional development programs across USA, Canada, Australia, and Europe.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">5 Penn Plaza, New York, NY 10001, USA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:info@kogniora.com" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  info@kogniora.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+15551234567" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  +1 (332) 242-4424
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-2">Newsletter</h5>
              <p className="text-xs text-gray-400 mb-3">Stay updated with our latest courses and insights</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-sm focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-md text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Kogniora Global EdTech Private Limited. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;