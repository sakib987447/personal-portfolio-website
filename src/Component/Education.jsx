import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Education = () => {
  return (
    <section id="education" className=" bg-black text-white py-5 px-6 ">
      <motion.div
        className="max-w-5xl mx-auto px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-5xl font-bold mb-12 mt-12 ml-3 "
        >
          Education
          <div className="w-16 h-1 bg-amber-500 mt-4 rounded-full"></div>
        </motion.h1>

        <div className="space-y-8">

          {/* B.E */}
          <motion.div
            variants={item}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-amber-500 transition"
          >
            <h3 className="text-2xl font-semibold">
Government Engineering College Modasa (GEC Modasa)            </h3>

            <p className="text-gray-400 mt-2">
              B.E, Computer Engineering
            </p>

            <p className="text-gray-500 mt-1">
              2023 – 2026 • CGPA: 7.14
            </p>
          </motion.div>

          {/* Diploma */}
          <motion.div
            variants={item}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-amber-500 transition"
          >
            <h3 className="text-2xl font-semibold">
              Maulana Azad National Urdu University, Hyderabad
            </h3>

            <p className="text-gray-400 mt-2">
              Diploma in Information Technology
            </p>
            <p className="text-gray-500 mt-1">
              2020-2023 • CGPA: 9.31
            </p>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};

export default Education;
