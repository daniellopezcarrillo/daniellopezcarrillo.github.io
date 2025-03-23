import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsDatabase } from 'react-icons/bs';
import { FaRobot, FaBell, FaChartLine, FaCogs } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib';
import meduza from '../assets/logo2.png';
import InfiniteLogoCarousel from '../components/InfiniteLogoCarousel';

interface Service {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  icon: IconType;
  color: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: 'Integración de APIs',
    description: 'Conexión entre plataformas como WhatsApp, Telegram, CRMs y ERPs',
    longDescription: 'Facilitamos la comunicación fluida entre diferentes plataformas, permitiendo que tus sistemas trabajen en armonía. Integramos WhatsApp Business API, Telegram Bot API, y diversos CRMs y ERPs para crear un ecosistema digital cohesivo.',
    icon: BsDatabase,
    color: 'bg-gradient-to-br from-blue-500 to-cyan-400',
    features: [
      'Integración con WhatsApp Business API',
      'Conexión con Telegram Bot API',
      'Sincronización con CRMs populares',
      'Compatibilidad con sistemas ERP'
    ]
  },
  {
    id: 2,
    title: 'Automatización de Chatbots',
    description: 'Implementación de bots en WhatsApp y Telegram para atención al cliente',
    longDescription: 'Desarrollamos chatbots inteligentes que proporcionan atención al cliente 24/7 a través de WhatsApp y Telegram. Nuestros bots aprenden y mejoran constantemente para ofrecer respuestas precisas y personalizadas.',
    icon: FaRobot,
    color: 'bg-gradient-to-br from-purple-500 to-pink-500',
    features: [
      'Respuestas automáticas inteligentes',
      'Aprendizaje continuo',
      'Integración multicanal',
      'Personalización avanzada'
    ]
  },
  {
    id: 3,
    title: 'Gestión de datos en tiempo real',
    description: 'Extracción, transformación y carga de datos automatizada',
    longDescription: 'Implementamos sistemas ETL automatizados que procesan y analizan datos en tiempo real, permitiéndote tomar decisiones informadas al instante.',
    icon: BsDatabase,
    color: 'bg-gradient-to-br from-green-500 to-emerald-400',
    features: [
      'Procesamiento ETL automatizado',
      'Análisis en tiempo real',
      'Visualización de datos',
      'Almacenamiento seguro'
    ]
  },
  {
    id: 4,
    title: 'Notificaciones Inteligentes',
    description: 'Envío automatizado de alertas en WhatsApp, email o SMS',
    longDescription: 'Sistema de notificaciones multicanal que mantiene informados a tus clientes y equipo en tiempo real a través de sus canales preferidos.',
    icon: FaBell,
    color: 'bg-gradient-to-br from-yellow-500 to-orange-500',
    features: [
      'Alertas personalizadas',
      'Múltiples canales',
      'Programación flexible',
      'Seguimiento en tiempo real'
    ]
  },
  {
    id: 5,
    title: 'Automatización de Ventas',
    description: 'Seguimiento de leads y respuestas automáticas',
    longDescription: 'Optimizamos tu proceso de ventas con automatización inteligente, desde la captación de leads hasta el seguimiento post-venta.',
    icon: FaChartLine,
    color: 'bg-gradient-to-br from-red-500 to-pink-500',
    features: [
      'Seguimiento automático de leads',
      'Respuestas personalizadas',
      'Análisis de conversión',
      'Integración con CRM'
    ]
  },
  {
    id: 6,
    title: 'Optimización de Workflows',
    description: 'Reducción de tareas repetitivas con IA y RPA',
    longDescription: 'Implementamos soluciones de IA y RPA para automatizar tareas repetitivas y optimizar los procesos empresariales.',
    icon: FaCogs,
    color: 'bg-gradient-to-br from-indigo-500 to-purple-500',
    features: [
      'Automatización con IA',
      'Implementación de RPA',
      'Optimización de procesos',
      'Reducción de errores'
    ]
  }
];

const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <motion.img
              src={meduza}
              alt="Meduza Logo"
              className="w-32 h-32 object-contain mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
            <div className="relative">
              <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
                Nuestros Servicios
              </h1>
              <p className="text-xl text-gray-300">
                Soluciones innovadoras para impulsar tu negocio
              </p>
            </div>
          </div>
        </motion.div>

        {isMobile ? (
          <div className="flex overflow-x-auto snap-x snap-mandatory py-4 -mx-4 scrollbar-hide">
            {services.map((service) => {
              const IconComponent = service.icon as React.ComponentType<IconBaseProps>;
              return (
                <motion.div
                  key={service.id}
                  className="snap-center shrink-0 w-80 mx-2 first:ml-4 last:mr-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className={`${service.color} rounded-xl p-6 h-full shadow-xl backdrop-blur-lg bg-opacity-90 cursor-pointer`}
                    onClick={() => setSelectedService(service)}
                  >
                    <IconComponent size={48} className="text-white mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/90">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => {
              const IconComponent = service.icon as React.ComponentType<IconBaseProps>;
              return (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  className="h-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className={`${service.color} rounded-xl p-6 h-full shadow-xl backdrop-blur-lg bg-opacity-90 cursor-pointer`}
                    onClick={() => setSelectedService(service)}
                  >
                    <IconComponent size={48} className="text-white mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/90">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className={`${selectedService.color} rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl`}
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                {(() => {
                  const IconComponent = selectedService.icon as React.ComponentType<IconBaseProps>;
                  return <IconComponent size={64} className="text-white mb-6" />;
                })()}
                <h2 className="text-3xl font-bold text-white mb-4">{selectedService.title}</h2>
                <p className="text-white/90 mb-6">{selectedService.longDescription}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2 text-white/90"
                    >
                      <div className="w-2 h-2 rounded-full bg-white/90" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Carrusel infinito de logos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-24"
        >
          <InfiniteLogoCarousel speed={25} />
        </motion.div>      </div>
    </div>
  );
};

export default ServicesPage;
