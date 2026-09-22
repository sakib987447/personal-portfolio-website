import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-3 px-6">
      <motion.div
        className="mx-auto max-w-5xl px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Heading with accent line */}
        <motion.div variants={item} className="mb-12 ">
        
          <h1 className="text-4xl   md:text-5xl font-bold mt-6 text-white ml-2 ">
            About Me
            
          <div className="w-16 h-1 bg-amber-500 mt-4 rounded-full"></div>
          </h1>
          
        </motion.div>

        {/* About Cards */}
        <div className="space-y-6">
          <motion.div
            variants={item}
            className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-amber-500/50 transition"
          >
            <p className="text-lg leading-8 text-gray-300">
              Hi, I'm <span className="text-white font-semibold">Md Sakib Ansari</span>, a Computer Engineering graduate
              (B.E, CGPA: 7.14) from{" "}
              <span className="text-amber-400 font-semibold">Government Engineering College,Modasa</span>,
              with a Diploma in Information Technology from <span className="text-amber-400 font-semibold">Maulana Azad National Urdu University, Hyderabad.</span>
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-amber-500/50 transition"
          >
            <p className="text-lg leading-8 text-gray-300">
              I'm a <span className="text-white font-semibold">Full-Stack Developer</span> specializing in the{" "}
              <span className="text-amber-400 font-semibold">MERN stack (MongoDB, Express.js, React.js, Node.js)</span>,
              with a strong focus on building scalable, secure, and responsive web applications — from RESTful
              APIs and JWT-based authentication to clean, intuitive frontend interfaces.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-amber-500/50 transition"
          >
            <p className="text-lg leading-8 text-gray-300">
              I've built and deployed multiple full-stack and frontend projects, including a role-based project
              management backend with{" "}
              <span className="text-white font-semibold">30+ RESTful endpoints</span>. I write clean,
              maintainable code and follow industry best practices like{" "}
              <span className="text-amber-400 font-semibold">MVC architecture</span>.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-amber-500/50 transition"
          >
            <p className="text-lg leading-8 text-gray-300">
              I'm currently looking for an{" "}
              <span className="text-white font-semibold">Entry-Level Software Engineer</span> role where I can
              apply my skills, keep learning, and contribute to building real, impactful products.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
