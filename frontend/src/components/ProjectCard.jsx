import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
    return (
        <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
            <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-500/50 transition-colors cursor-pointer"
            >
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </a>
    );
}
