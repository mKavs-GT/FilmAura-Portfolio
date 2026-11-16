import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import { WatchLaterProvider } from './context/WatchLaterContext';
import Navbar from './components/Navbar';
import AuthModal from './components/AuthModal';
import AnimatedRoutes from './components/AnimatedRoutes';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import './styles/index.css';

function App() {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.has('noloading') || sessionStorage.getItem('filmaura_loaded')) {
        return false;
      }
    }
    return true;
  });

  const handleLoadingFinished = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('filmaura_loaded', 'true');
    }
    setLoading(false);
  };

  return (
    <AuthProvider>
      <WatchLaterProvider>
        <AnimatePresence mode="wait">
          {loading ? (
            <LoadingScreen key="loading" onFinished={handleLoadingFinished} />
          ) : (
            <Router>
              <div className="app">
                <Navbar />
                <AuthModal />
                <AnimatedRoutes />
                <Footer />
              </div>
            </Router>
          )}
        </AnimatePresence>
      </WatchLaterProvider>
    </AuthProvider>
  );
}

export default App;
