import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const RestaurantesPage = () => {
  const beneficios = [
    {
      titulo: "Gestión de Pedidos Digital",
      descripcion: "Sistema inteligente para gestionar pedidos en mesa, delivery y take-away",
      icon: "📱",
      detalles: [
        "Toma de pedidos desde dispositivos móviles",
        "Integración con plataformas de delivery",
        "Sistema de comandas digital",
        "Gestión de mesas y reservas"
      ]
    },
    {
      titulo: "Control de Inventario",
      descripcion: "Automatización del control de stock y gestión de insumos",
      icon: "🏪",
      detalles: [
        "Control de stock en tiempo real",
        "Alertas de ingredientes bajos",
        "Predicción de demanda",
        "Reducción de desperdicios"
      ]
    },
    {
      titulo: "Atención al Cliente",
      descripcion: "Chatbot especializado para restaurantes y sistema de reservas",
      icon: "💬",
      detalles: [
        "Reservas automáticas 24/7",
        "Respuestas a preguntas frecuentes",
        "Gestión de reseñas y feedback",
        "Promociones personalizadas"
      ]
    },
    {
      titulo: "Análisis y Reportes",
      descripcion: "Informes detallados y análisis predictivo para tu negocio",
      icon: "📊",
      detalles: [
        "Dashboard en tiempo real",
        "Análisis de platos más vendidos",
        "Reportes de satisfacción",
        "Predicción de ventas"
      ]
    }
  ];

  const casos = [
    {
      restaurante: "La Trattoria Italiana",
      resultado: "Reducción del 30% en tiempos de servicio",
      testimonio: "La automatización nos permitió atender más mesas y mejorar la experiencia del cliente."
    },
    {
      restaurante: "Sushi Express",
      resultado: "Incremento del 45% en pedidos online",
      testimonio: "El sistema de pedidos digital transformó nuestro negocio de delivery."
    }
  ];

  const caracteristicas = [
    {
      titulo: "Menú Digital",
      descripcion: "QR codes y menús interactivos",
      icon: "🗂️"
    },
    {
      titulo: "Pagos Digitales",
      descripcion: "Múltiples métodos de pago",
      icon: "💳"
    },
    {
      titulo: "Fidelización",
      descripcion: "Programa de puntos automático",
      icon: "⭐"
    },
    {
      titulo: "Analytics",
      descripcion: "Reportes y estadísticas",
      icon: "📈"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Automatización para Restaurantes</h1>
            <p className="text-xl text-gray-200 mb-8">
              Transforma la operación de tu restaurante con soluciones inteligentes
            </p>
            <motion.a
              href="https://wa.me/529161500571"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Solicitar Demo
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
              Beneficios para tu Restaurante
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
                      <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* Proceso Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Cómo Funciona?
            </h2>
            <p className="text-xl text-gray-600">
              Implementación simple en 4 pasos
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Línea conectora */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-orange-200 -translate-y-1/2 hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { paso: "Análisis", icon: "🔍" },
                  { paso: "Configuración", icon: "⚙️" },
                  { paso: "Capacitación", icon: "👥" },
                  { paso: "Seguimiento", icon: "📱" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative text-center"
                  >
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900">{item.paso}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
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
              Restaurantes que han transformado su operación con nuestras soluciones
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
                <h3 className="text-xl font-semibold mb-2">{caso.restaurante}</h3>
                <p className="text-orange-400 font-medium mb-4">{caso.resultado}</p>
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
              Moderniza tu Restaurante
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Únete a los restaurantes que ya han automatizado sus operaciones
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors"
              >
                Comenzar Ahora
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gray-200 text-gray-900 rounded-full font-semibold hover:bg-gray-300 transition-colors"
              >
                Ver Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantesPage;