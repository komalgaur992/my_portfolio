import { motion } from 'framer-motion';

const tech = [
  'C++', 'Python', 'JavaScript', 'Dart', 'NodeJs', 'Django', 'ReactJs', 'Flutter', 'MongoDb', 'Firebase', 'AWS (Learning)'
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
        <h2 className="text-3xl font-bold mb-4 text-yellow-500">About Me</h2>
        <p className="mb-6 text-lg text-blue-500">
          Hi! I'm Komal Gaur, a Computer Science Engineer (B.Tech, Government Women Engineering College, Ajmer, Rajasthan, graduating July 2025). I love building scalable web and mobile apps, working with data, and collaborating with teams to deliver impactful solutions.
        </p>
        <h3 className="text-xl font-semibold mb-2 text-pink-500">Technologies & Skills:</h3>
        <ul className="flex flex-wrap gap-3 mb-4">
          {tech.map(t => (
            <li key={t} className="bg-green-200 text-black px-3 py-1 rounded-full text-sm font-medium shadow">
              {t}
            </li>
          ))}
        </ul>
        <p className="text-base text-gray-700">
          Other Skills: Git, REST APIs, Full Stack Development, Android Development, Software Testing, Communication
        </p>
      </motion.div>
    </section>
  );
}