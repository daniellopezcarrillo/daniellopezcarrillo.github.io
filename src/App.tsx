import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import LogoShowcase from './pages/LogoShowcase';
import NotFoundPage from './pages/NotFoundPage';
import HoteleriaPage from './pages/servicios/HoteleriaPage';
import EcommercePage from './pages/servicios/EcommercePage';
import RestaurantesPage from './pages/servicios/RestaurantesPage';
import AgentesVozPage from './pages/servicios/AgentesVozPage';
import AgenciasViajePage from './pages/servicios/AgenciasViajePage';
import TareasRepetitivasPage from './pages/servicios/TareasRepetitivasPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="logo" element={<LogoShowcase />} />
            <Route path="servicios/hoteleria" element={<HoteleriaPage />} />
            <Route path="servicios/ecommerce" element={<EcommercePage />} />
            <Route path="servicios/restaurantes" element={<RestaurantesPage />} />
            <Route path="servicios/agentes-voz" element={<AgentesVozPage />} />
            <Route path="servicios/agencias-viaje" element={<AgenciasViajePage />} />
            <Route path="servicios/tareas-repetitivas" element={<TareasRepetitivasPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
