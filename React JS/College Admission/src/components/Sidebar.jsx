import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiHome, FiUsers, FiFileText, FiBook, FiGrid,
  FiCreditCard, FiBell, FiFolder, FiUserCheck,
  FiAward, FiMapPin
} from 'react-icons/fi';

const menuItems = [
  { section: 'Main', items: [
    { path: '/', icon: FiHome, label: 'Dashboard' },
  ]},
  { section: 'Management', items: [
    { path: '/students', icon: FiUsers, label: 'Students' },
    { path: '/applications', icon: FiFileText, label: 'Applications' },
    { path: '/colleges', icon: FiMapPin, label: 'Colleges' },
    { path: '/departments', icon: FiGrid, label: 'Departments' },
    { path: '/courses', icon: FiBook, label: 'Courses' },
  ]},
  { section: 'Operations', items: [
    { path: '/payments', icon: FiCreditCard, label: 'Payments' },
    { path: '/notifications', icon: FiBell, label: 'Notifications' },
    { path: '/documents', icon: FiFolder, label: 'Documents' },
    { path: '/officers', icon: FiUserCheck, label: 'Officers' },
    { path: '/academic-records', icon: FiAward, label: 'Records' },
  ]},
];

const sidebarVariants = {
  hidden: { x: -260 },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const Sidebar = () => {
  const location = useLocation();

  return (
    <motion.aside
      className="sidebar"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      {menuItems.map((section, sIdx) => (
        <div key={sIdx} className="sidebar-section">
          <div className="sidebar-section-title">{section.section}</div>
          {section.items.map((item, iIdx) => (
            <motion.div key={item.path} variants={itemVariants}>
              <NavLink
                to={item.path}
                className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <motion.span
                  className="icon"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <item.icon />
                </motion.span>
                {item.label}
              </NavLink>
            </motion.div>
          ))}
        </div>
      ))}
    </motion.aside>
  );
};

export default Sidebar;