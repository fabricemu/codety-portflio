import {motion} from "framer-motion";
import {fadeIn} from "../utils/motion"; // Create this utility if not already
import {School, GraduationCap} from "lucide-react";

const educationList = [
  {
    title: "Bachelor's Degree in Computer Science",
    institution: "University of Rwanda",
    year: "2019 - 2024",
    description: "Earned a solid foundation in algorithms, data structures, software engineering, and full-stack development.",
  },
  {
    title: "Advanced Level in Computer Science",
    institution: "GS Bumba",
    year: "2016 - 2018",
    description: "Completed high school with a focus on computer systems, networking, and basic programming.",
  },
  {
    title: "Ordinary Level Education",
    institution: "St. Alphonse Mubuga",
    year: "2013 - 2015",
    description: "Completed lower secondary education with a strong performance in general sciences and mathematics.",
  },
];

export default function Education() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn("up", 0.1)}
      >
        <GraduationCap className="inline-block mr-3 text-blue-500" />
        Education & Training
      </motion.h1>

      <div className="space-y-10">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-md"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn("up", index * 0.2)}
          >
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-1">
              {edu.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              {edu.institution} — {edu.year}
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{edu.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn("up", 0.5)}
      >
        <School className="text-5xl text-blue-500 mx-auto mb-4" />
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I'm always learning and evolving to stay ahead in this ever-changing tech world.
        </p>
      </motion.div>
    </section>
  );
}
