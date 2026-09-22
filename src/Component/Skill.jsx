import { SiPostman, SiPython, SiReact } from "react-icons/si";
import { motion } from "framer-motion";

import {
  SiJavascript,
  SiNextdotjs,
  SiHtml5,
  SiBootstrap,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import { FaCss3Alt, FaJava } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen bg-black text-white px-4 sm:px-10 py-16 mr:2">
      <motion.div
        className="max-w-5xl mx-auto px-4 "
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >

        <motion.h1 variants={item} className="text-4xl sm:text-5xl font-bold mb-4 ml-2">
          My Skills
          <div className="w-16 h-1 bg-amber-500 mt-4 rounded-full"></div>
        </motion.h1>

        <motion.p variants={item} className="text-gray-400 mb-16 ml-2 ">
          Technologies and tools I've worked with throughout my projects and experience
        </motion.p>

        {/* Frontend */}
        <motion.h2 variants={item} className="text-2xl font-semibold mb-8">
          Front End
        </motion.h2>

        <motion.div
          className="flex flex-wrap gap-10 mb-16"
          variants={container}
        >
          <SkillCard icon={<SiJavascript className="text-yellow-400" />} name="JavaScript" />
          <SkillCard icon={<SiReact className="text-cyan-400" />} name="React.js" />
          <SkillCard icon={<SiBootstrap />} name="Bootstrap" />
          <SkillCard icon={<SiHtml5 className="text-orange-500" />} name="HTML" />
          <SkillCard icon={<FaCss3Alt className="text-blue-500" />} name="CSS" />
          <SkillCard icon={<SiTailwindcss className="text-sky-400" />} name="Tailwind CSS" />
         
        </motion.div>

        {/* Databases */}
        <motion.h2 variants={item} className="text-2xl font-semibold mb-8">
          Databases
        </motion.h2>

        <motion.div
          className="flex flex-wrap gap-4 sm:gap-6 md:gap-10 mb-16"
          variants={container}
        >
          <SkillCard icon={<SiMongodb className="text-green-500" />} name="MongoDB" />
          <SkillCard icon={<SiMysql className="text-blue-400" />} name="MySQL" />
        </motion.div>

        {/* Tools */}
        <motion.h2 variants={item} className="text-2xl font-semibold mb-8">
          Tools & Platforms
        </motion.h2>

        <motion.div className="flex flex-wrap gap-10" variants={container}>
          <SkillCard icon={<SiGit className="text-orange-500" />} name="Git" />
          <SkillCard icon={<SiGithub />} name="GitHub" />
          <SkillCard icon={<VscCode className="text-blue-400" />} name="VS Code" />
          <SkillCard icon={<SiVercel />} name="Vercel" />
          <SkillCard icon={<SiPostman />} name="Postman" />
        </motion.div>

      </motion.div>
    </div>
  );
};

function SkillCard({ icon, name }) {
  return (
    <motion.div variants={item} className="flex flex-col items-center">
      <div className="bg-gray-800 w-20 h-20 rounded-full flex items-center justify-center text-3xl 
      transition duration-300 hover:-translate-y-3
      hover:ring-2 hover:ring-gray-500 scale-90">
        {icon}
      </div>
      <p className="text-gray-400 mt-3">{name}</p>
    </motion.div>
  );
}

export default Skills;
