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

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
                <span className="text-red-500 font-semibold text-3xl">About GrowSnaps</span>
              <p className="text-gray-600 mb-6 leading-relaxed mt-4">
                GrowSnaps Global Ventures is an elite strategy and innovation consulting firm dedicated to architecting the next generation of market-leading ventures by bridging the gap between academic brilliance and commercial excellence.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We drive impact through a sophisticated, multi-tiered ecosystem: <strong>Young Risers</strong> cultivates a creator mindset in students through a 5-phase experiential journey (Grow → Lead) focused on real-world problem discovery and AI-driven prototyping; <strong>Venture Forge</strong> provides a hands-on, 6-phase framework (Discover → Launch) that transforms raw ideas into structured, market-ready businesses through rigorous validation and iterative product thinking; and <strong>Venture Sprint</strong> offers a high-intensity acceleration path for early-stage startups to eliminate market uncertainty, master unit economics, and achieve definitive product-market fit.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                By integrating end-to-end consulting with structured innovation programs, GrowSnaps transforms campuses into launchpads and startups into scalable enterprises — ensuring every innovation is backed by strategic clarity, operational speed, and long-term sustainability.
              </p>
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Business team meeting" 
                className="w-full h-auto" 
              />
            </motion.div>
          </div>
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