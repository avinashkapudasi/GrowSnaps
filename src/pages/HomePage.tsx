import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lightbulb, Users, Rocket } from 'lucide-react';

import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';

import Button from '../components/Button';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: <Lightbulb size={24} />,
      title: 'Startup Acceleration'
    },
    {
      icon: <Users size={24} />,
      title: 'Innovation Ecosystem Design'
    },
    {
      icon: <Rocket size={24} />,
      title: 'Corporate Growth Consulting'
    }
  ];

  return (
    <>
      <Hero 
        title=""
        subtitle=""
        carousel
        showScrollPrompt={false}
      />

      {/* Vision, Mission & Goals Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Build a generation of young innovators who think boldly, act early, and create meaningful impact through entrepreneurship.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Enable teens to discover problems, build solutions, and launch real ventures through hands-on learning, mentorship, and structured startup frameworks.
            </p>
          </motion.div>

          {/* Goals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Goals</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { num: '1', title: 'From Ideas to Execution', desc: 'Move students from thinking to building real solutions' },
                { num: '2', title: 'Entrepreneurial Mindset', desc: 'Develop critical thinking, creativity, and ownership' },
                { num: '3', title: 'Real-World Projects', desc: 'Work on actual startup ideas and prototypes' },
                { num: '4', title: 'Future-Ready Skills', desc: 'Build confidence, leadership, and problem-solving ability' },
              ].map((goal, idx) => (
                <motion.div
                  key={goal.num}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#74B72E] flex items-center justify-center text-white font-bold">
                    {goal.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{goal.title}</h3>
                    <p className="text-sm text-gray-600">{goal.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Differentiators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Key Differentiators</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { title: 'Execution over Theory', desc: 'Students actively build, test, and refine ideas — not just learn concepts' },
                { title: 'Real Startup Journey', desc: 'From problem discovery to MVP and pitching — a complete founder experience' },
                { title: 'Structured Frameworks', desc: 'Clear step-by-step process with creative freedom to innovate' },
                { title: 'Real-World Exposure', desc: 'Learn from founders, mentors, and industry experts through live interactions' },
              ].map((diff, idx) => (
                <motion.div
                  key={diff.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#74B72E]"
                >
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{diff.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{diff.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="p-6 bg-[#74B72E]/10 border border-[#74B72E]/30 rounded-lg"
            >
              <p className="text-lg text-gray-900 font-semibold">
                We don't just teach entrepreneurship — <span className="text-[#74B72E]">we help students become Founders.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Expertise"
            title="Accelerating Growth Through Precision Strategy"
            description="We offer a wide range of strategic consulting services designed to help businesses at every stage of their growth journey, from ideation to market expansion."
            subtitleClassName="text-red-500 font-semibold text-3xl"
            titleClassName="text-primary-700 text-3xl md:text-3xl font-bold mt-2 mb-6"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 4).map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          {/* Center the 5th card */}
          {services.length > 4 && (
            <div className="flex justify-center mt-8">
              <div className="w-full max-w-sm">
                <ServiceCard
                  key={services[4].title}
                  icon={services[4].icon}
                  title={services[4].title}
                  delay={0.4}
                />
              </div>
            </div>
          )}

          <div className="mt-12 text-center">
            <Link to="/services">
              <Button 
                variant="outline" 
                className="bg-[#F9C800] text-[#333333] hover:bg-[#F9C800] hover:text-[#333333] border-[#F9C800]"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default HomePage;