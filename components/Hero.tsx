// components/Hero.tsx
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-[#0B1F3A] text-white">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold"
      >
        Welcome to DreamVator
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="text-xl mt-4 max-w-2xl"
      >
        Guiding future aviators with mentorship, structure, and passion. 🚀
      </motion.p>
    </section>
  );
}
