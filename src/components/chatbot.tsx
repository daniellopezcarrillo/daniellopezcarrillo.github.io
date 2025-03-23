import React, { useState, useRef, useEffect } from 'react';
import { motion, Variants, PanInfo } from 'framer-motion';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface Position {
  x: number;
  y: number;
  corner: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [position, setPosition] = useState<Position>({
    x: window.innerWidth - 100,
    y: window.innerHeight - 100,
    corner: 'bottom-right'
  });
  
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dragConstraintsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      // Ajustar posición cuando cambia el tamaño de la ventana
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      
      setPosition(prev => {
        let newX = prev.x;
        let newY = prev.y;
        let newCorner = prev.corner;

        // Ajustar a la esquina más cercana
        if (newX < screenWidth / 2) {
          newX = 20;
          if (newY < screenHeight / 2) {
            newY = 20;
            newCorner = 'top-left';
          } else {
            newY = screenHeight - 100;
            newCorner = 'bottom-left';
          }
        } else {
          newX = screenWidth - 100;
          if (newY < screenHeight / 2) {
            newY = 20;
            newCorner = 'top-right';
          } else {
            newY = screenHeight - 100;
            newCorner = 'bottom-right';
          }
        }

        return { x: newX, y: newY, corner: newCorner as Position['corner'] };
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          text: "¡Hola! Soy el asistente virtual de AINNOVA. ¿En qué puedo ayudarte hoy?",
          isUser: false,
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen]);

  const handleDrag = (_: any, info: PanInfo) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    let newX = position.x + info.delta.x;
    let newY = position.y + info.delta.y;
    
    // Determinar la esquina más cercana
    let newCorner: Position['corner'];
    
    if (newX < screenWidth / 2) {
      newX = 20;
      if (newY < screenHeight / 2) {
        newY = 20;
        newCorner = 'top-left';
      } else {
        newY = screenHeight - 100;
        newCorner = 'bottom-left';
      }
    } else {
      newX = screenWidth - 100;
      if (newY < screenHeight / 2) {
        newY = 20;
        newCorner = 'top-right';
      } else {
        newY = screenHeight - 100;
        newCorner = 'bottom-right';
      }
    }

    setPosition({ x: newX, y: newY, corner: newCorner });
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    try {
      const response = await fetch('https://n8n-n8n.chuy7x.easypanel.host/webhook/ainova', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
        }),
      });

      const data = await response.text();
      
      const botMessage: Message = {
        text: data,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        text: "Lo siento, ha ocurrido un error. Por favor, intenta de nuevo más tarde.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const chatVariants: Variants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  };

  const getChatPosition = () => {
    const baseStyles = {
      position: 'fixed' as const,
      zIndex: 1000,
    };

    // Ajustar el ancho de la ventana de chat en dispositivos móviles
    const isMobile = window.innerWidth <= 640;
    const chatWidth = isMobile ? '90vw' : '320px';

    switch (position.corner) {
      case 'top-left':
        return {
          ...baseStyles,
          top: '20px',
          left: '20px',
          width: chatWidth,
        };
      case 'top-right':
        return {
          ...baseStyles,
          top: '20px',
          right: '20px',
          width: chatWidth,
        };
      case 'bottom-left':
        return {
          ...baseStyles,
          bottom: '20px',
          left: '20px',
          width: chatWidth,
        };
      case 'bottom-right':
      default:
        return {
          ...baseStyles,
          bottom: '20px',
          right: '20px',
          width: chatWidth,
        };
    }
  };

  return (
    // Este div actúa como el contenedor principal y es la referencia para las restricciones
    <div ref={dragConstraintsRef} style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, pointerEvents: 'none' }}>
      <motion.div
        drag
        dragMomentum={false}
        onDrag={handleDrag}
        style={getChatPosition()}
        dragConstraints={dragConstraintsRef}
        // Aseguramos que este elemento sí capture eventos
      >
        {!isOpen ? (
          <motion.button
            className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.557 1.522 4.82 3.889 6.053-.325 1.107-.794 2.045-1.414 2.79-.179.216-.333.384-.333.384s-.055.053-.143.103c-.088.05-.204.07-.284.022-.08-.05-.095-.158-.072-.246l.006-.021c.137-.462.374-1.153.456-1.631.082-.478-.126-.642-.126-.642-2.451-1.14-4.025-3.243-4.025-5.812 0-3.93 4.03-7.115 9-7.115s9 3.185 9 7.115c0 3.931-4.03 7.115-9 7.115-.58 0-1.15-.047-1.697-.139l-.444-.061-.245.408c-.331.551-.974 1.128-1.563 1.537-.591.41-1.173.634-1.173.634v-2.291c-2.323-1.147-3.878-3.278-3.878-5.775 0-3.93 4.03-7.115 9-7.115z"/>
            </svg>
          </motion.button>
        ) : (
          <motion.div
            initial="closed"
            animate="open"
            variants={chatVariants}
            className="bg-white rounded-lg shadow-xl flex flex-col"
            style={{ height: 'calc(100vh - 160px)', maxHeight: '500px' }}
          >
            {/* Chat Header */}
            <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">Asistente AINNOVA</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>

            {/* Chat Messages */}
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isUser
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs opacity-75 mt-1 block">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:border-blue-600"
                />
                <button
                  onClick={sendMessage}
                  className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ChatBot;
