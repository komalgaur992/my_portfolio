import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold mb-8 text-yellow-500"
      >
        Work Experience
      </motion.h2>
      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-600">Spring Time Software Solutions Pvt. Ltd., Noida, UP</h3>
        <p className="font-semibold">Front-end Developer Intern <span className="text-gray-500">Jun 2024 - Present</span></p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Designed and tested secure login/logout protocols for Cloudpub.in, achieving 99.9% success accuracy and reducing security incidents by 60%.</li>
          <li>Developed dynamic React.js front-end components integrated with REST APIs, improving scalability and user interactivity.</li>
          <li>Optimized performance by addressing bottlenecks, reducing load times by 40%, and enhancing user satisfaction by 25%.</li>
        </ul>
        <p className="font-semibold mt-2">Trainee <span className="text-gray-500">Jun 2023 - Present</span></p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Optimized data structures in C++ to reduce runtime by 30% for datasets over 1 million entries.</li>
          <li>Implemented algorithms to process large-scale data, improving research efficiency.</li>
          <li>Collaborated with 5 developers on debugging and brainstorming, achieving 95% code accuracy.</li>
        </ul>
        <p className="font-semibold mt-2">Software Testing Intern <span className="text-gray-500">Aug 2022 - Present</span></p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Collaborated with cross-functional teams to refine user interfaces, boosting user engagement by 20%.</li>
          <li>Provided actionable feedback on UI/UX design during testing phases, enhancing user satisfaction ratings by 30%.</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold text-blue-600">Education</h3>
        <p>Bachelor of Technology in Computer Science, Government Women Engineering College, Ajmer, Rajasthan</p>
        <p className="text-gray-500">Graduation Date: Jul 2025</p>
      </div>
    </section>
  );
}
