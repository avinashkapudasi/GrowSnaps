import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, Flame, TrendingUp, ArrowRight } from 'lucide-react';

import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ProgramCard from '../components/ProgramCard';
import Button from '../components/Button';

const programs = [
  {
    title: 'Young Risers',
    stageBadge: 'Early Stage',
    stageColor: '#3B82F6',
    icon: <Rocket size={24} />,
    bullets: [
      '5-phase experiential program (Grow → Snap → Build → Rise → Lead) transforming students into problem-solving creators',
      'Real-world problem discovery & validation through observation and customer interviews',
      'Strategic thinking: segmentation, market analysis, competition, value proposition',
      'AI-enabled solution design and prototype/MVP development',
      'Introduction to business fundamentals: revenue, GTM, financial basics',
      'Leadership & communication: roles, decision-making, pitching',
      'Culminates in Demo Day with idea, prototype, and business presentation',
    ],
    link: '/young-risers',
    description:
      'A 5-phase experiential program that transforms students into problem-solving creators — from real-world problem discovery to Demo Day presentations.',
  },
  {
    title: 'Venture Forge',
    stageBadge: 'Build Stage',
    stageColor: '#F97316',
    icon: <Flame size={24} />,
    bullets: [
      'Hands-on program transforming ideas into structured, market-ready ventures',
      '6-phase journey (Discover → Define → Analyze → Design → Build → Launch)',
      'Strong focus on problem validation & customer discovery',
      'Market clarity: research, competition, and opportunity sizing',
      'Value proposition creation and product thinking',
      'Rapid prototyping & MVP with iterative build–test cycles',
      'Ends with launch-ready business model and go-to-market foundation',
    ],
    link: '/contact',
    description:
      'A hands-on, 6-phase journey that transforms ideas into structured, market-ready ventures — from problem validation to a launch-ready business model.',
  },
  {
    title: 'Venture Sprint',
    stageBadge: 'Growth Stage',
    stageColor: '#10B981',
    icon: <TrendingUp size={24} />,
    bullets: [
      'High-intensity validation & acceleration program for early-stage startups',
      'Focus on eliminating uncertainty via problem-solution & customer validation',
      'Achieving product-market fit through data, feedback, and traction',
      'Strategic iteration and pivots across product, customer, and positioning',
      'Strengthening business fundamentals: revenue, costs, unit economics',
      'Market positioning & growth strategy: branding, pricing, differentiation',
      'Outcome: scalable, growth-ready venture with clarity on expansion strategy',
    ],
    link: '/contact',
    description:
      'A high-intensity validation & acceleration program for early-stage startups — from achieving product-market fit to building a scalable, growth-ready venture.',
  },
];

import programsHeroImg from '../assets/programs_hero.png';

// ...existing code...

