import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TareasRepetitivasPage = () => {
  const beneficios = [
    {
      titulo: "Automatización de Procesos",
      descripcion: "Automatiza tareas manuales y repetitivas",
      icon: "⚙️",
      detalles: [
        "Flujos de trabajo personalizados",
        "Integración entre sistemas",
        "Reducción de errores humanos",
        "Mayor productividad"
      ]
    },
    {
      titulo: "Gestión Documental",
      descripcion: "Procesamiento y organización automática de documentos",
      icon: "📄",
      detalles: [
        "OCR y extracción de datos",
        "Clasificación automática",
        "Archivo digital inteligente",
        "Búsqueda avanzada"
      ]
    },
    {
      titulo: "Reportes Automáticos",
      descripcion: "Generación y distribución automática de informes",
      icon: "📊",
      detalles: [
        "Programación de reportes",
        "Múltiples formatos",
        "Distribución automática",
        "Dashboards en tiempo real"
      ]
    },
    {
      titulo: "Gestión de Datos",
      descripcion: "Procesamiento y sincronización automática de información",
      icon: "🔄",
      detalles: [
        "Migración de datos",
        "Validación automática",
        "Limpieza de datos",
        "Sincronización entre sistemas"
      ]
    }
  ];

  const casos = [
    {
      empresa: "Corporación Global",
      resultado: "Ahorro de 120 horas mensuales",
      testimonio: "La automatización de nuestros procesos administrativos ha transformado nuestra eficiencia operativa."
    },
    {
      empresa: "Servicios Financieros XYZ",
      resultado: "Reducción del 90% en errores de datos",
      testimonio: "Los procesos automatizados han eliminado prácticamente todos los errores de entrada de datos."
    }
  ];

  const caracteristicas = [
    {
      titulo: "No-Code",
      descripcion: "Sin necesidad de programar",
      icon: "🔌"
    },
    {
      titulo: "Escalable",
      descripcion: "Crece con tu negocio",
      icon: "📈"
    },
    {
      titulo: "Seguro",
      descripcion: "Protección de datos",
      icon: "🔒"
    },
    {
      titulo: "Flexible",
      descripcion: "Adaptable a tus necesidades",
      icon: "🔧"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Automatización de Tareas Repetitivas</h1>
            <p className="text-xl text-gray-100 mb-8">
              Libera el potencial de tu equipo automatizando las tareas rutinarias
            </p>
            <motion.a
              href="https://wa.me/529161500571"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
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

      {/* Demo de Automatización */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Diseñador de Flujos de Trabajo</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">⚡</span>
              </div>
              <p className="text-gray-600 mb-6">
                Crea flujos de trabajo automatizados sin escribir código
              </p>
              <motion.a
                href="https://wa.me/529161500571"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                Probar Demo
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
              Beneficios de la Automatización
            </h2>
            <p className="text-xl text-gray-600">
              Optimiza tus procesos y mejora la eficiencia operativa
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
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              Conecta con tus herramientas favoritas
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {['Google Workspace', 'Microsoft 365', 'Salesforce', 'SAP'].map((platform, index) => (
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
              Empresas que han transformado sus procesos con automatización
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
                <p className="text-green-600 font-medium mb-4">{caso.resultado}</p>
                <p className="text-gray-600 italic">"{caso.testimonio}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Comienza a Automatizar Hoy
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Únete a las empresas que ya han optimizado sus procesos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Solicitar Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 transition-colors"
              >
                Contactar Ventas
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TareasRepetitivasPage;