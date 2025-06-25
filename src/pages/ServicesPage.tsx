import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lightbulb, Users, ClipboardCheck, Puzzle as PuzzlePiece, Target, BarChart4, LineChart, PieChart, DollarSign, TrendingUp, Rocket, Share2, Globe, MessageSquare } from 'lucide-react';

import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Lightbulb size={24} />,
      title: 'Idea Validation',
      description: 'We evaluate your business concept through market research, competitor analysis, and validation techniques to assess viability and potential for success.'
    },
    {
      icon: <Users size={24} />,
      title: 'Customer Discovery',
      description: 'We help you identify and understand your ideal customers through interviews, surveys, and data analysis to inform product development and marketing strategies.'
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: 'Hypothesis Validation',
      description: 'We test your key business assumptions through structured experiments and data collection to minimize risk and optimize your business model.'
    },
    {
      icon: <PuzzlePiece size={24} />,
      title: 'Problem-Solution Fit',
      description: 'We ensure your product or service effectively addresses real customer pain points through iterative testing and refinement.'
    },
    {
      icon: <Target size={24} />,
      title: 'Product Market Fit Validation',
      description: 'We validate that your solution meets market demands and has the potential for sustainable growth and scalability.'
    },
    {
      icon: <BarChart4 size={24} />,
      title: 'Go-to-Market Strategy',
      description: 'We develop comprehensive strategies that define your value proposition, target segments, pricing, and distribution channels for successful market entry.'
    },
    {
      icon: <LineChart size={24} />,
      title: 'Business Model',
      description: 'We design and optimize your business model to create, deliver, and capture value efficiently and profitably.'
    },
    {
      icon: <PieChart size={24} />,
      title: 'Pricing Strategy',
      description: 'We develop data-driven pricing models that maximize revenue and profitability while maintaining competitive positioning.'
    },
    {
      icon: <DollarSign size={24} />,
      title: 'Cost Optimization',
      description: 'We identify opportunities to reduce operational costs while maintaining or improving quality and customer satisfaction.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Customer Acquisition',
      description: 'We create efficient strategies to attract and convert customers through optimized marketing channels and conversion funnels.'
    },
    {
      icon: <Rocket size={24} />,
      title: 'Launch Plan',
      description: 'We develop detailed launch strategies to maximize impact, generate buzz, and ensure successful market introduction.'
    },
    {
      icon: <Share2 size={24} />,
      title: 'Scale-Up Plan',
      description: 'We create actionable growth roadmaps that outline the resources, processes, and strategies needed to scale your business efficiently.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Digital Marketing',
      description: 'We implement comprehensive digital marketing strategies across multiple channels to increase brand awareness and drive qualified leads.'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Social Media Marketing',
      description: 'We develop and execute social media strategies that build community, increase engagement, and drive conversions.'
    },
  ];

  return (
    <>
      <Hero 
        title="Comprehensive Business Growth Services"
        subtitle="Our strategic consulting services are designed to help you navigate every stage of your business journey, from ideation to scaling for sustainable growth."
        imageSrc="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
            title="Comprehensive Growth Solutions"
            description="We offer a wide range of strategic consulting services designed to help businesses at every stage of their growth journey."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.05}
              />
            ))}
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