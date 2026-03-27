import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/[0.03] py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative flex items-center group">
            <motion.img
              src={logo}
              alt="GrowSnaps Logo"
              className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            {/* Nav pill container */}
            <div className={`flex items-center gap-1 rounded-full px-1.5 py-1.5 transition-all duration-500 ${
              isScrolled ? 'bg-gray-100/70' : 'bg-white/10 backdrop-blur-sm'
            }`}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : isScrolled
                          ? 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                          : 'text-white/80 hover:text-white hover:bg-white/15'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="activeNav"
                          className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full shadow-md"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Young Risers CTA with hover dropdown */}
            <div className="relative ml-4 group/yr">
              <NavLink
                to="/young-risers"
                className={({ isActive }) =>
                  `relative inline-flex items-center gap-2 py-2.5 px-6 rounded-full font-semibold text-sm transition-all duration-300 overflow-visible group ${
                    isActive
                      ? 'bg-[#F9C800] text-gray-900 shadow-lg shadow-[#F9C800]/40 ring-2 ring-[#F9C800]/50'
                      : isScrolled
                        ? 'bg-gradient-to-r from-[#F9C800] to-[#e0b400] text-gray-900 shadow-md shadow-[#F9C800]/20 hover:shadow-xl hover:shadow-[#F9C800]/40 hover:scale-105'
                        : 'bg-[#F9C800] text-gray-900 shadow-lg shadow-[#F9C800]/30 ring-2 ring-white/30 hover:shadow-xl hover:shadow-[#F9C800]/50 hover:scale-105'
                  }`
                }
              >
                {/* Shine sweep effect */}
                <span className="absolute inset-0 rounded-full overflow-hidden">
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                </span>

                {/* Subtle shimmer */}
                <span className="absolute inset-0 rounded-full overflow-hidden">
                  <span className="absolute inset-0 animate-[shimmer_2.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </span>

                <Rocket className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110 text-gray-900" />
                <span className="relative z-10 text-gray-900 font-bold">Young Risers</span>

                {/* Animated ping badge */}
                <span className="absolute -top-2 -right-2 flex h-5 w-5 z-20">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#74B72E] opacity-60" />
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-gradient-to-br from-[#74B72E] to-[#5f9925] items-center justify-center text-[9px] font-bold text-white shadow-md shadow-[#74B72E]/40 border border-[#74B72E]/50">
                    ✦
                  </span>
                </span>
              </NavLink>

              {/* Hover dropdown — Apply Now */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover/yr:opacity-100 group-hover/yr:visible transition-all duration-200">
                <div className="bg-white rounded-2xl shadow-xl shadow-black/10 border border-gray-100 p-3 min-w-[200px]">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold mb-2 px-1">Quick Action</p>
                  <Link
                    to="/young-risers/enroll"
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-[#74B72E] to-[#5f9925] hover:from-[#659A26] hover:to-[#4c7a1e] text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md group/btn"
                  >
                    <Rocket className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:-rotate-12" />
                    <span>Apply Now</span>
                    <ChevronRight className="h-3.5 w-3.5 ml-auto opacity-60 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            className={`md:hidden relative p-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#74B72E]/40 transition-colors ${
              isScrolled
                ? 'bg-gray-50 hover:bg-gray-100'
                : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className={`h-5 w-5 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className={`h-5 w-5 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="container-custom py-5">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-[#74B72E]/10 text-[#74B72E]'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 active:bg-gray-100'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <div className="flex items-center gap-3">
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#74B72E]" />
                            )}
                            <span>{link.name}</span>
                          </div>
                          <ChevronRight className={`h-4 w-4 transition-colors ${isActive ? 'text-[#74B72E]' : 'text-gray-300'}`} />
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}

                {/* Divider */}
                <div className="py-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                </div>

                {/* Young Risers mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                >
                  <NavLink
                    to="/young-risers"
                    className={({ isActive }) =>
                      `relative flex items-center gap-3 py-3.5 px-5 rounded-2xl font-bold text-sm transition-all duration-300 overflow-hidden group ${
                        isActive
                          ? 'bg-[#F9C800] text-gray-900 shadow-md shadow-[#F9C800]/20'
                          : 'bg-gradient-to-r from-[#F9C800] to-[#e0b400] text-gray-900 shadow-md shadow-[#F9C800]/15'
                      }`
                    }
                  >
                    <span className="absolute inset-0 overflow-hidden rounded-2xl">
                      <span className="absolute inset-0 animate-[shimmer_2.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </span>
                    <Rocket className="h-4 w-4 relative z-10" />
                    <span className="relative z-10">Young Risers</span>
                    <span className="ml-auto relative z-10 inline-flex h-5 px-1.5 rounded-full bg-gradient-to-br from-[#74B72E] to-[#5f9925] items-center justify-center text-[9px] font-bold text-white uppercase tracking-wide shadow-sm">
                      ✦ New
                    </span>
                  </NavLink>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;