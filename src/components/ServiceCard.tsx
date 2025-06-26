import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  details?: string[];
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, details, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-primary-500 transition-all duration-500 hover:shadow-2xl group text-center relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
      animate={{ 
        height: isHovered && details ? "auto" : "auto",
        minHeight: isHovered && details ? "400px" : "200px"
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 opacity-0"
        animate={{ opacity: isHovered ? 0.7 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Floating particles effect */}
      {isHovered && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-30"
              initial={{ 
                x: Math.random() * 300 - 150, 
                y: Math.random() * 300 - 150,
                scale: 0 
              }}
              animate={{ 
                x: Math.random() * 300 - 150, 
                y: Math.random() * 300 - 150,
                scale: [0, 1, 0],
                rotate: 360
              }}
              transition={{ 
                duration: 2 + Math.random() * 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Decorative floating dots */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`dot-${i}`}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-60"
              initial={{ 
                x: 20 + i * 60, 
                y: 20 + i * 40,
                scale: 0 
              }}
              animate={{ 
                y: [20 + i * 40, 10 + i * 40, 30 + i * 40],
                scale: [0, 1, 0.5, 1],
                opacity: [0.6, 0.8, 0.4, 0.6]
              }}
              transition={{ 
                duration: 3 + i * 0.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </>
      )}

      {/* Default content with enhanced animations */}
      <motion.div 
        className="relative z-10"
        animate={{ 
          opacity: isHovered && details ? 0 : 1,
          y: isHovered && details ? -20 : 0,
          scale: isHovered && details ? 0.9 : 1
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <motion.div 
          className="w-14 h-14 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-5 mx-auto"
          animate={{ 
            backgroundColor: isHovered ? "#F9C800" : "",
            color: isHovered ? "#333333" : "",
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>
        
        <motion.h3 
          className="text-xl font-semibold mb-3"
          animate={{ 
            color: isHovered ? "#74B72E" : "#1f2937",
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        {description && (
          <motion.p 
            className="text-gray-600 mb-4"
            animate={{ opacity: isHovered && details ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        )}
      </motion.div>

      {/* Enhanced hover content - detailed listings */}
      <AnimatePresence>
        {details && isHovered && (
          <motion.div 
            className="absolute inset-0 p-6 bg-white/95 backdrop-blur-sm flex flex-col justify-start z-20"
            initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: 180 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.h3 
              className="text-lg font-bold mb-4 text-primary-600 flex items-center justify-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.span>
              <span className="mx-2">{title}</span>
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                ✨
              </motion.span>
            </motion.h3>
            
            <motion.div 
              className="w-full flex-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <ul className="text-sm text-gray-700 space-y-2 text-left">
                {details.map((detail, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start group/item hover:text-primary-600 transition-colors duration-200"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <motion.span 
                      className="text-primary-600 mr-3 font-bold"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      ⭐
                    </motion.span>
                    <span className="leading-tight">{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServiceCard;