import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Rocket, Award, BookOpen, Star, Sparkles, GraduationCap,
  ChevronRight, Download, ArrowRight, Sprout, Search, Cpu, TrendingUp, Flag,
  Lightbulb, Layers, Briefcase, MessageSquareQuote, Users
} from 'lucide-react';
import brochureFile from '../assets/Website.docx';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'overview', label: 'Overview' },
  { id: 'learning', label: 'How Learning Happens' },
  { id: 'different', label: 'What Makes Us Different' },
  { id: 'demoday', label: 'Demo Day' },
  { id: 'outcomes', label: 'Learning Outcomes' },
];

const YoungRisersPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sectionRefs.current.map(
        (ref) => ref?.getBoundingClientRect().top ?? Infinity
      );
      const headerOffset = 120;
      let current = 0;
      offsets.forEach((top, i) => {
        if (top - headerOffset < window.innerHeight * 0.4) current = i;
      });
      setActiveSection(current);

      // Calculate scroll progress
      const firstTop = sectionRefs.current[0]?.offsetTop ?? 0;
      const lastEl = sectionRefs.current[sectionRefs.current.length - 1];
      const lastBottom = lastEl ? lastEl.offsetTop + lastEl.offsetHeight : document.body.scrollHeight;
      const totalHeight = lastBottom - firstTop;
      const scrolled = window.scrollY + window.innerHeight * 0.4 - firstTop;
      setScrollProgress(Math.min(1, Math.max(0, scrolled / totalHeight)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (idx: number) => {
    sectionRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6 },
  };

  return (
    <div className="relative bg-white">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-[#1a2e05] via-[#2d4a0e] to-[#1a2e05] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#74B72E] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 pt-28 pb-16">
          <div className="max-w-3xl">
            <motion.div {...fadeUp} className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#74B72E]/20 text-[#74B72E] text-xs font-semibold uppercase tracking-wider border border-[#74B72E]/30">
                <Rocket className="h-3.5 w-3.5" /> Youth Program
              </span>
            </motion.div>
            <motion.h1 {...fadeUp} className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
              Young Risers <span className="text-[#74B72E]">Program</span>
            </motion.h1>
            <motion.p {...fadeUp} className="text-xl md:text-2xl text-white font-semibold mb-3 leading-snug max-w-3xl">
              India's Structured Youth Entrepreneurship Program to Build Real Founders Early
            </motion.p>
            <motion.p {...fadeUp} className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              From mindset to market - students don't just learn entrepreneurship, they build it.
            </motion.p>
            <motion.div {...fadeUp} className="flex flex-wrap gap-4">
              <Link
                to="/young-risers/enroll"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#74B72E] hover:bg-[#659A26] text-white font-semibold text-base transition-all shadow-lg shadow-[#74B72E]/30 hover:shadow-xl"
              >
                <Rocket className="h-4 w-4" /> Apply Now
              </Link>
              <a
                href="#overview"
                onClick={(e) => { e.preventDefault(); scrollToSection(1); }}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base transition-all border border-white/20"
              >
                Learn More <ChevronRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky side navigation */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-1">
        {/* Progress bar */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 rounded-full">
          <div
            className="w-full bg-[#74B72E] rounded-full transition-all duration-300"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollToSection(i)}
            className="relative group z-10 p-2"
            aria-label={s.label}
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                activeSection === i
                  ? 'w-3 h-3 bg-[#74B72E] shadow-md shadow-[#74B72E]/40'
                  : 'w-2 h-2 bg-gray-300 group-hover:bg-[#74B72E]/60'
              }`}
            />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-gray-900 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {s.label}
            </span>
          </button>
        ))}
      </div>

      {/* About Section */}
      <section
        id="about"
        ref={(el) => { sectionRefs.current[0] = el; }}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#74B72E]/10 text-[#74B72E] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="h-3.5 w-3.5" /> About the Program
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Empowering the Next Generation of <span className="text-[#74B72E]">Entrepreneurs</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              The Young Risers Program is a structured entrepreneurship journey designed for students aged 13–19. Through hands-on workshops, mentorship, and real-world challenges, participants learn to think like founders, build real products, and develop the confidence to lead.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section
        id="overview"
        ref={(el) => { sectionRefs.current[1] = el; }}
        className="py-20 bg-gray-50"
      >
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#74B72E]/10 text-[#74B72E] text-xs font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="h-3.5 w-3.5" /> Program Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              A Complete Entrepreneurial <span className="text-[#74B72E]">Journey</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {[
              { phase: 'PHASE 1', title: 'GROW', desc: 'Identity & Problem Discovery', icon: Sprout },
              { phase: 'PHASE 2', title: 'SNAP', desc: 'Market Understanding', icon: Search },
              { phase: 'PHASE 3', title: 'BUILD', desc: 'AI + Product Creation', icon: Cpu },
              { phase: 'PHASE 4', title: 'RISE', desc: 'Business Strategy', icon: TrendingUp },
              { phase: 'PHASE 5', title: 'LEAD', desc: 'Leadership & Execution', icon: Flag },
            ].map((item, i) => (
              <motion.div
                key={item.phase}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-white rounded-[28px] p-6 border border-gray-100 hover:border-[#74B72E]/30 hover:shadow-lg hover:shadow-[#74B72E]/5 transition-all duration-300 overflow-hidden"
              >
                {i < 4 && (
                  <div className="hidden xl:flex absolute top-11 -right-5 items-center text-[#74B72E]/45 pointer-events-none">
                    <div className="w-8 h-px bg-[#74B72E]/35" />
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-full bg-[#74B72E] text-white flex items-center justify-center shadow-lg shadow-[#74B72E]/20 text-lg font-bold">
                    {i + 1}
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-[#74B72E]/10 text-[#74B72E] flex items-center justify-center group-hover:bg-[#74B72E]/15 transition-colors">
                    <item.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#74B72E]/10 text-[#74B72E] text-xs font-semibold uppercase tracking-wider mb-4 group-hover:bg-[#74B72E]/15 transition-colors">
                  {item.phase}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Learning Happens */}
      <section
        id="learning"
        ref={(el) => { sectionRefs.current[2] = el; }}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#74B72E]/10 text-[#74B72E] text-xs font-semibold uppercase tracking-wider mb-4">
              <GraduationCap className="h-3.5 w-3.5" /> Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              How <span className="text-[#74B72E]">Learning</span> Happens
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
                { title: 'SELF-PACED LMS', desc: 'Structured modules + assignments', icon: '📚' },
                { title: 'LIVE SESSIONS', desc: 'Weekly expert-led sessions', icon: '🎙️' },
                { title: 'BUSINESS CHALLENGES', desc: 'Fortnightly real-world tasks', icon: '🏁' },
                { title: 'WORKSHOPS', desc: 'Hands-on activities & simulations', icon: '🛠️' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#74B72E]/20 transition-all"
              >
                <span className="text-3xl flex-shrink-0 mt-1">{item.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section
        id="different"
        ref={(el) => { sectionRefs.current[3] = el; }}
        className="py-20 bg-gradient-to-br from-[#1a2e05] via-[#2d4a0e] to-[#1a2e05] text-white"
      >
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#74B72E] text-xs font-semibold uppercase tracking-wider mb-4">
              <Star className="h-3.5 w-3.5" /> Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              What Makes This <span className="text-[#74B72E]">Different</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Real Ventures, Not Simulations', desc: 'Students build actual products and services that solve real problems in their communities.' },
              { title: 'Industry-Connected', desc: 'Direct access to entrepreneurs, investors, and business leaders through our mentor network.' },
              { title: 'Future-Ready Skills', desc: 'Beyond business — students develop critical thinking, resilience, creativity, and communication.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <h3 className="text-lg font-bold text-[#74B72E] mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Day */}
      <section
        id="demoday"
        ref={(el) => { sectionRefs.current[4] = el; }}
        className="py-20 bg-gradient-to-br from-[#f7fde9] via-white to-[#fff8e8]"
      >
        <div className="container-custom">
          <motion.div
            {...fadeUp}
            className="relative max-w-6xl mx-auto rounded-[32px] bg-gradient-to-br from-[#1a2e05] via-[#28420d] to-[#1a2e05] px-6 py-12 md:px-10 md:py-14 overflow-hidden shadow-[0_24px_80px_rgba(26,46,5,0.18)]"
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute -top-16 left-12 w-44 h-44 rounded-full bg-[#74B72E] blur-3xl" />
              <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-yellow-300 blur-3xl" />
            </div>

            <div className="relative z-10 text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#d8f2b7] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
                <Award className="h-3.5 w-3.5" /> The Grand Finale
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Demo <span className="text-[#9fe14f]">Day</span>
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-white mb-3">
                Where Students Become Founders
              </p>
              <p className="text-[#d6dfcb] text-lg leading-relaxed max-w-2xl mx-auto">
                Demo Day brings every phase together in one final founder showcase with live energy, real feedback, and proud families in the room.
              </p>
            </div>

            <div className="relative z-10 grid sm:grid-cols-2 xl:grid-cols-5 gap-4 text-left">
              {[
                { label: 'Present validated ideas', icon: Lightbulb },
                { label: 'Showcase prototypes', icon: Layers },
                { label: 'Explain business models', icon: Briefcase },
                { label: 'Receive jury feedback', icon: MessageSquareQuote },
                { label: 'Parents & mentors invited', icon: Users },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group rounded-3xl bg-white/95 backdrop-blur-sm p-5 border border-white/60 hover:-translate-y-1 hover:bg-white transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-full bg-[#74B72E] text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-[#74B72E]/25">
                      {index + 1}
                    </div>
                    <div className="w-11 h-11 rounded-2xl bg-[#74B72E]/10 text-[#74B72E] flex items-center justify-center group-hover:bg-[#74B72E]/15 transition-colors">
                      <item.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="text-base font-semibold text-gray-900 leading-relaxed">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section
        id="outcomes"
        ref={(el) => { sectionRefs.current[5] = el; }}
        className="py-20 bg-white"
      >
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#74B72E]/10 text-[#74B72E] text-xs font-semibold uppercase tracking-wider mb-4">
              <GraduationCap className="h-3.5 w-3.5" /> What You'll Gain
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Learning <span className="text-[#74B72E]">Outcomes</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-12">
            {[
              'Entrepreneurial Mindset',
              'Design Thinking',
              'Financial Literacy',
              'Public Speaking',
              'Team Leadership',
              'Market Research',
              'Product Development',
              'Pitch Mastery',
              'Problem Solving',
              'Creative Confidence',
              'Business Model Design',
              'Customer Empathy',
            ].map((outcome, i) => (
              <motion.span
                key={outcome}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#74B72E]/5 border border-[#74B72E]/20 text-gray-800 text-sm font-medium hover:bg-[#74B72E]/10 hover:border-[#74B72E]/40 transition-all cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#74B72E]" />
                {outcome}
              </motion.span>
            ))}
          </div>

          <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-4">
            <Link
              to="/young-risers/enroll"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#74B72E] hover:bg-[#659A26] text-white font-semibold transition-all shadow-lg shadow-[#74B72E]/30 hover:shadow-xl"
            >
              <Rocket className="h-4 w-4" /> Apply Now
            </Link>
            <a
              href={brochureFile}
              download="GrowSnaps_Young_Risers_Brochure.docx"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold transition-all border border-gray-200"
            >
              <Download className="h-4 w-4" /> Download Brochure
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default YoungRisersPage;
