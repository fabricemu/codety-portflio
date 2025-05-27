import {motion} from "framer-motion";

export default function About() {
    return (
        <motion.section
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
            className="max-w-3xl mx-auto"
        >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="mb-4">
                I am a full-stack developer with experience building performant and scalable web applications...
            </p>
            <p>
                Skilled in React, TypeScript, Tailwind CSS, and more. I love crafting smooth, modern user
                experiences with clean and maintainable code.
            </p>
        </motion.section>
    );
}
