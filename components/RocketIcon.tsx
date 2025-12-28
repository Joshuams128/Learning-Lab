'use client';

import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function RocketIcon() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative"
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary-500 to-mint-500 rounded-full flex items-center justify-center shadow-2xl"
      >
        <Rocket className="text-white" size={48} />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-gradient-to-br from-primary-300 to-mint-300 rounded-full blur-xl -z-10"
      />
    </motion.div>
  );
}
