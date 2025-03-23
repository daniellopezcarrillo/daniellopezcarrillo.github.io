import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaRobot, FaDatabase, FaBell, FaChartLine, FaCogs, FaTasks } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';

interface Service {
  id: string;
  title: string;
  description: string;
  example: string;
  icon: JSX.Element;
  color: string;
  functions: string[];
}

const services: Service[] = [
  {
    id: 'api',
    title: 'Integración de APIs',
    description: 'Conectamos plataformas y servicios para que trabajen juntos de manera eficiente.',
    example: 'Integramos WhatsApp, Telegram, CRMs y ERPs para que tu empresa automatice procesos sin fricciones.',
    icon: <BiCodeAlt className="text-4xl" />,
    color: 'from-green-400 to-green-600',
    functions: [
      'Conexión con WhatsApp Business API y Telegram',
      'Sincronización en tiempo real con CRM y ERP',
      'Reducción de errores en transferencias de datos'
    ]
  },
  {
    id: 'chatbot',
    title: 'Automatización de Chatbots',
    description: 'Implementamos asistentes virtuales que responden preguntas y guían a los clientes 24/7.',
    example: 'Bots en WhatsApp y Telegram que pueden atender clientes, resolver dudas y gestionar pedidos automáticamente.',
    icon: <FaRobot className="text-4xl" />,
    color: 'from-purple-400 to-purple-600',
    functions: [
      'Atención 24/7 con inteligencia artificial',
      'Personalización avanzada de respuestas',
      'Capacidad de aprendizaje y mejora continua'
    ]
  },
  {
    id: 'data',
    title: 'Gestión de Datos en Tiempo Real',
    description: 'Extraemos, transformamos y almacenamos datos automáticamente para análisis estratégico.',
    example: 'Un dashboard en tiempo real que muestra métricas clave de tu negocio.',
    icon: <FaDatabase className="text-4xl" />,
    color: 'from-blue-400 to-blue-600',
    functions: [
      'Procesamiento ETL automatizado',
      'Visualización y análisis de datos en vivo',
      'Seguridad avanzada en el almacenamiento'
    ]
  },
  {
    id: 'notifications',
    title: 'Notificaciones Inteligentes',
    description: 'Enviamos alertas personalizadas en WhatsApp, SMS o email basadas en eventos específicos.',
    example: 'Notificaciones automáticas a clientes cuando su pedido está en camino.',
    icon: <FaBell className="text-4xl" />,
    color: 'from-orange-400 to-orange-600',
    functions: [
      'Alertas configurables para diferentes plataformas',
      'Seguimiento de eventos y activadores personalizados',
      'Integración con sistemas de soporte y CRM'
    ]
  },
  {
    id: 'sales',
    title: 'Automatización de Ventas',
    description: 'Optimiza el embudo de ventas con respuestas automáticas y seguimiento inteligente de leads.',
    example: 'Un bot que califica clientes potenciales y les envía información relevante según su interés.',
    icon: <FaChartLine className="text-4xl" />,
    color: 'from-red-400 to-red-600',
    functions: [
      'Identificación y clasificación de leads',
      'Respuestas automáticas personalizadas',
      'Integración con plataformas de marketing digital'
    ]
  },
  {
    id: 'workflow',
    title: 'Optimización de Workflows Empresariales',
    description: 'Automatizamos tareas repetitivas con RPA e inteligencia artificial para optimizar la eficiencia.',
    example: 'Eliminamos procesos manuales en la gestión de inventarios y generación de reportes.',
    icon: <FaCogs className="text-4xl" />,
    color: 'from-yellow-400 to-yellow-600',
    functions: [
      'Implementación de bots RPA para automatizar tareas',
      'Reducción de carga operativa en procesos internos',
      'Integración con herramientas de productividad empresarial'
    ]
  }
];

const ServiceCard = ({ service }: { service: Service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg
        transform-gpu transition-all duration-200 ease-in-out`}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className={`h-full w-full p-6 ${isHovered ? 'pb-4' : ''}`}
      >
        <motion.div
          className={`bg-gradient-to-r ${service.color} p-4 rounded-lg mb-4 inline-block`}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          {service.icon}
        </motion.div>
        <h3 className="text-xl font-bold mb-2 dark:text-white">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span className="font-semibold">Ejemplo:</span> {service.example}
            </p>
            <div className="space-y-2">
              {service.functions.map((func, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <FaTasks className="text-gray-400 dark:text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{func}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ServiceNetworkMap = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceNetworkMap;