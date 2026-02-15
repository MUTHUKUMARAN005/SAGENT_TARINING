import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Applications from './pages/Applications';
import Colleges from './pages/Colleges';
import Courses from './pages/Courses';
import Departments from './pages/Departments';
import Payments from './pages/Payments';
import Notifications from './pages/Notifications';
import Documents from './pages/Documents';
import Officers from './pages/Officers';
import AcademicRecords from './pages/AcademicRecords';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app-body">
          <Sidebar />
          <main className="main-content">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/students" element={<Students />} />
                <Route path="/applications" element={<Applications />} />
                <Route path="/colleges" element={<Colleges />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/officers" element={<Officers />} />
                <Route path="/academic-records" element={<AcademicRecords />} />
              </Routes>
            </AnimatePresence>
          </main>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </Router>
  );
}

export default App;