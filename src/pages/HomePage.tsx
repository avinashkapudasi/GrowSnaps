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
        title="From Spark to Scale — We Grow Innovation at Every Stage."
        subtitle="GrowSnaps Global Ventures partners with students, startups, and institutions to build powerful entrepreneurial ecosystems through hands-on training, innovation modules, and strategy consulting."
        imageSrc="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
              <h2 className="text-primary-700 text-3xl md:text-4xl font-bold mt-2 mb-6">Your Partner in Strategy, Startup Success, and Innovation Culture.</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
              GrowSnaps Global Ventures is a strategy and innovation consulting firm that partners with educational institutions, startups, and established businesses to unlock growth and drive meaningful impact.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                For startups and enterprises, we offer end-to-end consulting across product strategy, brand positioning, go-to-market planning, and business scaling. Whether you're validating an idea, launching a product, or repositioning for growth, our hands-on, outcome-driven approach ensures clarity, speed, and sustainability.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
               We help institutions build robust, NEP-aligned innovation ecosystems that inspire entrepreneurship and foster intrapreneurship among students. Through structured programs, we guide student innovators from problem discovery to venture creation — turning campuses into launchpads for real-world impact.

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

      {/* CTA Section */}
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
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-lg text-primary-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Let's discuss how our strategic consulting can help you achieve sustainable growth and competitive advantage in your market.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-[#F9C800] text-[#333333] hover:bg-[#F9C800] hover:text-[#333333] border-[#F9C800]"
                >
                  Schedule a Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default HomePage;