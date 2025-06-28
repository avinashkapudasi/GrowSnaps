import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';
import SectionHeading from '../components/SectionHeading';

const PortfolioPage: React.FC = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  const testimonials = [
    {
      quote: "GrowSnaps played a pivotal role in shaping our journey from a raw concept into a structured, market-ready venture. Their strategic guidance helped us build a clear product roadmap, develop our MVP, and secure over ₹15 lakhs in grant funding. What started as an idea is now a validated startup with real momentum — thanks to their mentorship and execution support.",
      name: " ",
      title: "— Founder",
      company: "Savoricious Foods and Beverages Pvt Ltd",
      imageSrc: " "
    },
    {
      quote: "GrowSnaps Global Ventures played a foundational role in transforming our venture from a raw idea into a structured and investor-ready venture. Their team helped us shape our concept, validate the opportunity, and rapidly build a Minimum Viable Product (MVP) that aligned with real market needs. With their strategic guidance, we were able to articulate our vision effectively and secure grants totaling INR 1 crore. GrowSnaps has been more than a consulting partner—they've been a catalyst in our entrepreneurial journey.",
      name: " ",
      title: "— Co-founder",
      company: "Asthma Monitoring MedTech Startup",
      imageSrc: " "
    },
    {
      quote: "Partnering with GrowSnaps Global Ventures was a transformative experience for us. Their deep expertise and hands-on guidance played a pivotal role in helping us identify and build the right go-to-market channels. They worked closely with our team to develop a robust pricing strategy tailored to our customer segments and market dynamics. Most importantly, GrowSnaps supported us in crafting actionable launch plans that positioned us for a successful entry into the market. Their strategic insight and collaborative approach have been invaluable in accelerating our growth trajectory.",
      name: " ",
      title: "— CEO",
      company: "MedTech Startup for Heart Health Monitoring (US based)",
      imageSrc: " "
    },
    {
      quote: "Working with Growsnaps was a game-changer for Garden Balcony. What started as a simple idea—to make balcony gardening and urban farming accessible to everyone—became a structured, executable startup model thanks to their guidance. Growsnaps helped us streamline our vision, design customer-centric offerings, and build a solid go-to-market strategy. Their deep understanding of grassroots innovation and startup execution made all the difference. Today, Garden Balcony is growing steadily, and we credit a huge part of that momentum to the strategic support and mentorship from the Growsnaps team.",
      name: " ",
      title: "— Founder",
      company: "Garden Balcony",
      imageSrc: " "
    },
    {
      quote: "Partnering with Growsnaps was instrumental in shaping the foundation of Forewealth. Their strategic insights helped us position ourselves uniquely in the competitive world of investment banking and wealth management. From refining our value proposition to creating a strong brand narrative and execution roadmap, the Growsnaps team brought clarity, speed, and precision to every stage of our journey. Their ability to align our financial services with real customer needs helped us launch with confidence and direction. Growsnaps is more than a consultancy—they're true partners in building future-forward financial ventures.",
      name: " ",
      title: "— Co-Founder",
      company: "Forewealth",
      imageSrc: " "
    }
  ];

  const loadMore = () => {
    setVisibleTestimonials(prev => Math.min(prev + 3, testimonials.length));
  };

  const showLess = () => {
    setVisibleTestimonials(3);
  };

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

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Client Success Stories"
            title="What Our Clients Say"
            description="Discover how our strategic consulting has helped businesses across industries achieve remarkable growth and success."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {testimonials.slice(0, visibleTestimonials).map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.company}-${index}`}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  layout
                >
                  <TestimonialCard
                    quote={testimonial.quote}
                    name={testimonial.name}
                    title={testimonial.title}
                    company={testimonial.company}
                    imageSrc={testimonial.imageSrc}
                    delay={0}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Load More/Show Less Buttons */}
          <div className="flex justify-center mt-12 gap-4">
            {visibleTestimonials < testimonials.length && (
              <motion.button
                onClick={loadMore}
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Load More
                <motion.svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ y: [0, 2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
            )}
            
            {visibleTestimonials > 3 && (
              <motion.button
                onClick={showLess}
                className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Show Less
                <motion.svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </motion.svg>
              </motion.button>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              subtitle=" "
              title="IMPACT METRICS"
              description="Our strategic consulting has helped businesses achieve remarkable growth and success across various metrics, Our clients are recognized by IIT-H, IIM-V, Tetra Pak, WEHub, T-Hub"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-primary-600 mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
                  viewport={{ once: true }}
                >
                  60+
                </motion.div>
                <p className="text-gray-600">Clients Served</p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-primary-600 mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
                  viewport={{ once: true }}
                >
                  1Cr+
                </motion.div>
                <p className="text-gray-600">Grants Raised</p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-primary-600 mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
                  viewport={{ once: true }}
                >
                  1000+
                </motion.div>
                <p className="text-gray-600">Students Trained</p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-primary-600 mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
                  viewport={{ once: true }}
                >
                  15+
                </motion.div>
                <p className="text-gray-600">Institutional Collaborations</p>
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
