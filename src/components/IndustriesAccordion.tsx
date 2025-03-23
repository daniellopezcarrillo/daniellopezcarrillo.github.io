import * as React from 'react';
const { useState } = React;
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const industries = [
  {
    id: 1,
    title: 'E-commerce',
    icon: '🛍️',
    route: '/servicios/ecommerce',
    description: 'Automatiza y optimiza tus operaciones de comercio electrónico para mejorar la experiencia del cliente y aumentar las ventas.',
    features: [
      'Chatbots para atención al cliente 24/7',
      'Seguimiento automático de pedidos y notificaciones',
      'Integración con plataformas de pago y envíos'
    ],
    detailedDescription: 'Nuestras soluciones para E-commerce incluyen automatización de inventario, gestión de pedidos, integración con múltiples marketplaces, y sistemas de recomendación personalizados basados en IA.'
  },
  {
    id: 2,
    title: 'Hotelería',
    icon: '🏨',
    route: '/servicios/hoteleria',
    description: 'Mejora la experiencia de tus huéspedes y optimiza las operaciones hoteleras con soluciones automatizadas.',
    features: [
      'Automatización de reservas y confirmaciones',
      'Chatbots para responder consultas de huéspedes',
      'Envío automático de recordatorios y promociones'
    ],
    detailedDescription: 'Transformamos la gestión hotelera con sistemas inteligentes de reservas, check-in automatizado, personalización de servicios y gestión eficiente del personal.'
  },
  {
    id: 3,
    title: 'Restaurantes',
    icon: '🍽️',
    route: '/servicios/restaurantes',
    description: 'Agiliza las operaciones de tu restaurante y mejora el servicio al cliente con automatización inteligente.',
    features: [
      'Gestión automatizada de pedidos y reservas',
      'Respuestas automáticas en WhatsApp o redes sociales',
      'Integración con sistemas de punto de venta'
    ],
    detailedDescription: 'Optimizamos la operación de restaurantes con sistemas de pedidos digitales, gestión de inventario en tiempo real, y análisis predictivo para la demanda.'
  },
  {
    id: 4,
    title: 'Agencias de Viajes',
    icon: '✈️',
    route: '/servicios/agencias-viaje',
    description: 'Optimiza la gestión de viajes y mejora la atención al cliente con soluciones automatizadas.',
    features: [
      'Automatización de cotizaciones y reservas',
      'Seguimiento automático de itinerarios',
      'Agentes de voz para atención 24/7'
    ],
    detailedDescription: 'Facilitamos la gestión de agencias de viajes con sistemas de reservas multicanal, seguimiento de preferencias de clientes y automatización de documentación de viaje.'
  },
  {
    id: 5,
    title: 'Tareas Repetitivas',
    icon: '🤖',
    route: '/servicios/tareas-repetitivas',
    description: 'Elimina las tareas manuales repetitivas y libera el potencial de tu equipo con RPA.',
    features: [
      'Automatización de procesos robóticos (RPA)',
      'Integraciones con CRM',
      'Optimización de flujos de trabajo'
    ],
    detailedDescription: 'Implementamos RPA para automatizar tareas repetitivas, reducir errores humanos y aumentar la productividad en procesos administrativos y operativos.'
  },
  {
    id: 6,
    title: 'Agentes de Voz',
    icon: '🎙️',
    route: '/servicios/agentes-voz',
    description: 'Implementa asistentes de voz inteligentes para una atención al cliente excepcional.',
    features: [
      'Asistentes de voz con IA',
      'Automatización de llamadas',
      'Procesamiento de lenguaje natural'
    ],
    detailedDescription: 'Desarrollamos asistentes de voz inteligentes que entienden el contexto, procesan lenguaje natural y aprenden de cada interacción para mejorar la atención al cliente.'
  }
];

const IndustriesAccordion = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              ¿Cómo pueden ayudarte nuestras soluciones?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Descubre cómo la automatización puede transformar tu industria
            </motion.p>
          </div>

          <div className="space-y-4">
            {industries.map((industry) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: industry.id * 0.1 }}
              >
                <motion.button
                  onClick={() => setExpandedId(expandedId === industry.id ? null : industry.id)}
                  className={`w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 
                    ${expandedId === industry.id ? 'ring-2 ring-primary-500' : ''}`}
                >
                  <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <motion.span
                        className="text-3xl"
                        animate={{ rotate: expandedId === industry.id ? 360 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {industry.icon}
                      </motion.span>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {industry.title}
                      </h3>
                    </div>
                    <motion.svg
                      className="w-6 h-6 text-gray-500"
                      animate={{ rotate: expandedId === industry.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </div>
                </motion.button>

                <AnimatePresence>
                  {expandedId === industry.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-b-xl shadow-lg mt-1 overflow-hidden"
                    >
                      <div className="p-6 space-y-4">
                        <p className="text-gray-600">
                          {industry.description}
                        </p>
                        <ul className="space-y-2">
                          {industry.features.map((feature, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center gap-2 text-gray-600"
                            >
                              <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                        
                        <Link
                          to={industry.route}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-full
                            hover:bg-primary-600 transition-colors duration-300 mt-4"
                        >
                          Ver más sobre {industry.title}
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesAccordion;
