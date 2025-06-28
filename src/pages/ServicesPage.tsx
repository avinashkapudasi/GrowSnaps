import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lightbulb, Users, ClipboardCheck } from 'lucide-react';

import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';

const ServicesPage: React.FC = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const services = [
    {
      icon: <Lightbulb size={24} />,
      title: 'Startup Acceleration',
      description: 'From idea validation to MVP launch and investor readiness.',
      details: [
        'Idea Validation',
        'Customer Discovery',
        'Hypothesis Validation',
        'Problem–Solution Fit',
        'Product–Market Fit Validation',
        'Business Model Design',
        'Go-to-Market (GTM) Strategy',
        'Pricing Strategy',
        'Cost Optimization'
      ]
    },
    {
      icon: <Users size={24} />,
      title: 'Institutional Innovation Ecosystem Building',
      description: 'Building entrepreneurship programs and incubation frameworks for institutions.',
      details: [
        'Entrepreneurial Mindset & Problem Discovery',
        'Market Understanding & Solution Development',
        'Building & Launching the Venture',
        'NEP-aligned, modular learning content',
        'A dedicated resource/mentor for your institution',
        'Frameworks to make student teams funding-ready',
        'Support to guide select student teams to achieve market fit'
      ]
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: 'Corporate Growth Consulting',
      description: 'Strategic support for scaling, product-market alignment, and brand positioning.',
      details: [
        'Business Model Design',
        'Go-to-Market (GTM) Strategy',
        'Pricing Strategy',
        'Cost Optimization',
        'Customer Acquisition Planning',
        'Launch Roadmap & Execution',
        'Scale-Up Strategy',
        'Digital Marketing Strategy'
      ]
    },
  ];

  return (
    <>
      <Hero 
        title="Accelerating Growth Through Precision Strategy"
        subtitle="Our strategic consulting services are designed to help you navigate every stage of your business journey, from ideation to scaling for sustainable growth."
        imageSrc="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
        hideServicesButton={true}
      />

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <SectionHeading
                subtitle="Our Approach"
                title="Strategic, Data-Driven, and Result-Oriented"
                description=""
                alignment="left"
              />
              
              <div className="space-y-6">                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="w-8 h-8 bg-[#F9C800]/20 text-[#F9C800] rounded-full flex items-center justify-center mr-3">1</span>
                    Comprehensive Analysis
                  </h3>
                  <p className="text-gray-600 pl-11">
                    We start with a thorough assessment of your business, market, and competition to identify opportunities and challenges.
                  </p>
                </div>
                  <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="w-8 h-8 bg-[#F9C800]/20 text-[#F9C800] rounded-full flex items-center justify-center mr-3">2</span>
                    Strategy Development
                  </h3>
                  <p className="text-gray-600 pl-11">
                    We create tailored strategies based on data-driven insights, industry expertise, and proven methodologies.
                  </p>
                </div>
                  <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="w-8 h-8 bg-[#F9C800]/20 text-[#F9C800] rounded-full flex items-center justify-center mr-3">3</span>
                    Implementation Support
                  </h3>
                  <p className="text-gray-600 pl-11">
                    We work alongside your team to ensure successful execution, providing guidance and expertise throughout the process.
                  </p>
                </div>
                  <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="w-8 h-8 bg-[#F9C800]/20 text-[#F9C800] rounded-full flex items-center justify-center mr-3">4</span>
                    Continuous Optimization
                  </h3>
                  <p className="text-gray-600 pl-11">
                    We measure results, gather feedback, and continuously refine strategies to maximize ROI and ensure long-term success.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Services"
            title="We Grow What's Next — Startups, Strategies and Ecosystems."
            description="We offer a wide range of strategic consulting services designed to help businesses at every stage of their growth journey."
            titleClassName="text-primary-700 font-semibold text-3xl"
            
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllServices ? services : services.slice(0, 3)).map((service, index) => (
              <ServiceCard
          key={service.title}
          icon={service.icon}
          title={service.title}
          description={service.description}
          details={service.details}
          delay={index * 0.05}
              />
            ))}
          </div>

          {services.length > 3 && (
            <div className="mt-12 text-center">
              <Button 
          variant="outline"
          className="bg-[#F9C800] text-[#333333] hover:bg-[#F9C800] hover:text-[#333333] border-[#F9C800]"
          onClick={() => setShowAllServices(!showAllServices)}
              >
          {showAllServices ? 'View Less Services' : 'View More Services'}
              </Button>
            </div>
          )}
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
              Ready to Accelerate Your Growth?
            </motion.h2>
            <motion.p 
              className="text-lg text-primary-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Schedule a consultation with our team to discuss your business goals and how we can help you achieve them with our strategic consulting services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/contact">                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-[#F9C800] hover:bg-[#F9C800]/90 text-[#333333] border-none"
                >
                  Contact Us Today
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;