import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiBell } from 'react-icons/fi';

const Navbar = () => {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <Link to="/" style={{ textDecoration: 'none' }}>
        <motion.div 
          className="navbar-brand"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="logo-icon">
            <span>🎓</span>
          </div>
          AdmitFlow
        </motion.div>
      </Link>

      <div className="navbar-right">
        <div className="navbar-search">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search students, applications..." />
        </div>
        
        <motion.div 
          className="notification-bell"
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiBell size={18} />
          <span className="badge">3</span>
        </motion.div>

        <motion.div 
          className="user-avatar"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          A
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;