const ProgramsPage: React.FC = () => {
  const detailRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToDetail = (index: number) => {
    detailRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Hero
        heroTagline="Choose Your Entrepreneurial Journey"
        subtitle="Turn your ideas into real startups through structured programs designed to make you a founder."
        imageSrc={programsHeroImg}
        hideServicesButton
        hideButtons
        showScrollPrompt
      />

      {/* Programs Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard
                key={program.title}
                title={program.title}
                stageBadge={program.stageBadge}
                stageColor={program.stageColor}
                description={program.description}
                icon={program.icon}
                delay={index * 0.1}
                onExplore={() => scrollToDetail(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Program Details"
            title="What You'll Experience"
            description="Dive deeper into each program and discover what makes them transformative."
            subtitleClassName="text-red-500 font-semibold text-3xl"
            titleClassName="text-primary-700 text-3xl md:text-4xl font-bold mt-2 mb-6"
          />

          <div className="space-y-16">
            {programs.map((program, index) => (
              <div
                key={program.title}
                ref={(el) => { detailRefs.current[index] = el; }}
                className="scroll-mt-28"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: '-80px' }}
                  className="grid md:grid-cols-2 gap-12 items-center"
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <span
                      className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
                      style={{
                        color: program.stageColor,
                        backgroundColor: `${program.stageColor}15`,
                      }}
                    >
                      {program.stageBadge}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                    <div className="space-y-3 mb-8">
                      {program.bullets.map((bullet, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.06 }}
                          viewport={{ once: true }}
                        >
                          <span
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: program.stageColor }}
                          />
                          <p className="text-gray-700 text-sm">{bullet}</p>
                        </motion.div>
                      ))}
                    </div>
                    <Link to={program.title === 'Young Risers' ? program.link : `${program.link}?program=${encodeURIComponent(program.title)}`}>
                      <Button
                        variant="primary"
                        className="bg-[#F9C800] hover:bg-[#F9C800]/90 text-gray-900"
                      >
                        {program.title === 'Young Risers' ? 'Apply Now' : 'Notify Me'}{' '}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <motion.div
                      className="relative rounded-2xl overflow-hidden shadow-xl"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div
                        className="aspect-[4/3] flex items-center justify-center relative overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${program.stageColor}15 0%, ${program.stageColor}30 100%)`,
                        }}
                      >
                        {/* SVG vector background decoration */}
                        <svg
                          className="absolute inset-0 w-full h-full"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          viewBox="0 0 480 360"
                          preserveAspectRatio="xMidYMid slice"
                        >
                          {/* Large bg circles */}
                          <circle cx="408" cy="54" r="130" fill={program.stageColor} fillOpacity="0.18" />
                          <circle cx="48" cy="306" r="100" fill={program.stageColor} fillOpacity="0.15" />
                          <circle cx="240" cy="180" r="200" fill={program.stageColor} fillOpacity="0.06" />
                          {/* Ring outlines */}
                          <circle cx="408" cy="54" r="160" fill="none" stroke={program.stageColor} strokeOpacity="0.20" strokeWidth="1.5" />
                          <circle cx="408" cy="54" r="190" fill="none" stroke={program.stageColor} strokeOpacity="0.12" strokeWidth="1" />
                          <circle cx="48" cy="306" r="135" fill="none" stroke={program.stageColor} strokeOpacity="0.18" strokeWidth="1.5" />
                          {/* Dotted grid */}
                          {Array.from({ length: 7 }).map((_, row) =>
                            Array.from({ length: 9 }).map((_, col) => (
                              <circle
                                key={`dot-${row}-${col}`}
                                cx={col * 60 + 30}
                                cy={row * 60 + 30}
                                r="2.5"
                                fill={program.stageColor}
                                fillOpacity="0.28"
                              />
                            ))
                          )}
                          {/* Diagonal accent lines */}
                          <line x1="0" y1="360" x2="192" y2="0" stroke={program.stageColor} strokeOpacity="0.18" strokeWidth="1.5" />
                          <line x1="288" y1="360" x2="480" y2="72" stroke={program.stageColor} strokeOpacity="0.18" strokeWidth="1.5" />
                          <line x1="0" y1="200" x2="480" y2="160" stroke={program.stageColor} strokeOpacity="0.10" strokeWidth="1" strokeDasharray="6 8" />
                          {/* Corner bracket — top-left */}
                          <path d="M 28 28 L 28 72 M 28 28 L 72 28" stroke={program.stageColor} strokeOpacity="0.50" strokeWidth="3" strokeLinecap="round" fill="none" />
                          {/* Corner bracket — bottom-right */}
                          <path d="M 452 332 L 452 288 M 452 332 L 408 332" stroke={program.stageColor} strokeOpacity="0.50" strokeWidth="3" strokeLinecap="round" fill="none" />
                          {/* Corner bracket — top-right (lighter) */}
                          <path d="M 452 28 L 452 60 M 452 28 L 420 28" stroke={program.stageColor} strokeOpacity="0.30" strokeWidth="2" strokeLinecap="round" fill="none" />
                          {/* Corner bracket — bottom-left (lighter) */}
                          <path d="M 28 332 L 28 300 M 28 332 L 60 332" stroke={program.stageColor} strokeOpacity="0.30" strokeWidth="2" strokeLinecap="round" fill="none" />
                          {/* Triangle accent — top-right */}
                          <polygon points="440,36 468,86 412,86" fill={program.stageColor} fillOpacity="0.22" />
                          {/* Diamond accent — mid-left */}
                          <polygon points="38,162 58,144 78,162 58,180" fill={program.stageColor} fillOpacity="0.25" />
                          {/* Square accent — bottom-right area */}
                          <rect x="380" y="280" width="28" height="28" rx="4" fill={program.stageColor} fillOpacity="0.18" transform="rotate(15 394 294)" />
                          {/* Cross/plus accent */}
                          <line x1="420" y1="200" x2="420" y2="240" stroke={program.stageColor} strokeOpacity="0.30" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="400" y1="220" x2="440" y2="220" stroke={program.stageColor} strokeOpacity="0.30" strokeWidth="2.5" strokeLinecap="round" />
                          {/* Small circle cluster */}
                          <circle cx="80" cy="80" r="6" fill={program.stageColor} fillOpacity="0.22" />
                          <circle cx="100" cy="72" r="4" fill={program.stageColor} fillOpacity="0.16" />
                          <circle cx="68" cy="96" r="3" fill={program.stageColor} fillOpacity="0.14" />
                          {/* Dashed arc */}
                          <path d="M 120 300 Q 240 200 360 300" fill="none" stroke={program.stageColor} strokeOpacity="0.20" strokeWidth="2" strokeDasharray="8 6" />
                          {/* Horizontal rule near top */}
                          <line x1="120" y1="24" x2="320" y2="24" stroke={program.stageColor} strokeOpacity="0.18" strokeWidth="1" strokeDasharray="4 6" />
                        </svg>

                        {/* Floating program icon */}
                        <motion.div
                          className="relative z-10 w-24 h-24 rounded-3xl flex items-center justify-center shadow-lg"
                          style={{ backgroundColor: 'white', color: program.stageColor }}
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <div className="scale-[2]">{program.icon}</div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramsPage;