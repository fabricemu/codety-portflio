"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion.ts"; // Adjust the import path as necessary
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // You can integrate with EmailJS, Resend, or a backend API here
  };

  return (
    <section className="min-h-screen px-6 py-16 bg-gradient-to-b from-white to-gray-100 dark:from-[#0e0e10] dark:to-[#1a1a1d]">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        {...fadeIn("up", 0.2)}
      >
        Contact Me
      </motion.h2>
      <div className="max-w-2xl mx-auto bg-white dark:bg-[#1c1c1e] p-8 rounded-2xl shadow-lg dark:shadow-gray-800">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input type="text" required className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" required className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea rows={5} required className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition">
              Send Message
            </button>
          </form>
        ) : (
          <motion.div {...fadeIn("up", 0.3)} className="text-center text-green-600 dark:text-green-400 text-lg font-semibold">
            Thank you for contacting me! I’ll get back to you soon.
          </motion.div>
        )}
      </div>
    </section>
  );
}
