import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatBot from '../components/chatbot';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="pt-16"
      >
        <Outlet />
      </motion.main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default MainLayout;
