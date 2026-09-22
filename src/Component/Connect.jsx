import { useState } from 'react';
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Connect() {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const dataToSend = new FormData();
    dataToSend.append("access_key", "fc2cedf5-6252-404b-ba9b-602e90db334f");
    dataToSend.append("name", formData.name);
    dataToSend.append("email", formData.email);
    dataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div id="connect" className="min-h-screen bg-black text-white px-4 md:px-10 py-16">
      <motion.h1
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-4xl sm:text-5xl font-bold mb-12 text-center"
      >
        Contact Me
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto "
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Left Side */}
        <motion.div variants={item} >
          <h2 className="text-3xl font-semibold mb-8">Get In Touch</h2>

          <motion.div className="space-y-8" variants={container}>
            <motion.div variants={item} className="flex items-center gap-4 transition duration-300 hover:-translate-x-3">
              <div className="bg-gray-800 p-4 rounded-full">
                <MdEmail className="text-2xl" />
              </div>
              <div>
                <p className="text-gray-400">Email</p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sakib76ansari@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg text-gray-300 hover:text-white transition duration-300"
                >
                  sakib76ansari@gmail.com
                </a>




              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4 transition duration-300 hover:-translate-x-3">
              <div className="bg-gray-800 p-4 rounded-full">
                <MdPhone className="text-2xl" />
              </div>
              <div>
                <p className="text-gray-400">Phone</p>
                <a href="tel:+918864000860" className="text-lg">
                  +91 9835339753
                </a>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4 transition duration-300 hover:-translate-x-3">
              <div className="bg-gray-800 p-4 rounded-full">
                <MdLocationOn className="text-2xl" />
              </div>
              <div>
                <p className="text-gray-400">Location</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-lg">
                  Ahmedabad,Gujrat,India
                </a>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4 transition duration-300 hover:-translate-x-3">
              <div className="bg-gray-800 p-4 rounded-full">
                <FaLinkedin className="text-2xl" />
              </div>
              <div>
                <p className="text-gray-400">LinkedIn</p>
                <a href="https://www.linkedin.com/in/md-sakib-a2102a35b/" target="_blank" rel="noreferrer" className="text-lg text-white wrap-break-word">
                  linkedin.com/in/md-sakib-a2102a35b
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div variants={item}>
          <h2 className="text-3xl font-semibold mb-8">Send Me a Message</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-black border border-gray-700 p-3 rounded-lg w-full text-white"
              />

              <input
                type="email"
                placeholder="Your email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-black border border-gray-700 p-3 rounded-lg w-full text-white"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="bg-black border border-gray-700 p-3 rounded-lg w-full text-white"
            ></textarea>

            <button type="submit" className="bg-gray-300 text-black px-6 py-3 rounded-lg w-full hover:bg-white transition font-semibold">
              Submit Message
            </button>
          </form>

          {result && (
            <p className={`mt-4 text-center text-sm ${result.includes("Successfully") ? "text-green-500" : "text-yellow-500"}`}>
              {result}
            </p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Connect;
