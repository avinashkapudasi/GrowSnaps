import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { Link } from 'react-router-dom';
import { Rocket, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

interface HeroSlide {
  title: React.ReactNode;
  subtitle: string;
  imageSrc?: string;
  gradient?: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  badge?: React.ReactNode;
  variant?: 'default' | 'young-risers';
}

interface HeroProps {
  title?: string;
  subtitle: string;
  eyebrow?: string;
  heroTagline?: string;
  imageSrc?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  overlay?: boolean;
  hideServicesButton?: boolean;
  carousel?: boolean;
  showScrollPrompt?: boolean;
  hideButtons?: boolean;
}

const carouselSlides: HeroSlide[] = [
  {
    title: (
      <>
        Young Risers <span className="text-[#74B72E]">Program</span>
      </>
    ),
    subtitle:
      'A transformative entrepreneurship experience for young minds aged 13–19. Build real ventures, develop leadership skills, and launch your future.',
    imageSrc: new URL('../assets/Youngrisers.jpeg', import.meta.url).href,
    gradient: 'bg-gradient-to-br from-[#1a2e05] via-[#2d4a0e] to-[#1a2e05]',
    primaryButtonText: 'Apply Now',
    primaryButtonLink: '/young-risers/enroll',
    secondaryButtonText: 'Learn More',
    secondaryButtonLink: '/young-risers',
    badge: (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#74B72E]/20 text-[#74B72E] text-xs font-semibold uppercase tracking-wider border border-[#74B72E]/30">
        <Rocket className="h-3.5 w-3.5" /> Youth Program
      </span>
    ),
    variant: 'young-risers',
  },
  {
    title: "Building India's NextGen Entrepreneurs",
    subtitle:
      'GrowSnaps Global Ventures is an Entrepreneurial Ecosystem Enabler — empowering students, startups, and institutions to build, launch, and scale impactful ventures.',
    imageSrc:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600',
    primaryButtonText: 'Explore our Programs',
    primaryButtonLink: '/programs',
    secondaryButtonText: 'Get in Touch',
    secondaryButtonLink: '/contact',
    variant: 'default',
  },
  {
    title: 'From Spark to Scale — We Grow Innovation at Every Stage.',
    subtitle:
      'GrowSnaps Global Ventures partners with students, startups, and institutions to build powerful entrepreneurial ecosystems through hands-on training, innovation modules, and strategy consulting.',
    imageSrc:
      'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1600',
    primaryButtonText: 'Get in Touch with us',
    primaryButtonLink: '/contact',
    secondaryButtonText: 'Explore Our Services',
    secondaryButtonLink: '/services',
    variant: 'default',
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};

const SlideContent: React.FC<{ slide: HeroSlide }> = ({ slide }) => (
  <>
    {/* Background */}
    {slide.variant === 'young-risers' ? (
      <div className={`absolute inset-0 ${slide.gradient}`}>
        {slide.imageSrc ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageSrc})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e05]/85 via-[#2d4a0e]/70 to-[#1a2e05]/50" />
          </>
        ) : (
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#74B72E] rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#74B72E] rounded-full blur-[120px] opacity-5" />
          </div>
        )}
      </div>
    ) : (
      <>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.imageSrc})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/60" />
      </>
    )}

    {/* Content */}
    <div className="relative z-10 min-h-screen flex items-center">        <div className="w-full px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:py-24 lg:pt-36 lg:pb-32">
        <div className="max-w-3xl pl-4 sm:pl-8 lg:pl-16">
          {slide.badge && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-5"
            >
              {slide.badge}
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight"
          >
            {slide.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-200 mb-8 md:mb-10 leading-relaxed"
          >
            {slide.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {slide.variant === 'young-risers' ? (
              <>
                <Link
                  to={slide.primaryButtonLink}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#74B72E] hover:bg-[#659A26] text-white font-semibold text-base transition-all shadow-lg shadow-[#74B72E]/30 hover:shadow-xl"
                >
                  <Rocket className="h-4 w-4" /> {slide.primaryButtonText}
                </Link>
                {slide.secondaryButtonText && (
                  <Link
                    to={slide.secondaryButtonLink!}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base transition-all border border-white/20"
                  >
                    {slide.secondaryButtonText}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                )}
              </>
            ) : (
              <>
                <Link to={slide.primaryButtonLink}>
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-[#F9C800] hover:bg-[#F9C800]/90 text-white"
                  >
                    {slide.primaryButtonText}
                  </Button>
                </Link>
                {slide.secondaryButtonText && (
                  <Link to={slide.secondaryButtonLink!}>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="bg-[#F9C800] hover:bg-[#F9C800]/90 text-[#333333]"
                    >
                      {slide.secondaryButtonText}
                    </Button>
                  </Link>
                )}
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  </>
);

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  eyebrow,
  heroTagline,
  imageSrc = 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1600',
  primaryButtonText = 'Get in Touch with us',
  primaryButtonLink = '/contact',
  overlay = true,
  hideServicesButton = false,
  carousel = false,
  showScrollPrompt = true,
  hideButtons = false,
}) => {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const paginate = useCallback(
    (newDirection: number) => {
      setCurrent(([prev]) => {
        const next = (prev + newDirection + carouselSlides.length) % carouselSlides.length;
        return [next, newDirection];
      });
    },
    []
  );

  // Auto-play: always runs unless paused
  useEffect(() => {
    if (!carousel || isPaused) return;
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [carousel, isPaused, paginate, current]);

  // Pause temporarily and resume after delay
  const pauseAndResume = useCallback(() => {
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setIsPaused(false), 8000);
  }, []);

  // Cleanup resume timer on unmount
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(([prev]) => [index, index > prev ? 1 : -1]);
    pauseAndResume();
  };

  // ─── Carousel mode ───
  if (carousel) {
    const slide = carouselSlides[current];

    return (
      <section
        className="relative min-h-screen overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'tween', duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
            className="absolute inset-0"
          >
            <SlideContent slide={slide} />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={() => { paginate(-1); pauseAndResume(); }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={() => { paginate(1); pauseAndResume(); }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {carouselSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`relative transition-all duration-500 rounded-full ${
                current === i
                  ? 'w-10 h-3 bg-white'
                  : 'w-3 h-3 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            >
              {current === i && !isPaused && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-white/60 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 6, ease: 'linear' }}
                  key={`progress-${current}`}
                />
              )}
            </button>
          ))}
        </div>

        {/* Scroll prompt - Carousel: bottom-right corner on desktop, bottom-center on mobile */}
        {showScrollPrompt && <div className="absolute z-30 bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 md:bottom-8 flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 0.7, repeat: Infinity, ease: 'easeOut', repeatType: 'loop' }}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#74B72E] shadow-lg shadow-[#74B72E]/50 flex items-center justify-center"
          >
            <ChevronDown size={22} className="text-white md:rotate-0" strokeWidth={3} />
          </motion.div>
          <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase">Scroll</span>
        </div>}
      </section>
    );
  }

  // ─── Standard single-slide mode (for Services, Programs, etc.) ───
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/60" />
      )}

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16 md:py-24 lg:pt-36 lg:pb-32">
        {/* Content pinned to the left — no mx-auto so max-w-3xl hugs the left */}
        <div className="max-w-3xl text-left pl-4 sm:pl-8 lg:pl-16">

          {/* Eyebrow label */}
          {eyebrow && (
            <motion.span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-[#74B72E]/20 text-[#74B72E] border border-[#74B72E]/30 mb-5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {eyebrow}
            </motion.span>
          )}

          {title && (
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: eyebrow ? 0.1 : 0 }}
            >
              {title}
            </motion.h1>
          )}

          {/* Hero tagline — larger, bolder line sitting between h1 and subtitle */}
          {heroTagline && (
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-5 leading-tight"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {heroTagline}
            </motion.h2>
          )}

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>

          {!hideButtons && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Link to={primaryButtonLink}>
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
          )}
        </div>
      </div>

      {/* Scroll prompt: right side on desktop, below content on mobile */}
      {showScrollPrompt && (
        <motion.div
          className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 md:bottom-8 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 0.7, repeat: Infinity, ease: 'easeOut', repeatType: 'loop' }}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#74B72E] shadow-lg shadow-[#74B72E]/50 flex items-center justify-center"
          >
            <ChevronDown size={22} className="text-white" strokeWidth={3} />
          </motion.div>
          <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase">
            Scroll
          </span>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;