import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Rocket, Sparkles } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#708090] text-white pt-16 pb-8">
      <div className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
        <div className="flex items-center space-x-2 mb-4">
          <img src={logo} alt="GrowSnaps Logo" className="w-32 h-auto" />
        </div>
        <p className="text-[#333333] mb-6">
          We transform ideas into scalable businesses with strategic insights and innovative solutions.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-[#333333] hover:text-white transition-colors" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-[#333333] hover:text-white transition-colors" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-[#333333] hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-[#333333] hover:text-white transition-colors" aria-label="Instagram">
            <Instagram size={20} />
          </a>
        </div>
        </div>

        {/* Quick Links */}
        <div>
        <h3 className="text-lg font-semibold mb-4 text-[#333333]">Quick Links</h3>
        <ul className="space-y-2">
          <li><Link to="/" className="text-[#333333] hover:text-white transition-colors">Home</Link></li>
          <li><Link to="/services" className="text-[#333333] hover:text-white transition-colors">Services</Link></li>
          <li><Link to="/contact" className="text-[#333333] hover:text-white transition-colors">Contact</Link></li>
          <li>
            <Link
              to="/young-risers"
              className="group inline-flex items-center gap-2 px-3 py-1.5 -ml-3 rounded-full bg-[#74B72E]/10 hover:bg-[#74B72E]/20 text-[#74B72E] hover:text-[#5f9925] font-semibold transition-all duration-300"
            >
              <Rocket className="h-3.5 w-3.5 transition-transform group-hover:-rotate-12" />
              <span>Young Risers</span>
              <Sparkles className="h-3 w-3 opacity-60" />
            </Link>
          </li>
        </ul>
        </div>

        {/* Contact */}
        <div>
        <h3 className="text-lg font-semibold mb-4 text-[#333333]">Contact Us</h3>
        <ul className="space-y-3">
            <li className="flex items-start space-x-3">
            <Phone size={20} className="flex-shrink-0 mt-1" style={{ color: '#333333' }} />
            <span className="text-[#333333]">+91 9030457668</span>
            </li>
          <li className="flex items-start space-x-3">
            <Mail size={20} className="flex-shrink-0 mt-1" style={{ color: '#333333' }} />
            <span className="text-[#333333]">info@growsnaps.com</span>
          </li>
          <li className="flex items-start space-x-3">
            <MapPin size={20} className="flex-shrink-0 mt-1" style={{ color: '#333333' }} />
            <span className="text-[#333333]">
              Plot No - 141, MA Nagar, Near IT Junction, <br />
              Midhilapuri Vuda Colony, Madhurawada,<br />
              Visakhapatnam - 530048
            </span>
          </li>
        </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm" style={{ color: '#333333' }}>
        <p>&copy; {new Date().getFullYear()} GrowSnaps Global Ventures. All rights reserved.</p>
        <p className="mt-2">
          Developed by{' '}
          <a
            href="https://www.webtechstrategies.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#F9C800] font-medium transition-colors underline underline-offset-2"
          >
            WebTechStrategies
          </a>
        </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;