import { motion } from 'framer-motion';

const tech = [
  'React', 'Tailwind CSS', 'JavaScript', 'Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'Node.js'
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold mb-8 text-pastel-yellow">About Me</h2>
        <p className="mb-6 text-3xl text-pastel-blue font-semibold">
         From building my first HTML page to experimenting with AI models, my tech journey has been full of curiosity and creativity. When I’m not coding, I’m either sketching new UI ideas or diving into open-source projects to sharpen my skills.
        </p>
        <h3 className="text-2xl font-semibold mb-4 text-pastel-pink">Technologies I use:</h3>
        <ul className="flex flex-wrap gap-3">
          {tech.map(t => (
            <li key={t} className="bg-pastel-green text-black px-3 py-1 rounded-full text-lg font-medium shadow">
              {t}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}