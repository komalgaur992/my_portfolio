import { motion } from 'framer-motion';
import SocialIcons from '../components/SocialIcons';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-green-400">
          Komal
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl font-medium mb-6 text-blue-400 text-center max-w-3xl mx-auto"
        >
        Hey there!
Welcome to my digital space — I’m Komal, a frontend developer who loves designing clean, responsive UIs and building smooth mobile/web experiences. Lately, I’ve been diving into AI to make apps not just smart, but actually helpful.


        </motion.p>
        <a
          href="/assets/Komal_Resume.pdf"
          download="Komal_Resume.pdf"
          className="inline-block px-6 py-2 rounded-full bg-green-400 text-black font-bold shadow hover:bg-green-200 transition mb-6"
        >
          Download Resume
        </a>
        <SocialIcons className="justify-center mt-4" />
      </motion.div>
    </section>
  );
}

