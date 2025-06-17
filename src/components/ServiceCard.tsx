import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-primary-500 transition-all duration-300 hover:shadow-xl group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-5 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {/* <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
        <span className="mr-1">Learn more</span>
        <ArrowRight size={16} />
      </div> */}
    </motion.div>
  );
};

export default ServiceCard;