import React from 'react';
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
  imageSrc,
  delay = 0 
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="mb-4 text-primary-600">
        <Quote size={32} className="fill-current opacity-50" />
      </div>
      
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      
      <div className="flex items-center">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{title}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;