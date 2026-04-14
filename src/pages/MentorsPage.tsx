import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, ArrowRight } from 'lucide-react';

import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

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
    name: 'Rajesh Sharma',
    role: 'Startup Strategy Mentor',
    expertise: ['Business Strategy', 'Go-to-Market', 'Fundraising'],
    bio: 'With 15+ years of experience in startup ecosystems, Rajesh has mentored over 100 startups from ideation to scale. He specializes in business model innovation and investor readiness.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    program: 'Venture Sprint',
    programColor: '#10B981',
    linkedin: '#',
  },
  {
    name: 'Priya Nair',
    role: 'Innovation & Design Thinking Coach',
    expertise: ['Design Thinking', 'Product Strategy', 'UX Research'],
    bio: 'Priya brings a human-centered design approach to entrepreneurship. She helps founders understand their customers deeply and build products people love.',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    program: 'Venture Forge',
    programColor: '#F97316',
    linkedin: '#',
    twitter: '#',
  },
];

const MentorCard: React.FC<{ mentor: Mentor; index: number }> = ({ mentor, index }) => {
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

        {/* Hover overlay: full details revealed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
          <motion.div
            className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500"
          >
            {/* Program badge */}
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white mb-3"
              style={{ backgroundColor: mentor.programColor }}
            >
              {mentor.program}
            </span>

            <h3 className="text-xl font-bold text-white mb-1">{mentor.name}</h3>
            <p className="text-sm text-[#F9C800] font-semibold mb-3">{mentor.role}</p>
            <p className="text-sm text-gray-200 leading-relaxed mb-4 line-clamp-3">{mentor.bio}</p>

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {mentor.expertise.map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/15 text-white backdrop-blur-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-3 border-t border-white/20">
              {mentor.linkedin && (
                <a
                  href={mentor.linkedin}
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label={`${mentor.name} LinkedIn`}
                >
                  <Linkedin size={18} />
                </a>
              )}
              {mentor.twitter && (
                <a
                  href={mentor.twitter}
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label={`${mentor.name} Twitter`}
                >
                  <Twitter size={18} />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const MentorsPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Meet Our Mentors"
        subtitle="Industry leaders, seasoned entrepreneurs, and domain experts who guide our participants at every step of their entrepreneurial journey."
        imageSrc="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
        primaryButtonText="Explore Programs"
        primaryButtonLink="/programs"
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
              <MentorCard key={mentor.name} mentor={mentor} index={index} />
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
                description:
                  'Each mentor is aligned to a specific program stage — early, build, or growth — so the guidance is always relevant.',
                color: '#3B82F6',
              },
              {
                title: 'Hands-On Approach',
                description:
                  'Our mentors don\'t just advise — they roll up their sleeves and work alongside you to solve real problems.',
                color: '#F97316',
              },
              {
                title: 'Industry Network',
                description:
                  'Get access to our mentors\' vast network of investors, partners, and industry contacts to accelerate your growth.',
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
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center text-lg font-bold text-white"
                  style={{ backgroundColor: item.color }}
                >
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us as a Mentor CTA */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span
              className="inline-block text-sm font-semibold uppercase tracking-widest text-[#F9C800] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Give Back &amp; Grow
            </motion.span>
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Join Us as a Mentor
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Share your expertise, inspire the next generation of entrepreneurs, and be part of a
              community that's shaping the future of innovation in India. Whether you're a seasoned
              founder, industry leader, or domain expert — there's a place for you here.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white px-10 py-4 text-base font-bold rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300"
                >
                  Become a Mentor <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Existing Learn CTA */}
      <section className="py-16 bg-[#708090] text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Want to Learn from the Best?
            </motion.h2>
            <motion.p
              className="text-lg text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Join one of our programs and get paired with a mentor who can transform your entrepreneurial journey.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/programs">
                <Button variant="primary" size="lg" className="bg-[#F9C800] hover:bg-[#F9C800]/90 text-gray-900">
                  View Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MentorsPage;
