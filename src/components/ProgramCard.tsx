import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  stageBadge: string;
  stageColor: string;
  description?: string;
  delay?: number;
  onExplore?: () => void;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  stageBadge,
  stageColor,
  description,
  delay = 0,
  onExplore,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleExplore = () => {
    if (onExplore) {
      onExplore();
    }
  };

  return (
    <motion.div
      className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-7 cursor-pointer overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: '-80px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -10,
        rotateX: 4,
        rotateY: -3,
        scale: 1.03,
        boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.15)',
      }}
      style={{ perspective: 800, transformStyle: 'preserve-3d' }}
    >
      {/* Animated gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F9C800]/5 via-transparent to-[#74B72E]/5"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Floating particles on hover */}
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full opacity-40"
                style={{ backgroundColor: i % 2 === 0 ? '#F9C800' : '#74B72E' }}
                initial={{
                  x: 50 + Math.random() * 200,
                  y: 50 + Math.random() * 200,
                  scale: 0,
                }}
                animate={{
                  x: Math.random() * 300,
                  y: Math.random() * 300,
                  scale: [0, 1, 0],
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        {/* Title */}
        <motion.h3
          className="text-xl font-bold text-gray-900 mb-3"
          animate={{ color: isHovered ? '#1a2e05' : '#111827' }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        {/* Stage Badge */}
        <motion.span
          className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5 border"
          style={{
            color: stageColor,
            backgroundColor: `${stageColor}15`,
            borderColor: `${stageColor}30`,
          }}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {stageBadge}
        </motion.span>

        {/* Description */}
        {description && (
          <motion.p
            className="text-sm text-gray-600 leading-relaxed mb-6"
            animate={{ x: isHovered ? 2 : 0 }}
          >
            {description}
          </motion.p>
        )}

        {/* CTA Button */}
        <motion.button
          onClick={handleExplore}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F9C800] text-gray-900 font-semibold text-sm transition-all shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Program
          <ChevronRight className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
