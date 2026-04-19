import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, X } from 'lucide-react';

import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';

interface Mentor {
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  image: string;
  program: string;
  programColor: string;
  linkedin?: string;
  twitter?: string;
}

const mentors: Mentor[] = [
  {
    name: 'Hari Goutham',
    role: 'Startup Strategy Mentor',
    expertise: ['Business Strategy', 'Go-to-Market', 'Fundraising'],
    bio: 'With 5+ years of experience in startup ecosystems, Hari has mentored over 100 startups from ideation to scale. He specializes in business model innovation and investor readiness.',
    image: new URL('../assets/Hari.jpeg', import.meta.url).href,
    program: 'Venture Sprint',
    programColor: '#10B981',
    linkedin: '#',
  },
  {
    name: 'Namrata Yantrapragada',
    role: 'Co-founder & CEO, GrowSnaps Global Ventures',
    expertise: ['Product Strategy', 'Customer Discovery', 'Market Research', 'Startup Building', 'Go-to-Market Strategy', 'Design Thinking'],
    bio: 'Namrata is a dynamic entrepreneur and product strategist focused on building health-centric and impact-driven ventures. She designs experiential entrepreneurship programs enabling students to think critically, validate real-world problems, and build scalable solutions. With a background in pharmacy and expertise in product development and startup execution, she mentors aspiring entrepreneurs in problem discovery, customer validation, and building sustainable, user-centric businesses.',
    image: new URL('../assets/namrata.jpeg', import.meta.url).href,
    program: 'Venture Forge',
    programColor: '#F97316',
    linkedin: 'https://www.linkedin.com/in/namrata-yantrapragada-a74995173',
  },
];

const MentorCard: React.FC<{ mentor: Mentor; index: number; onClick: () => void }> = ({ mentor, index, onClick }) => {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, margin: '-80px' }}
      whileHover={{
        y: -10,
        rotateX: 4,
        rotateY: -3,
        scale: 1.03,
        boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.25)',
      }}
      style={{ perspective: 900, transformStyle: 'preserve-3d' }}
      onClick={onClick}
    >
      {/* Full-size photo — always visible */}
      <div className="relative h-[420px] overflow-hidden">
        <motion.img
          src={mentor.image}
          alt={mentor.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Default overlay: name + role at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
        <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
          <h3 className="text-xl font-bold text-white mb-1">{mentor.name}</h3>
          <p className="text-sm text-[#F9C800] font-semibold">{mentor.role}</p>
        </div>

        {/* Hover overlay: preview (no program badge) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
          <motion.div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-xl font-bold text-white mb-1">{mentor.name}</h3>
            <p className="text-sm text-[#F9C800] font-semibold mb-3">{mentor.role}</p>
            <p className="text-sm text-gray-200 leading-relaxed mb-4 line-clamp-3">{mentor.bio}</p>

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {mentor.expertise.slice(0, 3).map((skill) => (
                <span key={skill} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/15 text-white backdrop-blur-sm">
                  {skill}
                </span>
              ))}
              {mentor.expertise.length > 3 && (
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/15 text-white backdrop-blur-sm">
                  +{mentor.expertise.length - 3} more
                </span>
              )}
            </div>

            <p className="text-xs text-white/60 font-medium tracking-wide">Click to view full profile →</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Mentor Detail Modal ── */
const MentorModal: React.FC<{ mentor: Mentor | null; onClose: () => void }> = ({ mentor, onClose }) => (
  <AnimatePresence>
    {mentor && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Panel */}
        <motion.div
          className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden z-10 max-h-[90vh] flex flex-col"
          initial={{ scale: 0.92, y: 24, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.92, y: 24, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header image strip */}
          <div className="relative h-56 flex-shrink-0 overflow-hidden">
            <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="absolute bottom-5 left-6">
              <h2 className="text-2xl font-bold text-white">{mentor.name}</h2>
              <p className="text-sm text-[#F9C800] font-semibold">{mentor.role}</p>
            </div>
          </div>

          {/* Body */}
          <div className="overflow-y-auto p-6 space-y-5">
            {/* Bio */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">About</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{mentor.bio}</p>
            </div>

            {/* Expertise */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {mentor.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1 rounded-full border"
                    style={{ color: mentor.programColor, borderColor: `${mentor.programColor}40`, backgroundColor: `${mentor.programColor}10` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social */}
            {(mentor.linkedin || mentor.twitter) && (
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                {mentor.linkedin && (
                  <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#0A66C2] transition-colors">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                )}
                {mentor.twitter && (
                  <a href={mentor.twitter} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#1DA1F2] transition-colors">
                    <Twitter className="h-4 w-4" /> Twitter
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const MentorsPage: React.FC = () => {
  const [activeMentor, setActiveMentor] = useState<Mentor | null>(null);

  return (
    <>
      <Hero
        title="Meet Our Mentors"
        subtitle="Industry leaders, seasoned entrepreneurs, and domain experts who guide our participants at every step of their entrepreneurial journey."
        imageSrc="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
        primaryButtonText="Join Us"
        primaryButtonLink="/contact?program=Mentorship"
        hideServicesButton
      />

      {/* Mentors Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Mentors"
            title="Mentors in Our Programs"
            description="Our mentors bring real-world experience across industries — from tech and finance to design and marketing — to help you succeed."
            subtitleClassName="text-red-500 font-semibold text-3xl"
            titleClassName="text-primary-700 text-3xl md:text-4xl font-bold mt-2 mb-6"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {mentors.map((mentor, index) => (
              <MentorCard key={mentor.name} mentor={mentor} index={index} onClick={() => setActiveMentor(mentor)} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Mentors */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Why Our Mentors"
            title="What Makes Our Mentorship Unique"
            description="We don't just assign mentors — we match you with the right guide for your stage and domain."
            subtitleClassName="text-red-500 font-semibold text-3xl"
            titleClassName="text-primary-700 text-3xl md:text-4xl font-bold mt-2 mb-6"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Stage-Matched',
                description: 'Each mentor is aligned to a specific program stage — early, build, or growth — so the guidance is always relevant.',
                color: '#3B82F6',
              },
              {
                title: 'Hands-On Approach',
                description: "Our mentors don't just advise — they roll up their sleeves and work alongside you to solve real problems.",
                color: '#F97316',
              },
              {
                title: 'Industry Network',
                description: "Get access to our mentors' vast network of investors, partners, and industry contacts to accelerate your growth.",
                color: '#10B981',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center text-lg font-bold text-white" style={{ backgroundColor: item.color }}>
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor detail modal */}
      <MentorModal mentor={activeMentor} onClose={() => setActiveMentor(null)} />
    </>
  );
};

export default MentorsPage;
