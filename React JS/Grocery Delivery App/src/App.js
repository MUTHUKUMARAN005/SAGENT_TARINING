import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Customers from './pages/Customers';
import Orders from './pages/Orders';
import Stores from './pages/Stores';
import Inventory from './pages/Inventory';
import Payments from './pages/Payments';
import Deliveries from './pages/Deliveries';
import Users from './pages/Users';
import Notifications from './pages/Notifications';
import Discounts from './pages/Discounts';
import Cancellations from './pages/Cancellations';
import FloatingParticles from './components/FloatingParticles';
import './App.css';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/deliveries" element={<Deliveries />} />
        <Route path="/users" element={<Users />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/discounts" element={<Discounts />} />
        <Route path="/cancellations" element={<Cancellations />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1e293b',
            color: '#fff',
            border: '1px solid #334155',
            borderRadius: '16px',
            padding: '16px 20px',
            fontSize: '0.9rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          },
          success: {
            iconTheme: { primary: '#10b981', secondary: '#fff' },
            style: { border: '1px solid rgba(16, 185, 129, 0.3)' },
          },
          error: {
            iconTheme: { primary: '#ef4444', secondary: '#fff' },
            style: { border: '1px solid rgba(239, 68, 68, 0.3)' },
          },
        }}
      />
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <FloatingParticles />
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;