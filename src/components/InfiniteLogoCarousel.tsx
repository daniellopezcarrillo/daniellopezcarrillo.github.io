import React from 'react';
import { motion } from 'framer-motion';
import {
  FaInstagram,
  FaWhatsapp,
  FaPinterest,
  FaTelegram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaTrello,
  FaSpotify,
  FaPaypal,
  FaReddit,
  FaShopify,
  FaGithub,
  FaGitlab,
  FaFigma,
  FaDropbox,
  FaGoogle,
  FaStripe,
  FaJira,
  FaMailchimp,
} from 'react-icons/fa';
import { SiNotion, SiAirtable, SiClickup } from 'react-icons/si';

interface Logo {
  icon: React.ElementType;
  name: string;
  color: string;
}

const logos: Logo[] = [
  { icon: FaInstagram, name: 'Instagram', color: 'hover:text-pink-500' },
  { icon: FaWhatsapp, name: 'WhatsApp', color: 'hover:text-green-500' },
  { icon: FaPinterest, name: 'Pinterest', color: 'hover:text-red-500' },
  { icon: SiAirtable, name: 'Airtable', color: 'hover:text-blue-500' },
  { icon: FaTelegram, name: 'Telegram', color: 'hover:text-blue-400' },
  { icon: FaTwitter, name: 'X (Twitter)', color: 'hover:text-gray-800' },
  { icon: FaFacebook, name: 'Facebook', color: 'hover:text-blue-600' },
  { icon: FaGoogle, name: 'Google Docs', color: 'hover:text-blue-500' },
  { icon: FaLinkedin, name: 'LinkedIn', color: 'hover:text-blue-700' },
  { icon: FaTrello, name: 'Trello', color: 'hover:text-blue-400' },
  { icon: FaStripe, name: 'Stripe', color: 'hover:text-purple-500' },
  { icon: FaSpotify, name: 'Spotify', color: 'hover:text-green-500' },
  { icon: SiNotion, name: 'Notion', color: 'hover:text-gray-900' },
  { icon: FaGoogle, name: 'Google Drive', color: 'hover:text-yellow-500' },
  { icon: FaMailchimp, name: 'Mailchimp', color: 'hover:text-yellow-400' },
  { icon: FaJira, name: 'Jira', color: 'hover:text-blue-500' },
  { icon: FaGoogle, name: 'Google Slides', color: 'hover:text-orange-500' },
  { icon: FaPaypal, name: 'PayPal', color: 'hover:text-blue-600' },
  { icon: FaReddit, name: 'Reddit', color: 'hover:text-orange-600' },
  { icon: FaShopify, name: 'Shopify', color: 'hover:text-green-600' },
  { icon: FaGoogle, name: 'Google Sheets', color: 'hover:text-green-600' },
  { icon: SiClickup, name: 'ClickUp', color: 'hover:text-purple-500' },
  { icon: FaGithub, name: 'GitHub', color: 'hover:text-gray-900' },
  { icon: FaGitlab, name: 'GitLab', color: 'hover:text-orange-600' },
  { icon: FaFigma, name: 'Figma', color: 'hover:text-purple-400' },
  { icon: FaDropbox, name: 'Dropbox', color: 'hover:text-blue-500' },
];

interface InfiniteLogoCarouselProps {
  speed?: number;
}

const InfiniteLogoCarousel: React.FC<InfiniteLogoCarouselProps> = ({ speed = 20 }) => {
  // Duplicar los logos para crear el efecto infinito
  const duplicatedLogos = [...logos, ...logos];

  // Dividir los logos en tres filas
  const rows = [
    duplicatedLogos.slice(0, Math.floor(duplicatedLogos.length / 3)),
    duplicatedLogos.slice(Math.floor(duplicatedLogos.length / 3), Math.floor(2 * duplicatedLogos.length / 3)),
    duplicatedLogos.slice(Math.floor(2 * duplicatedLogos.length / 3)),
  ];

  return (
    <div className="w-full overflow-hidden bg-gray-800/50 backdrop-blur-sm py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
        >
          Integra tus aplicaciones favoritas
        </motion.h2>
        
        <div className="space-y-12">
          {rows.map((rowLogos, index) => (
            <motion.div
              key={index}
              className="flex space-x-8 py-4"
              animate={{
                x: index % 2 === 0 ? [-1000, 0] : [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: speed,
                  ease: "linear",
                },
              }}
            >
              {rowLogos.map((logo, logoIndex) => {
                const Icon = logo.icon;
                return (
                  <motion.div
                    key={`${logo.name}-${logoIndex}`}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl bg-gray-700/30 backdrop-blur-sm 
                              shadow-lg hover:shadow-xl transition-all duration-300 min-w-[100px] ${logo.color}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    <span className="mt-2 text-xs md:text-sm text-gray-300 text-center">
                      {logo.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogoCarousel;
