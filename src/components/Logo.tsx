import { motion } from 'framer-motion'

// Importamos los logos directamente
import logoColor from '../assets/logo-color.svg'
import logoLight from '../assets/logo-light.svg'
import logoDark from '../assets/logo-dark.svg'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'light' | 'dark' | 'color'
  withText?: boolean
  className?: string
}

const Logo = ({ size = 'md', variant = 'color', withText = true, className = '' }: LogoProps) => {
  // Tamaños del logo
  const sizes = {
    sm: { container: 'h-8 w-8', text: 'text-lg' },
    md: { container: 'h-10 w-10', text: 'text-xl' },
    lg: { container: 'h-16 w-16', text: 'text-2xl' },
    xl: { container: 'h-24 w-24', text: 'text-4xl' }
  }
  
  // Variantes de color para el texto
  const textColors = {
    light: 'text-white',
    dark: 'text-gray-900',
    color: 'bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent'
  }
  
  // URL de la imagen del logo según la variante
  const logoSrc = variant === 'light' 
    ? logoLight
    : variant === 'dark' 
      ? logoDark
      : logoColor;
  
  return (
    <div className={`flex items-center ${className}`}>
      <div className={`${sizes[size].container} flex items-center justify-center`}>
        <img 
          src={logoSrc} 
          alt="AINNOVA Logo" 
          className="w-full h-full object-contain" 
        />
      </div>
      
      {withText && (
        <motion.span 
          className={`ml-2 font-bold ${sizes[size].text} ${textColors[variant]}`}
        >
          AINNOVA
        </motion.span>
      )}
    </div>
  )
}

export default Logo 