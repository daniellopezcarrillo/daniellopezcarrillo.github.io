import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AgenciasViajePage = () => {
  const beneficios = [
    {
      titulo: "Reservas Automatizadas",
      descripcion: "Sistema inteligente de gestión de reservas y disponibilidad",
      icon: "✈️",
      detalles: [
        "Sincronización multi-plataforma",
        "Confirmaciones automáticas",
        "Gestión de disponibilidad",
        "Calendario inteligente"
      ]
    },
    {
      titulo: "Atención al Cliente 24/7",
      descripcion: "Asistente virtual especializado en viajes",
      icon: "💬",
      detalles: [
        "Respuestas instantáneas",
        "Múltiples idiomas",
        "Recomendaciones personalizadas",
        "Gestión de consultas"
      ]
    },
    {
      titulo: "Gestión de Pagos",
      descripcion: "Procesamiento automático de pagos y reembolsos",
      icon: "💳",
      detalles: [
        "Múltiples métodos de pago",
        "Facturación automática",
        "Control de comisiones",
        "Gestión de reembolsos"
      ]
    },
    {
      titulo: "Marketing Automatizado",
      descripcion: "Campañas personalizadas y seguimiento de clientes",
      icon: "📊",
      detalles: [
        "Emails personalizados",
        "Ofertas dinámicas",
        "Seguimiento de leads",
        "Análisis de conversión"
      ]
    }
  ];

  const casos = [
    {
      agencia: "Viajes Globales",
      resultado: "Incremento del 200% en reservas online",
      testimonio: "La automatización nos permitió escalar nuestras operaciones y mejorar la satisfacción del cliente."
    },
    {
      agencia: "TravelTech",
      resultado: "Reducción del 60% en tiempo de gestión",
      testimonio: "El sistema automatizado ha revolucionado nuestra forma de trabajar y atender a los clientes."
    }
  ];

  const caracteristicas = [
    {
      titulo: "Multi-destino",
      descripcion: "Gestión global de viajes",
      icon: "🌎"
    },
    {
      titulo: "Personalización",
      descripcion: "Ofertas a medida",
      icon: "🎯"
    },
    {
      titulo: "Integración",
      descripcion: "APIs de proveedores",
      icon: "🔄"
    },
    {
      titulo: "Reportes",
      descripcion: "Análisis detallado",
      icon: "📈"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Automatización para Agencias de Viaje</h1>
            <p className="text-xl text-gray-100 mb-8">
              Transforma tu agencia con soluciones inteligentes de automatización
            </p>
            <motion.a
              href="https://wa.me/529161500571"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Descubrir Soluciones
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Características Rápidas */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {caracteristicas.map((caracteristica, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{caracteristica.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{caracteristica.titulo}</h3>
                <p className="text-sm text-gray-600">{caracteristica.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sistema de Reservas Demo */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Sistema de Reservas Inteligente</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <motion.div 
                className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                  rotate: [0, 15, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-4xl">✈️</span>
              </motion.div>
              <p className="text-gray-600 mb-6">
                Gestiona todas tus reservas desde una única plataforma
              </p>
              <motion.a
                href="https://wa.me/529161500571"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
              >
                contactanos
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Beneficios para tu Agencia
            </h2>
            <p className="text-xl text-gray-600">
              Optimiza tus operaciones y mejora la experiencia de tus clientes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{beneficio.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {beneficio.titulo}
                </h3>
                <p className="text-gray-600 mb-4">{beneficio.descripcion}</p>
                <ul className="space-y-2">
                  {beneficio.detalles.map((detalle, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {detalle}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integraciones Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Integraciones Disponibles</h2>
            <p className="text-xl text-gray-300">
              Conectamos tu agencia con los principales proveedores del sector
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {['Amadeus', 'Sabre', 'Expedia', 'Booking'].map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{platform[0]}</span>
                </div>
                <span className="text-gray-300">{platform}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Casos de Éxito</h2>
            <p className="text-xl text-gray-600">
              Agencias que han transformado su negocio con nuestras soluciones
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {casos.map((caso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{caso.agencia}</h3>
                <p className="text-blue-500 font-medium mb-4">{caso.resultado}</p>
                <p className="text-gray-600 italic">"{caso.testimonio}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-teal-400 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Moderniza tu Agencia de Viajes
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Únete a las agencias que ya han automatizado sus operaciones
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/529161500571"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Solicitar Demo
              </motion.a>
              <motion.a
                href="https://wa.me/529161500571"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                envia tu mensaje 
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AgenciasViajePage;