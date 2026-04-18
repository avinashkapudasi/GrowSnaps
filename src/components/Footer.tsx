import { Link } from 'react-router-dom';
import { Phone, Facebook, Twitter, Linkedin, Instagram, Rocket, Sparkles } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#708090] text-white py-4">
      <div className="container-custom">
        {/* Top row: Logo, Links, Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="GrowSnaps Logo" className="w-20 h-auto object-contain" />
          </div>

          {/* Quick Links - Horizontal */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link to="/" className="text-[#333333] hover:text-white transition-colors">Home</Link>
            <Link to="/services" className="text-[#333333] hover:text-white transition-colors">Services</Link>
            <Link to="/programs" className="text-[#333333] hover:text-white transition-colors">Programs</Link>
            <Link to="/mentors" className="text-[#333333] hover:text-white transition-colors">Mentors</Link>
            <Link to="/portfolio" className="text-[#333333] hover:text-white transition-colors">Portfolio</Link>
            <Link to="/contact" className="text-[#333333] hover:text-white transition-colors">Contact</Link>
            <Link
              to="/young-risers"
              className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#74B72E]/10 hover:bg-[#74B72E]/20 text-[#74B72E] hover:text-[#5f9925] font-semibold transition-all duration-300"
            >
              <Rocket className="h-3.5 w-3.5 transition-transform group-hover:-rotate-12" />
              <span>Young Risers</span>
              <Sparkles className="h-3 w-3 opacity-60" />
            </Link>
          </nav>

          {/* Socials & Phone */}
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-sm text-[#333333]">
              <Phone size={14} /> +91 9030457668
            </span>
            <div className="flex items-center gap-3">
              <a href="#" className="text-[#333333] hover:text-white transition-colors" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" className="text-[#333333] hover:text-white transition-colors" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" className="text-[#333333] hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" className="text-[#333333] hover:text-white transition-colors" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-3 pt-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: '#333333' }}>
          <p>&copy; {new Date().getFullYear()} GrowSnaps Global Ventures. All rights reserved.</p>
          <p>
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