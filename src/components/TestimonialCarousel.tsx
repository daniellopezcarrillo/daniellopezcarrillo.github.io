import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Carlos Rodríguez',
    role: 'CEO',
    company: 'TechMex Solutions',
    content: 'AINNOVA transformó completamente nuestra operación. Su solución de IA nos ayudó a reducir costos operativos en un 40% y mejorar la satisfacción del cliente.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Ana María López',
    role: 'Directora de Operaciones',
    company: 'Hoteles Premium',
    content: 'La implementación del chatbot de AINNOVA ha sido un cambio revolucionario. Ahora podemos atender consultas 24/7 y nuestro personal puede enfocarse en tareas más estratégicas.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    name: 'Roberto Sánchez',
    role: 'Gerente de Innovación',
    company: 'Logistics Pro',
    content: 'El sistema de automatización de AINNOVA nos permitió optimizar nuestras rutas de entrega y reducir tiempos de espera. Una inversión que realmente valió la pena.',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection('right');
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: 'left' | 'right') => ({
      zIndex: 0,
      x: direction === 'right' ? -1000 : 1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: 'left' | 'right') => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 'right') {
        return (prevIndex + 1) % testimonials.length;
      }
      return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
    });
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <div className="relative h-[400px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate('right');
              } else if (swipe > swipeConfidenceThreshold) {
                paginate('left');
              }
            }}
            className="absolute w-full"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <FaQuoteLeft className="text-4xl text-blue-400 mb-6" />
              <p className="text-xl text-gray-300 mb-8">
                {testimonials[currentIndex].content}
              </p>
              <div className="flex items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[currentIndex].role} en {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 'right' : 'left');
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-blue-400' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
        <button
          onClick={() => paginate('left')}
          className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm text-white pointer-events-auto hover:bg-gray-700/50 transition-colors duration-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => paginate('right')}
          className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm text-white pointer-events-auto hover:bg-gray-700/50 transition-colors duration-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;