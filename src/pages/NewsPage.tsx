import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import SectionHeading from '../components/SectionHeading';

const NewsPage: React.FC = () => {
  const blogPosts = [
    {
      title: "5 Proven Strategies for Validating Your Business Idea",
      excerpt: "Learn the essential methods for testing your business concept before investing significant time and resources.",
      date: "April 15, 2025",
      author: "Jessica Williams",
      category: "Strategy",
      imageSrc: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1600",
      slug: "proven-strategies-validating-business-idea"
    },
    {
      title: "How to Conduct Effective Customer Discovery Interviews",
      excerpt: "Master the art of customer interviews to gather valuable insights for your product development process.",
      date: "April 10, 2025",
      author: "Michael Chen",
      category: "Research",
      imageSrc: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1600",
      slug: "effective-customer-discovery-interviews"
    },
    {
      title: "Building a Go-to-Market Strategy That Actually Works",
      excerpt: "Discover the key components of a successful GTM strategy and how to implement them in your business.",
      date: "April 5, 2025",
      author: "Sarah Johnson",
      category: "Marketing",
      imageSrc: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1600",
      slug: "go-to-market-strategy-that-works"
    },
    {
      title: "Optimizing Your Pricing Strategy for Maximum Growth",
      excerpt: "Learn how to develop a pricing model that balances revenue growth with customer acquisition and retention.",
      date: "March 28, 2025",
      author: "David Rodriguez",
      category: "Business",
      imageSrc: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600",
      slug: "optimizing-pricing-strategy-growth"
    },
    {
      title: "Digital Marketing Trends Every Business Should Know in 2025",
      excerpt: "Stay ahead of the curve with these emerging digital marketing strategies and technologies.",
      date: "March 22, 2025",
      author: "Emily Zhang",
      category: "Digital",
      imageSrc: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1600",
      slug: "digital-marketing-trends-2025"
    },
    {
      title: "The Key Metrics for Measuring Product-Market Fit",
      excerpt: "Discover the essential data points that indicate whether your product truly meets market needs.",
      date: "March 15, 2025",
      author: "James Wilson",
      category: "Analytics",
      imageSrc: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1600",
      slug: "key-metrics-product-market-fit"
    }
  ];

  const categories = [
    "All",
    "Strategy",
    "Research",
    "Marketing",
    "Business",
    "Digital",
    "Analytics",
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Insights</h1>
            <p className="text-primary-100 text-lg">
              Stay updated with the latest business strategies, market trends, and growth insights from our expert team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                author={post.author}
                category={post.category}
                imageSrc={post.imageSrc}
                slug={post.slug}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <nav className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="relative inline-flex items-center border-t border-b border-r border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center border-t border-b border-gray-300 bg-primary-600 px-4 py-2 text-sm font-medium text-white"
                aria-current="page"
              >
                2
              </a>
              <a
                href="#"
                className="relative inline-flex items-center border-t border-b border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                3
              </a>
              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Next
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <SectionHeading
                subtitle="Stay Updated"
                title="Subscribe to Our Newsletter"
                description="Get the latest insights, tips, and strategies delivered straight to your inbox."
              />

              <form className="mt-8 flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsPage;