import { motion } from 'framer-motion';

const projects = [
	{
		title: 'Tadka Tales',
		desc: 'Voice-Assisted Cooking App built with Flutter and Django REST, deployed on Firebase. 90%+ accuracy in voice commands, 150+ multilingual recipes, admin CRUD, real-time updates.',
		tech: ['Flutter', 'Django REST', 'Firebase', 'Google Speech-to-Text'],
		github: '', // Add link if available
		demo: '', // Add link if available
	},
	{
		title: 'Personal Expense Tracker',
		desc: 'Python CLI app for recording and categorizing 500+ transactions, monthly summaries, persistent storage with CSV, Matplotlib for visualization, sub-second processing.',
		tech: ['Python', 'Matplotlib', 'CSV'],
		github: '', // Add link if available
		demo: '', // Add link if available
	},
	{
		title: 'Smart Disease Prediction App',
		desc: 'Flask web app to predict 40+ diseases using ML models (Decision Tree, Naive Bayes), trained on 10,000+ rows, 85%+ accuracy, REST API for real-time predictions.',
		tech: ['Flask', 'scikit-learn', 'ML', 'REST API'],
		github: '', // Add link if available
		demo: '', // Add link if available
	},
];

export default function Projects() {
	return (
		<section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1 }}
				className="text-5xl font-bold mb-8 text-pastel-yellow"
			>
				Projects
			</motion.h2>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((p, i) => (
					<motion.div
						key={p.title}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: i * 0.2 }}
						className="bg-gray-800 dark:bg-gray-700 rounded-xl shadow-lg p-6 flex flex-col"
					>
						<h3 className="text-xl font-bold mb-2 text-pastel-pink">
							{p.title}
						</h3>
						<p className="mb-3 text-pastel-blue">{p.desc}</p>
						<div className="flex flex-wrap gap-2 mb-4">
							{p.tech.map((t) => (
								<span
									key={t}
									className="bg-neon-blue text-black px-2 py-1 rounded text-xs font-semibold"
								>
									{t}
								</span>
							))}
						</div>
						<div className="mt-auto flex space-x-4">
							<a
								href={p.github}
								target="_blank"
								rel="noopener noreferrer"
								className="text-neon-green hover:underline font-bold"
							>
								GitHub
							</a>
							{p.demo && (
								<a
									href={p.demo}
									target="_blank"
									rel="noopener noreferrer"
									className="text-neon-pink hover:underline font-bold"
								>
									Demo
								</a>
							)}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}