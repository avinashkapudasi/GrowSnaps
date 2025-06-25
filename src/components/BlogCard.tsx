import React from 'react';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageSrc: string;
  slug: string;
  delay?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  date,
  author,
  category,
  imageSrc,
  slug,
  delay = 0
}) => {
  return (
    <motion.article
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Link to={`/news/${slug}`} className="block">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />          <div className="absolute top-4 left-4 bg-[#F9C800] text-[#333333] text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </div>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
        </div>
        
        <Link to={`/news/${slug}`} className="block">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 hover:text-primary-600 transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        
        <Link 
          to={`/news/${slug}`}
          className="text-[#333333] bg-[#F9C800] hover:bg-[#F9C800]/90 font-medium inline-flex items-center px-4 py-2 rounded-md transition-colors"
        >
          Read More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;