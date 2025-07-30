import { motion } from 'framer-motion';
import SocialIcons from '../components/SocialIcons';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-8 text-blue-600"
      >
        Contact
      </motion.h2>
      <p className="mb-4 text-3xl font-semibold">Komal Gaur</p>
      <p className="mb-4 text-2xl">
        <a href="mailto:komalgaur992@gmail.com" className="text-blue-500 hover:underline">komalgaur992@gmail.com</a>
      </p>
      <p className="mb-4 text-2xl">
        <a href="https://www.linkedin.com/in/komal-2017a5188/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          LinkedIn
        </a>
      </p>
      <p className="mb-6 text-2xl">9305821015</p>
      <SocialIcons className="justify-center mt-6" />
    </section>
  );
}