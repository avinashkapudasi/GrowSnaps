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

const ProgramsPage: React.FC = () => {
  const detailRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToDetail = (index: number) => {
    detailRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Hero
        title="Our Programs"
        subtitle="From exploration to execution to scaling — structured programs designed to build real entrepreneurs at every stage."
        imageSrc="https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=1600"
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        hideServicesButton
      />

      {/* Programs Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Programs"
            title="Choose Your Entrepreneurial Journey"
            description="From exploration to execution to scaling — find your stage."
            subtitleClassName="text-red-500 font-semibold text-3xl"
            titleClassName="text-primary-700 text-3xl md:text-4xl font-bold mt-2 mb-6"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard
                key={program.title}
                title={program.title}
                stageBadge={program.stageBadge}
                stageColor={program.stageColor}
                description={program.description}
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
                        {program.title === 'Young Risers' ? 'Apply Now' : 'Get in Touch'}{' '}
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
                        className="aspect-[4/3] bg-gradient-to-br flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${program.stageColor}15 0%, ${program.stageColor}30 100%)`,
                        }}
                      >
                        <motion.div
                          className="w-24 h-24 rounded-3xl flex items-center justify-center shadow-lg"
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

      {/* CTA */}
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
              Ready to Start Your Entrepreneurial Journey?
            </motion.h2>
            <motion.p
              className="text-lg text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Whether you're a student exploring ideas or a startup ready to scale — we have the right program for you.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/young-risers/enroll">
                <Button variant="primary" size="lg" className="bg-[#74B72E] hover:bg-[#659A26] text-white">
                  <Rocket className="mr-2 h-4 w-4" /> Apply to Young Risers
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-[#F9C800] text-gray-900 hover:bg-[#F9C800]/90 border-none"
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

export default ProgramsPage;