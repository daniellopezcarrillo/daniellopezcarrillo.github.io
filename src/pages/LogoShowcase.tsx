import { motion } from 'framer-motion'
import Logo from '../components/Logo'

const LogoShowcase = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-10 text-center"
            >
              Logo AINNOVA
            </motion.h1>
            
            {/* Versión a color */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Versión a Color</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
                  <Logo size="sm" variant="color" className="mb-4" />
                  <span className="text-sm text-gray-500">Tamaño SM</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
                  <Logo size="md" variant="color" className="mb-4" />
                  <span className="text-sm text-gray-500">Tamaño MD</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
                  <Logo size="lg" variant="color" className="mb-4" />
                  <span className="text-sm text-gray-500">Tamaño LG</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
                  <Logo size="xl" variant="color" className="mb-4" />
                  <span className="text-sm text-gray-500">Tamaño XL</span>
                </div>
              </div>
            </div>
            
            {/* Versión clara */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Versión Clara (para fondos oscuros)</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8 bg-gray-900 rounded-xl">
                <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl">
                  <Logo size="sm" variant="light" className="mb-4" />
                  <span className="text-sm text-gray-400">Tamaño SM</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl">
                  <Logo size="md" variant="light" className="mb-4" />
                  <span className="text-sm text-gray-400">Tamaño MD</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl">
                  <Logo size="lg" variant="light" className="mb-4" />
                  <span className="text-sm text-gray-400">Tamaño LG</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl">
                  <Logo size="xl" variant="light" className="mb-4" />
                  <span className="text-sm text-gray-400">Tamaño XL</span>
                </div>
              </div>
            </div>
            
            {/* Versión oscura */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center">Versión Oscura (para fondos claros)</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8 bg-gray-100 rounded-xl">
                <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
                  <Logo size="sm" variant="dark" className="mb-4" />
                  <span className="text-sm text-gray-500">Tamaño SM</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
                  <Logo size="md" variant="dark" className="mb-4" />
                  <span className="text-sm text-gray-500">Tamaño MD</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
                  <Logo size="lg" variant="dark" className="mb-4" />
                  <span className="text-sm text-gray-500">Tamaño LG</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
                  <Logo size="xl" variant="dark" className="mb-4" />
                  <span className="text-sm text-gray-500">Tamaño XL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LogoShowcase 