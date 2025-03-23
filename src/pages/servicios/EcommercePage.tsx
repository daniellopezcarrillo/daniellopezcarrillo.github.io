import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EcommercePage = () => {
  const beneficios = [
    {
      titulo: "Chatbot de Ventas 24/7",
      descripcion: "Asistente virtual especializado en convertir visitantes en clientes",
      icon: "🤖",
      detalles: [
        "Respuestas automáticas personalizadas",
        "Recomendaciones de productos inteligentes",
        "Seguimiento de carritos abandonados",
        "Integración con WhatsApp Business"
      ]
    },
    {
      titulo: "Gestión de Inventario",
      descripcion: "Control automático de stock y sincronización multi-plataforma",
      icon: "📦",
      detalles: [
        "Actualización en tiempo real",
        "Alertas de stock bajo",
        "Sincronización con múltiples marketplaces",
        "Predicción de demanda con IA"
      ]
    },
    {
      titulo: "Automatización de Marketing",
      descripcion: "Campañas personalizadas basadas en comportamiento del usuario",
      icon: "📈",
      detalles: [
        "Emails automáticos personalizados",
        "Recuperación de carritos abandonados",
        "Segmentación inteligente de clientes",
        "Ofertas dinámicas basadas en IA"
      ]
    },
    {
      titulo: "Procesamiento de Pedidos",
      descripcion: "Gestión automatizada del ciclo completo de pedidos",
      icon: "🚚",
      detalles: [
        "Confirmación automática de pedidos",
        "Seguimiento en tiempo real",
        "Gestión de devoluciones",
        "Integración con sistemas de envío"
      ]
    }
  ];

  const casos = [
    {
      empresa: "TechStore MX",
      resultado: "Incremento del 150% en conversión de chat",
      testimonio: "El chatbot ha revolucionado nuestra atención al cliente, atendiendo consultas 24/7."
    },
    {
      empresa: "Fashion Boutique",
      resultado: "Reducción del 60% en errores de inventario",
      testimonio: "La automatización del inventario nos permite vender en múltiples plataformas sin problemas."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Soluciones E-commerce</h1>
            <p className="text-xl text-gray-200 mb-8">
              Automatiza tu tienda online y multiplica tus ventas con inteligencia artificial
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Solicitar Demo
            </motion.button>
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
              Beneficios para tu E-commerce
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

      {/* Integrations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Integraciones Disponibles
            </h2>
            <p className="text-xl text-gray-600">
              Conectamos tu tienda con las principales plataformas
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {['Shopify', 'WooCommerce', 'Mercado Libre', 'Amazon'].map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-4"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">{platform[0]}</span>
                </div>
                <span className="text-gray-900 font-medium">{platform}</span>
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
              Empresas que han transformado su e-commerce con nuestras soluciones
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
                <h3 className="text-xl font-semibold mb-2">{caso.empresa}</h3>
                <p className="text-blue-400 font-medium mb-4">{caso.resultado}</p>
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
              Impulsa tu E-commerce Ahora
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Únete a los cientos de negocios que ya han automatizado sus operaciones
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
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

export default EcommercePage; 