import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  titleColor?: string;
  subtitleColor?: string;
  descriptionColor?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
  description,
  alignment = 'center',
  titleColor = 'text-gray-900',
  subtitleColor = 'text-primary-600',
  descriptionColor = 'text-gray-600',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses[alignment]}`}>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className={`inline-block text-sm font-semibold uppercase tracking-wider mb-2 ${subtitleColor}`}>
            {subtitle}
          </span>
        </motion.div>
      )}
      
      <motion.h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${titleColor}`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          className={`text-lg ${descriptionColor}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;