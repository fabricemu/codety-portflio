"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion.ts";
import { projects } from "../data/projects";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen py-16 px-6 bg-gradient-to-b from-white to-gray-100 dark:from-[#0e0e10] dark:to-[#1a1a1d]">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        {...fadeIn("up", 0.2)}
      >
        Projects
      </motion.h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index} // Use index as a fallback key if project.title is not unique
            className="bg-white dark:bg-[#1c1c1e] rounded-2xl shadow-lg dark:shadow-gray-800 overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
            {...fadeIn("up", index * 0.2)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
