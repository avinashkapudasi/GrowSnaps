import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  imageSrc: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  title, 
  company, 
  delay = 0 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Truncate quote to approximately 150 characters
  const truncatedQuote = quote.length > 150 ? quote.substring(0, 150) + '...' : quote;

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md p-6 border border-gray-100 h-full flex flex-col cursor-pointer transition-all duration-500 ease-out"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div 
        className="mb-4 text-primary-600"
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <Quote size={32} className="fill-current opacity-50" />
      </motion.div>
      
      <div className="flex-grow mb-6">
        <motion.p 
          className="text-gray-700 italic text-sm leading-relaxed"
          layout
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          "{isHovered ? quote : truncatedQuote}"
        </motion.p>
        {quote.length > 150 && !isHovered && (
          <motion.p 
            className="text-primary-600 text-xs mt-2 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            Hover to read more...
          </motion.p>
        )}
      </div>
      
      <motion.div 
        className="flex items-center mt-auto"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <motion.h4 
            className="font-medium text-gray-900"
            whileHover={{ color: "#74B72E" }}
            transition={{ duration: 0.2 }}
          >
            {name}
          </motion.h4>
          <motion.p 
            className="text-sm text-gray-600"
            whileHover={{ color: "#4B5563" }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.p>
          <motion.p 
            className="text-sm text-gray-500 font-medium"
            whileHover={{ color: "#6B7280" }}
            transition={{ duration: 0.2 }}
          >
            {company}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;