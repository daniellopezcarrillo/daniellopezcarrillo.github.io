import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/AINNOVA-removebg.png';
import meduza from '../assets/meduza.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  

  const socialLinks = [
    { 
      icon: FaInstagram, 
      href: 'https://www.instagram.com/ainnova.mx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D', 
      label: 'Instagram',
      hoverColor: 'hover:text-pink-500'
    },
    { 
      icon: FaFacebook, 
      href: 'https://www.facebook.com/AinnovaOficial/', 
      label: 'Facebook',
      hoverColor: 'hover:text-blue-600'
    },
    { 
      icon: FaEnvelope, 
      href: 'mailto:ainnovaoficial@gmail.com', 
      label: 'Email',
      hoverColor: 'hover:text-red-500'
    },
    { 
      icon: FaWhatsapp, 
      href: 'https://wa.me/529161500571', 
      label: 'WhatsApp',
      hoverColor: 'hover:text-green-500'
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Logo y descripción */}
          <div className="text-center space-y-4">
            <Link to="/" className="flex items-center justify-center space-x-3">
              <img src={logo} alt="Logo" className="h-16 w-auto" />
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                AINNOVA
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-lg mx-auto">
              Transformando el futuro con soluciones tecnológicas innovadoras. 
              Impulsamos el crecimiento de tu negocio con IA y desarrollo web de vanguardia.
            </p>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Redes sociales */}
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-lg font-semibold text-white">Síguenos en</h3>
              <div className="flex space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.hoverColor} transform hover:scale-110 transition-all duration-300 ease-in-out`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
            {/* Copyright */}
            <p className="text-sm text-gray-400 mt-6">
              {currentYear} AINNOVA. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;