import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  overlay?: boolean;
  hideServicesButton?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageSrc = 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1600',
  primaryButtonText = 'Get in Touch',
  primaryButtonLink = '/contact',
  overlay = true,
  hideServicesButton = false,
}) => {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/60"></div>
      )}
      
      <div className="container-custom relative z-10 pt-20 pb-16 md:py-24 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-200 mb-8 md:mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >            <Link to={primaryButtonLink}>
                <Button 
                variant="primary" 
                size="lg"
                className="bg-[#F9C800] hover:bg-[#F9C800]/90 text-white"
                >
                {primaryButtonText}
                </Button>
            </Link>
            {!hideServicesButton && (
              <Link to="/services">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-[#F9C800] hover:bg-[#F9C800]/90 text-[#333333]"
                >
                  Explore Our Services
                </Button>
              </Link>
            )}
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;