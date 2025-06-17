import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lightbulb, Users, LineChart, Rocket, ArrowRight } from 'lucide-react';

import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: <Lightbulb size={24} />,
      title: 'Idea Validation',
      description: 'We help validate your business ideas through market research, competitor analysis, and customer feedback to ensure viability before investing resources.'
    },
    {
      icon: <Users size={24} />,
      title: 'Customer Discovery',
      description: 'Understand your target audience through in-depth research, interviews, and data analysis to create products that truly meet customer needs.'
    },
    {
      icon: <LineChart size={24} />,
      title: 'Go-to-Market Strategy',
      description: 'Develop comprehensive strategies that define your value proposition, target segments, pricing, and distribution channels for successful market entry.'
    },
    {
      icon: <Rocket size={24} />,
      title: 'Scale-Up Plan',
      description: 'Create actionable growth roadmaps that outline the resources, processes, and strategies needed to scale your business efficiently and sustainably.'
    }
  ];

  return (
    <>
      <Hero 
        title="Transform Ideas into Scalable Businesses"
        subtitle="We empower startups and established businesses with strategic insights, innovative solutions, and data-driven execution to achieve sustainable growth and competitive advantage."
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
              <span className="text-primary-600 font-semibold">About GrowSnaps</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Your Partner in Business Growth</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At GrowSnaps Global Ventures, we believe in transforming innovative ideas into sustainable businesses. With our deep understanding of market trends and consumer behavior, we provide end-to-end guidance—from idea validation to scaling up—ensuring our clients achieve sustainable growth and competitive advantage.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our expertise spans across customer discovery, hypothesis validation, product-market fit, go-to-market strategies, pricing optimization, digital marketing, and more. Whether you're launching a new venture or looking to scale efficiently, our tailored strategies help you navigate every stage of your business journey.
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
            title="Comprehensive Business Growth Services"
            description="We offer a wide range of strategic consulting services designed to help businesses at every stage of their growth journey, from ideation to market expansion."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services">
              <Button variant="outline">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
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
                  className="border-white text-white hover:bg-white hover:text-primary-600"
                >
                  Schedule a Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Client Success Stories"
            title="What Our Clients Say"
            description="Discover how our strategic consulting has helped businesses across industries achieve remarkable growth and success."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="GrowSnaps helped us validate our market approach and refine our go-to-market strategy. Their insights were invaluable to our success."
              name="Sarah Johnson"
              title="CEO"
              company="TechStart Solutions"
              imageSrc="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600"
              delay={0.1}
            />
            <TestimonialCard
              quote="The team's customer discovery process revealed crucial insights that completely transformed our product development roadmap."
              name="Michael Chen"
              title="Founder"
              company="InnovateLab"
              imageSrc="https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&w=1600"
              delay={0.2}
            />
            <TestimonialCard
              quote="Their pricing strategy consultation helped us increase our margins by 22% while maintaining our competitive edge."
              name="Jessica Williams"
              title="COO"
              company="Growth Dynamics"
              imageSrc="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
              delay={0.3}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;