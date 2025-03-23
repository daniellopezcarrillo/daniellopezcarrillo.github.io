import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HoteleriaPage = () => {
  const beneficios = [
    {
      titulo: "Check-in/Check-out Automatizado",
      descripcion: "Sistema de auto check-in que reduce tiempos de espera y mejora la experiencia del huésped",
      icon: "🔑",
      detalles: [
        "Registro digital de huéspedes",
        "Verificación automática de documentos",
        "Asignación inteligente de habitaciones",
        "Generación de llaves digitales"
      ]
    },
    {
      titulo: "Gestión de Reservas Inteligente",
      descripcion: "Sistema predictivo que optimiza la ocupación y maximiza los ingresos",
      icon: "📅",
      detalles: [
        "Precios dinámicos basados en demanda",
        "Gestión de múltiples canales de reserva",
        "Predicción de cancelaciones",
        "Optimización de tarifas en tiempo real"
      ]
    },
    {
      titulo: "Asistente Virtual 24/7",
      descripcion: "Chatbot especializado en atención hotelera que nunca duerme",
      icon: "🤖",
      detalles: [
        "Respuestas instantáneas a consultas comunes",
        "Gestión de solicitudes de servicio a la habitación",
        "Recomendaciones personalizadas",
        "Soporte en múltiples idiomas"
      ]
    },
    {
      titulo: "Mantenimiento Predictivo",
      descripcion: "Sistema IoT para anticipar y prevenir problemas de mantenimiento",
      icon: "🔧",
      detalles: [
        "Monitoreo de sistemas críticos",
        "Alertas automáticas de mantenimiento",
        "Programación inteligente de tareas",
        "Registro digital de incidencias"
      ]
    }
  ];

  const casos = [
    {
      hotel: "Hotel Marina Bay",
      resultado: "Reducción del 40% en tiempos de check-in",
      testimonio: "La automatización transformó completamente nuestra operación."
    },
    {
      hotel: "Resort Sunset Valley",
      resultado: "Incremento del 25% en satisfacción del cliente",
      testimonio: "Los huéspedes adoran la rapidez del servicio automatizado."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Automatización para Hotelería</h1>
            <p className="text-xl text-gray-200 mb-8">
              Transforma tu hotel en una experiencia del futuro con nuestras soluciones de automatización inteligente
            </p>
            <motion.a
              href="https://wa.me/529161500571"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Agenda una Demo
            </motion.a>
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
              Beneficios de la Automatización
            </h2>
            <p className="text-xl text-gray-600">
              Descubre cómo nuestras soluciones mejoran la operación de tu hotel
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
                      <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* Casos de Éxito */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Casos de Éxito</h2>
            <p className="text-xl text-gray-300">
              Hoteles que ya han transformado su operación con nuestras soluciones
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
                className="bg-gray-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{caso.hotel}</h3>
                <p className="text-primary-400 font-medium mb-4">{caso.resultado}</p>
                <p className="text-gray-300 italic">"{caso.testimonio}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              ¿Listo para automatizar tu hotel?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Agenda una demostración personalizada y descubre cómo podemos ayudarte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/529161500571"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors"
              >
                Contactar Ahora
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gray-200 text-gray-900 rounded-full font-semibold hover:bg-gray-300 transition-colors"
              >
                Ver Más Servicios
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HoteleriaPage;