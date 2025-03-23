import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import logoMeduza from '../assets/logo2.png'

const underlineVariants = {
  initial: { width: 0 },
  hover: { width: '100%', transition: { duration: 0.3 } }
}

const logoVariants = {
  hover: { 
    scale: 1.1,
    rotate: 360,
    transition: { duration: 0.8, ease: "easeInOut" }
  }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  const backgroundColor = useTransform(
    scrollY,
    [0, 50, 100],
    ['rgba(17, 24, 39, 0)', 'rgba(17, 24, 39, 0.8)', 'rgba(17, 24, 39, 0.95)']
  )

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Inicio', href: '/' },
    {
      name: 'Servicios',
      href: '/services',
      submenu: [
        { name: 'Agencias de Viaje', href: '/servicios/agencias-viaje' },
        { name: 'Agentes de Voz', href: '/servicios/agentes-voz' },
        { name: 'E-commerce', href: '/servicios/ecommerce' },
        { name: 'Hotelería', href: '/servicios/hoteleria' },
        { name: 'Restaurantes', href: '/servicios/restaurantes' },
        { name: 'Tareas Repetitivas', href: '/servicios/tareas-repetitivas' }
      ]
    },
    { name: 'Sobre Nosotros', href: '/about' }
  ]

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed w-full z-50 py-3"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <motion.img
              src={logoMeduza}
              alt="Meduza Logo"
              className="h-16 w-auto"
              variants={logoVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className="relative group"
                whileHover="hover"
              >
                <Link
                  to={item.href}
                  className={`text-white text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-200 ${
                    location.pathname === item.href ? 'bg-white/20' : 'hover:bg-white/10'
                  } flex items-center gap-2`}
                >
                  {item.name}
                  {item.submenu && (
                    <svg
                      className="w-4 h-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-blue-400"
                    variants={underlineVariants}
                  />
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
            <motion.a
              href="https://wa.me/529161500571?text=Hola,%20me%20interesa%20saber%20más%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-center"
            >
              Contratar
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{
                rotate: isOpen ? 180 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-4 pb-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={`text-white text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-200 ${
                        location.pathname === item.href ? 'bg-white/20' : 'hover:bg-white/10'
                      }`}
                      onClick={() => !item.submenu && setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <motion.a
                  href="https://wa.me/529161500571?text=Hola,%20me%20interesa%20saber%20más%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-center"
                >
                  Contratar
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar