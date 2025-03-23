import { useState } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (formData.phone && !/^[0-9]{9,}$/.test(formData.phone)) {
      newErrors.phone = 'Teléfono inválido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xnnpjjok', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        throw new Error('Error al enviar el formulario')
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpiamos el error del campo que se está editando
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      {submitSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="text-5xl mb-4">✨</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Gracias por contactarnos!</h3>
          <p className="text-gray-600">
            Nos pondremos en contacto contigo pronto.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="mt-6 px-6 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
          >
            Enviar otro mensaje
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
              placeholder="Tu nombre"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
              placeholder="tu@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
              placeholder="Tu teléfono"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
              placeholder="¿En qué podemos ayudarte?"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 px-6 text-white rounded-lg ${
              isSubmitting ? 'bg-gray-400' : 'bg-primary-600 hover:bg-primary-700'
            } transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </motion.button>
        </form>
      )}
    </motion.div>
  )
}

export default ContactForm