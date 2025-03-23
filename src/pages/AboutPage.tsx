import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaHandshake, FaRocket, FaChartLine, FaTools, FaUserTie, FaInstagram, FaFacebook } from 'react-icons/fa';
import logo2 from '../assets/logo2.png';
import ceoImage from '../assets/ceo.jpg';
import rubielImage from '../assets/rubiel.jpg';

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: FaChartLine,
      title: 'Análisis de necesidades empresariales',
      description: 'Identificamos los procesos que pueden ser automatizados.',
    },
    {
      icon: FaUserTie,
      title: 'Desarrollo de soluciones con IA',
      description: 'Creamos chatbots, asistentes virtuales, flujos automatizados y herramientas inteligentes.',
    },
    {
      icon: FaTools,
      title: 'Estrategias digitales personalizadas',
      description: 'Optimizamos procesos con herramientas avanzadas y marketing digital.',
    },
    {
      icon: FaRocket,
      title: 'Soporte y escalabilidad',
      description: 'Aseguramos que cada solución crezca junto con tu empresa.',
    },
  ];

  const values = [
    {
      icon: FaLightbulb,
      title: 'Innovación',
      description: 'Constantemente buscamos nuevas formas de aplicar la tecnología para resolver desafíos empresariales.',
    },
    {
      icon: FaHandshake,
      title: 'Compromiso',
      description: 'Nos comprometemos con el éxito de nuestros clientes, estableciendo relaciones duraderas y de confianza.',
    },
    {
      icon: FaRocket,
      title: 'Excelencia',
      description: 'Nos esforzamos por entregar soluciones de la más alta calidad que superen las expectativas.',
    },
  ];

  const sections = [
    {
      title: 'Quiénes Somos',
      content: 'AINNOVA es una empresa especializada en automatización inteligente y digitalización de procesos mediante inteligencia artificial (IA). Nos enfocamos en transformar negocios, optimizando tareas repetitivas, integrando APIs y desarrollando soluciones innovadoras que impulsan la productividad.'
    },
    {
      title: 'Nuestra Misión',
      content: 'Nuestra misión es revolucionar la automatización de empresas mediante el uso de IA, eliminando procesos manuales innecesarios y aumentando la eficiencia operativa. Buscamos que nuestros clientes tengan más tiempo para enfocarse en lo realmente importante: el crecimiento de su negocio.'
    },
    {
      title: 'Nuestra Visión',
      content: 'Ser referentes en transformación digital y automatización inteligente, brindando herramientas innovadoras que permitan a empresas de cualquier sector evolucionar hacia un futuro más eficiente y tecnológicamente avanzado.'
    }
  ];

  const team = [
    {
      name: 'Daniel García',
      role: 'CEO & Fundador',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Laura Martínez',
      role: 'CTO',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      name: 'Carlos Ruiz',
      role: 'Director de Innovación',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.img
              src={logo2}
              alt="AINNOVA Logo"
              className="w-32 h-32 mx-auto mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
            >
              Sobre Nosotros
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                <p className="text-gray-300 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo Trabajamos Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Cómo Trabajamos
            </h2>
            <p className="text-xl text-gray-300">
              Nuestro enfoque integral para tu éxito
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/40 transition-all duration-300 transform hover:-translate-y-2"
              >
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-400">
              Los principios que guían nuestro trabajo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-700/30 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-700/40 transition-colors duration-300"
              >
                <value.icon className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="relative">
                <motion.img
                  src={ceoImage}
                  alt="Daniel López Carrillo - CEO"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900/50 to-transparent" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Nuestro CEO: Daniel López Carrillo
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Detrás de AINNOVA está Daniel López Carrillo, un joven emprendedor y apasionado por la tecnología. 
                Con 23 años, es desarrollador de software y licenciado en Computación, con amplia experiencia en 
                inteligencia artificial generativa, automatización de procesos y desarrollo de soluciones tecnológicas avanzadas.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Su visión es hacer que la IA sea accesible y útil para empresas de cualquier tamaño, 
                ayudándolas a evolucionar en la era digital.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Asociación Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="relative">
                <motion.img
                  src={rubielImage}
                  alt="RubielPhotoArt Studio"
                  className="w-full h-[500px] object-cover object-[center_25%] rounded-2xl shadow-2xl brightness-95 hover:brightness-100 transition-all duration-300"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900/50 to-transparent" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Nuestra Asociación con RubielPhotoArt
              </h2>
              <p className="text-xl text-white/90 mb-6">
                RubielPhotoArt es un estudio creativo especializado en fotografía profesional, diseño gráfico y marketing digital.
                Con años de experiencia en el sector, se destaca por su capacidad para crear contenido visual impactante y
                estrategias de marketing efectivas que ayudan a las empresas a destacar en el mundo digital.
              </p>
              <p className="text-xl text-white/90 mb-8">
                Juntos, combinamos la potencia de la IA con la creatividad visual para ofrecer soluciones completas
                que transforman la presencia digital de nuestros clientes, desde la automatización de procesos hasta
                la creación de contenido visual cautivador.
              </p>
              <div className="flex justify-center gap-6">
                <motion.a
                  href="https://www.instagram.com/rubielphotoart?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaInstagram className="text-2xl" />
                  <span>Instagram</span>
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/Rubiel.photo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaFacebook className="text-2xl" />
                  <span>Facebook</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;