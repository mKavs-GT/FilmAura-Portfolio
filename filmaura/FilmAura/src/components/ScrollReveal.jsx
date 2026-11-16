import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({
    children,
    width = "100%",
    delay = 0,
    duration = 0.5,
    y = 20,
    x = 0,
    opacity = 0,
    scale = 1,
    once = true
}) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    const effectiveY = isMobile ? Math.min(y, 16) : y;
    const effectiveDuration = isMobile ? Math.min(duration, 0.4) : duration;
    const effectiveAmount = isMobile ? 0.05 : 0.1;

    return (
        <motion.div
            initial={{ opacity, y: effectiveY, x, scale }}
            whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            viewport={{ once, amount: effectiveAmount }}
            transition={{
                duration: effectiveDuration,
                delay,
                ease: [0.25, 0.1, 0.25, 1.0] // Clean cubic-bezier for premium feel
            }}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
