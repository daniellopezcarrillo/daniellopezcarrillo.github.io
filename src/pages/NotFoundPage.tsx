import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HomeIcon } from '@heroicons/react/24/outline'

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex min-h-[50vh] flex-col items-center justify-center text-center"
    >
      <h1 className="text-9xl font-extrabold text-primary-600">404</h1>
      <div className="absolute rotate-12 rounded bg-primary-100 px-2 text-sm text-primary-600 dark:bg-primary-900 dark:text-primary-300">
        Página no encontrada
      </div>
      <div className="mt-5">
        <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Lo sentimos, no pudimos encontrar la página que estás buscando.
        </p>
        <p className="mt-6 text-gray-500 dark:text-gray-400">
          Pero no te preocupes, puedes encontrar muchas otras cosas en nuestra página de inicio.
        </p>
      </div>
      <Link
        to="/"
        className="mt-10 inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        <HomeIcon className="mr-2 h-5 w-5" />
        Volver al inicio
      </Link>
    </motion.div>
  )
}

export default NotFoundPage 