import React from 'react';
import { motion } from 'framer-motion';
import PortfolioCard from '../components/PortfolioCard';
import SectionHeading from '../components/SectionHeading';

const PortfolioPage: React.FC = () => {
  const categories = [
    "All",
    "Startups",
    "Scale-ups",
    "Enterprise",
    "E-commerce",
    "SaaS",
    "Healthcare",
  ];

  const projects = [
    {
      title: "TechStart Launch Strategy",
      category: "Startups",
      imageSrc: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Developed comprehensive go-to-market strategy for a B2B SaaS startup, resulting in successful launch and 300% growth in first year."
    },
    {
      title: "HealthPlus Scale-Up Plan",
      category: "Healthcare",
      imageSrc: "https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Created scalable growth strategy for healthcare technology platform, optimizing acquisition channels and improving unit economics."
    },
    {
      title: "EcoShop Revenue Optimization",
      category: "E-commerce",
      imageSrc: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Redesigned pricing strategy and customer journey for sustainable e-commerce brand, increasing average order value by 42%."
    },
    {
      title: "DataSense Market Expansion",
      category: "SaaS",
      imageSrc: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Executed international expansion strategy for data analytics platform, successfully entering 3 new markets within 6 months."
    },
    {
      title: "Enterprise Solution Transformation",
      category: "Enterprise",
      imageSrc: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Guided digital transformation for Fortune 500 company, optimizing internal processes and customer-facing solutions."
    },
    {
      title: "FoodTech Product Validation",
      category: "Startups",
      imageSrc: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Conducted extensive customer discovery and hypothesis validation for food delivery startup, pivoting to successful business model."
    }
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-primary-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-primary-100 text-lg">
              Explore our successful client engagements and discover how we've helped businesses across various industries achieve sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <PortfolioCard
                key={project.title}
                title={project.title}
                category={project.category}
                imageSrc={project.imageSrc}
                description={project.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              These are just a few examples of our successful client engagements.
            </p>
            
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              subtitle="Our Impact"
              title="Driving Measurable Results"
              description="Our strategic consulting has helped businesses achieve remarkable growth and success across various metrics."
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">100+</div>
                <p className="text-gray-600">Clients Served</p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">85%</div>
                <p className="text-gray-600">Success Rate</p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">$50M+</div>
                <p className="text-gray-600">Revenue Generated</p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">12+</div>
                <p className="text-gray-600">Industries</p>
              </motion.div>
            </div>
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
              Ready to Become Our Next Success Story?
            </motion.h2>
            <motion.p 
              className="text-lg text-primary-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Let's discuss how our strategic consulting can help you achieve your business goals and drive sustainable growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a 
                href="/contact"
                className="bg-white hover:bg-gray-100 text-primary-600 font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center justify-center"
              >
                Start Your Journey
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;