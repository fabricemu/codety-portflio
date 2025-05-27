'use client';

import {motion} from 'framer-motion';
import {fadeIn} from '../utils/motion';
import {skills} from "../data/skills";

const Home = () => {
    type Skill = {
        name: string;
        description: string;
        icon: string;
    };

    return (
        <>
            {/* Hero Section */}
            <motion.section
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="min-h-screen flex flex-col justify-center items-center px-4 py-12 sm:py-20"
                id="home"
            >
                <div className="text-center">
                    <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                        Hello, I&apos;m{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              Fabrice
            </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                        A passionate <span
                        className="font-semibold text-blue-600 dark:text-cyan-400">fullstack developer</span> creating
                        beautiful and responsive user interfaces with modern web technologies.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="#about"
                           className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 shadow-md">
                            Learn More
                        </a>
                        <button
                            className="px-6 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-full transition-all duration-300 shadow-md">
                            Contact Me
                        </button>
                    </div>
                </div>
            </motion.section>

            {/* About Section */}
            <motion.section
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.3}}
                className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 px-4 py-20"
                id="about"
            >
                <div className="max-w-3xl text-center">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        About Me
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        I am a fullstack developer with a passion for building responsive and user-friendly web
                        applications. With expertise in React, express js, and Tailwind CSS, I create seamless user
                        experiences that are both functional and visually appealing. My goal is to leverage technology
                        to
                        solve real-world problems and deliver value through innovative solutions.
                    </p>
                </div>
            </motion.section>
            {/* Skills */}
            <motion.div
                className="max-w-5xl mx-auto mt-20"
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
                    Skills
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
                    {skills.map((skill: Skill, index: number) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
                            variants={fadeIn("up", index * 0.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-16 h-16 mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {skill.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            {/* Footer */}
            <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6 mt-20">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Fabrice. All rights reserved.
                    </p>
                    <p className="text-xs mt-2">
                        Built with ❤️ using React and Tailwind CSS.
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Home;

