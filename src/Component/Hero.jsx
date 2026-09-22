import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdDownload } from "react-icons/md";
import { SiReact,SiExpress , SiMongodb, SiTailwindcss } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
// import "../../public/"
const Hero = () => {
  return (
    <div id="hero" className="min-h-[90vh] b bg-linear-to-br from-gray-950 to-black relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start gap-10 px-4 sm:px-6 py-10 max-w-5xl mx-auto justify-between">
        
        <div className="left space-y-6 mt-6 w-full lg:w-[55%]">
          
          <div>
            <h1 className="text-white font-bold text-4xl sm:text-5xl leading-tight pt-2 mt-4">
              I'M{" "}
              <span className="text-amber-500  ">
                 <TypeAnimation 
                    sequence={[
                      "MD SAKIB ANSARI",
                      2000, // yahan number = milliseconds ka pause
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
              </span>
                
            </h1>
          <div className="mt-3 flex items-center gap-3 text-sm text-gray-400">
            <span className="uppercase tracking-wide">
              Full-Stack MERN Developer
            </span>

            <span className="text-gray-600">|</span>

            <MdLocationOn className="text-red-500 text-lg" />

            <span>Ahmedabad,Gujrat,India</span>
          </div>
          </div>
      <p className="text-gray-400 leading-relaxed">
          I'm a Full-Stack Developer specializing in the MERN stack — MongoDB,
          Express.js, React.js, and Node.js. I build scalable, secure web
          applications, from RESTful APIs and JWT authentication to clean,
          responsive frontend interfaces. I follow best practices like MVC
          architecture and I'm always looking to sharpen my skills with new
          tools and technologies.
        </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 w-full lg:w-[35%]">
          <div className="bg-gray-800 p-8 rounded-2xl flex flex-col items-center">
            <SiReact className="text-4xl text-cyan-400 mb-2 animate-bounce" />
            <span className="text-sm text-gray-300">React.Js</span>
          </div>

        <div className="bg-gray-800 p-8 rounded-2xl flex flex-col items-center">
  <SiExpress className="text-4xl mb-2 animate-bounce" />
  <span className="text-sm text-gray-300">Express.Js</span>
</div>

          <div className="bg-gray-800 p-8 rounded-2xl flex flex-col items-center">
            <SiMongodb className="text-4xl text-green-500 mb-2 animate-bounce" />
            <span className="text-sm text-gray-300">MongoDB</span>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl flex flex-col items-center">
            <SiTailwindcss className="text-4xl text-sky-400 mb-2 animate-bounce" />
            <span className="text-sm text-gray-300">Tailwind CSS</span>
          </div>
        </div>
      </div>
     
              {/* Buttons */}
    <div className="flex flex-nowrap  gap-5 px-5 w-full max-w-5xl mx-auto">

  {/* Resume Button */}
  <a
    href="/Sakib Resume.pdf"
    download
    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-gray-800 hover:border-amber-500 transition whitespace-nowrap text-sm"
  >
    <MdDownload /> Resume
  </a>

  {/* Icons */}
  <div className="flex gap-5">
    <a
      href="https://github.com/sakib987447"
      target="_blank"
      rel="noreferrer"
      className="border border-gray-700 p-2 rounded-lg hover:bg-gray-800  hover:border-amber-500 transition"
    >
      <FaGithub />
    </a>

<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sakib76ansari@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="border border-gray-700 p-2 rounded-lg hover:bg-gray-800 hover:border-amber-500 transition"
>
  <MdEmail />
</a>
    <a
      href="https://www.linkedin.com/in/md-sakib-a2102a35b/"
      target="_blank"
      rel="noreferrer"
      className="border border-gray-700 p-2 rounded-lg
       hover:bg-gray-800 hover:border-amber-500  transition"
    >
      <FaLinkedin />
    </a>
  </div>

</div>
      </div>
  );
};

export default Hero;
