import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  category: string;
  imageSrc: string;
  description: string;
  link?: string;
  delay?: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  category,
  imageSrc,
  description,
  link,
  delay = 0
}) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="aspect-video overflow-hidden bg-gray-200">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block text-primary-400 text-sm font-medium mb-2">{category}</span>
          <h3 className="text-xl text-white font-bold mb-2">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          
          {link && (
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center text-[#333333] bg-[#F9C800] hover:bg-[#F9C800]/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              View Project
              <ExternalLink size={16} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;