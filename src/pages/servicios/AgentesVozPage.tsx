import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AgentesVozPage = () => {
  const beneficios = [
    {
      titulo: "Atención 24/7",
      descripcion: "Asistente virtual por voz disponible en todo momento",
      icon: "🎙️",
      detalles: [
        "Respuestas instantáneas",
        "Múltiples idiomas",
        "Personalización de voz",
        "Escalabilidad ilimitada"
      ]
    },
    {
      titulo: "Integración Multicanal",
      descripcion: "Conexión con diferentes plataformas y sistemas",
      icon: "🔄",
      detalles: [
        "Teléfono y WhatsApp",
        "Sistemas CRM",
        "Plataformas de mensajería",
        "APIs personalizadas"
      ]
    },
    {
      titulo: "IA Avanzada",
      descripcion: "Tecnología de punta en procesamiento de lenguaje natural",
      icon: "🧠",
      detalles: [
        "Comprensión contextual",
        "Aprendizaje continuo",
        "Detección de emociones",
        "Análisis de sentimiento"
      ]
    },
    {
      titulo: "Análisis y Reportes",
      descripcion: "Métricas detalladas y insights de las interacciones",
      icon: "📊",
      detalles: [
        "Dashboard en tiempo real",
        "Reportes personalizados",
        "Análisis de satisfacción",
        "Tendencias de consultas"
      ]
    }
  ];

  const casos = [
    {
      empresa: "Centro de Soporte Global",
      resultado: "Reducción del 70% en tiempo de espera",
      testimonio: "Los agentes de voz han revolucionado nuestra atención al cliente, permitiéndonos atender miles de llamadas simultáneas."
    },
    {
      empresa: "Banco Digital",
      resultado: "95% de precisión en consultas",
      testimonio: "La IA de voz maneja perfectamente consultas de saldo, transferencias y soporte básico."
    }
  ];

  const caracteristicas = [
    {
      titulo: "Voz Natural",
      descripcion: "Síntesis de voz avanzada",
      icon: "🗣️"
    },
    {
      titulo: "Multilingüe",
      descripcion: "Soporte en varios idiomas",
      icon: "🌎"
    },
    {
      titulo: "Personalizable",
      descripcion: "Adaptable a tu marca",
      icon: "⚙️"
    },
    {
      titulo: "Seguro",
      descripcion: "Encriptación de datos",
      icon: "🔒"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Agentes de Voz IA</h1>
            <p className="text-xl text-gray-200 mb-8">
              Transforma tu atención al cliente con asistentes virtuales inteligentes
            </p>
            <motion.a
              href="https://wa.me/529161500571"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              solicita una demo
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

      {/* Demo Interactivo */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Prueba Nuestro Agente de Voz</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <motion.div 
                className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center relative"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(147, 51, 234, 0.2)",
                    "0 0 0 20px rgba(147, 51, 234, 0)",
                    "0 0 0 0 rgba(147, 51, 234, 0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.span 
                  className="text-4xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >🎙️</motion.span>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-full rounded-full border-2 border-purple-500"
                    animate={{
                      scale: [1, 1.5 + i * 0.2],
                      opacity: [0.6, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </motion.div>
              <p className="text-gray-600 mb-6">
                Presiona el botón y haz una pregunta a nuestro agente de voz
              </p>
              <motion.a
                href="https://wa.me/529161500571"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors inline-block"
              >
                esta en beta
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
              Beneficios de los Agentes de Voz
            </h2>
            <p className="text-xl text-gray-600">
              Tecnología de vanguardia para una atención excepcional
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
                      <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* Tecnología Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Nuestra Tecnología</h2>
            <p className="text-xl text-gray-300">
              Potenciada por los últimos avances en IA y procesamiento de lenguaje natural
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                titulo: "NLP Avanzado",
                descripcion: "Comprensión profunda del contexto y la intención",
                icon: "🧠"
              },
              {
                titulo: "Síntesis de Voz",
                descripcion: "Voces naturales y personalizables",
                icon: "🗣️"
              },
              {
                titulo: "Aprendizaje Continuo",
                descripcion: "Mejora constante basada en interacciones",
                icon: "📈"
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{tech.titulo}</h3>
                <p className="text-gray-400">{tech.descripcion}</p>
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
              Empresas que han transformado su atención al cliente
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{caso.empresa}</h3>
                <p className="text-purple-600 font-medium mb-4">{caso.resultado}</p>
                <p className="text-gray-600 italic">"{caso.testimonio}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Comienza con Agentes de Voz IA
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Únete a las empresas que están revolucionando su atención al cliente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/529161500571"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Solicitar Demo
              </motion.a>
              <motion.a
                href="https://wa.me/529161500571"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-purple-700 text-white rounded-full font-semibold hover:bg-purple-800 transition-colors inline-block"
              >
                Contactar Ventas
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AgentesVozPage;