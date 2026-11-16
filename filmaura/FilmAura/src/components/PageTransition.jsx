import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    // Scroll to top when the new page mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: isMobile ? 0.15 : 0.3, ease: "easeInOut" }}
            style={{ width: "100%" }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
