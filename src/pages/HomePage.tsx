import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaCode, FaBell, FaCogs } from 'react-icons/fa';
import { BsDatabase } from 'react-icons/bs';
import logo from '../assets/AINNOVA-removebg.png';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ServiceNetworkMap from '../components/ServiceNetworkMap';
import AnimatedBackground from '../components/AnimatedBackground';
import ContactForm from '../components/ContactForm';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: BsDatabase,
      title: 'Integración de APIs',
      description: 'Conexión entre plataformas como WhatsApp, Telegram, CRMs y ERPs',
      processDescription: 'Datos fluyendo entre diferentes plataformas conectadas en tiempo real',
      gradient: 'from-blue-500 to-cyan-400',
      delay: 0,
      simulationElements: [
        { type: 'data', content: 'Datos entrantes' },
        { type: 'data', content: 'Sincronizando APIs' },
        { type: 'message', content: 'Conexión establecida' },
        { type: 'data', content: 'Transferencia de datos' }
      ]
    },
    {
      icon: FaRobot,
      title: 'Automatización de Chatbots',
      description: 'Implementación de bots en WhatsApp y Telegram para atención al cliente',
      processDescription: 'Conversaciones automatizadas en WhatsApp y Telegram con respuestas inteligentes',
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.2,
      simulationElements: [
        { type: 'message', content: 'Mensaje recibido' },
        { type: 'bot', content: 'IA procesando' },
        { type: 'message', content: 'Respuesta generada' },
        { type: 'task', content: 'Cliente atendido' }
      ]
    },
    {
      icon: BsDatabase,
      title: 'Gestión de datos en tiempo real',
      description: 'Extracción, transformación y carga de datos automatizada',
      processDescription: 'Procesamiento de datos en tiempo real con análisis instantáneo',
      gradient: 'from-green-500 to-emerald-400',
      delay: 0.4,
      simulationElements: [
        { type: 'data', content: 'Extracción' },
        { type: 'data', content: 'Transformación' },
        { type: 'data', content: 'Validación' },
        { type: 'data', content: 'Carga completada' }
      ]
    },
    {
      icon: FaBell,
      title: 'Notificaciones Inteligentes',
      description: 'Envío automatizado de alertas en WhatsApp, email o SMS',
      processDescription: 'Alertas personalizadas enviadas automáticamente según eventos específicos',
      gradient: 'from-yellow-500 to-orange-500',
      delay: 0.6,
      simulationElements: [
        { type: 'data', content: 'Evento detectado' },
        { type: 'bot', content: 'Analizando prioridad' },
        { type: 'message', content: 'Notificación creada' },
        { type: 'message', content: 'Alerta enviada' }
      ]
    },
    {
      icon: FaChartLine,
      title: 'Automatización de Ventas',
      description: 'Seguimiento de leads y respuestas automáticas',
      processDescription: 'Leads avanzando automáticamente a través del embudo de ventas',
      gradient: 'from-red-500 to-pink-500',
      delay: 0.8,
      simulationElements: [
        { type: 'data', content: 'Nuevo lead' },
        { type: 'bot', content: 'Calificando lead' },
        { type: 'message', content: 'Seguimiento automático' },
        { type: 'task', content: 'Conversión exitosa' }
      ]
    },
    {
      icon: FaCogs,
      title: 'Optimización de Workflows',
      description: 'Reducción de tareas repetitivas con IA y RPA',
      processDescription: 'Tareas repetitivas siendo automatizadas para optimizar procesos',
      gradient: 'from-indigo-500 to-purple-500',
      delay: 1,
      simulationElements: [
        { type: 'task', content: 'Tarea identificada' },
        { type: 'bot', content: 'Analizando proceso' },
        { type: 'data', content: 'Creando automatización' },
        { type: 'task', content: 'Workflow optimizado' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.img
              src={logo}
              alt="AINNOVA Logo"
              className="w-52 h-52 mx-auto mb-8 scale-375"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              AUTOMATIZA TU MUNDO 
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transformamos tu negocio con soluciones tecnológicas avanzadas y personalizadas
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/services"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Explorar Servicios
              </Link>
              <Link
                to="#"
                onClick={() => window.open('https://wa.me/529161500571', '_blank')}
                className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 transition-colors duration-300"
                as={motion.a}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Contactar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Network Map Section */}
      <section className="py-20 bg-gray-800/50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Nuestras Soluciones
            </h2>
            <p className="text-xl text-gray-400">
              Ecosistema de automatización para impulsar tu negocio
            </p>
          </motion.div>

          <ServiceNetworkMap services={services} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-400">
              Historias de éxito y transformación digital
            </p>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Únete a las empresas que ya están aprovechando el poder de la tecnología para crecer
            </p>
            <div className="max-w-xl mx-auto">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
