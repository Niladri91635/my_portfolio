import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Typewriter from "react-typewriter-effect";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // For mobile menu
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiAccuweather } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";  


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-300 text-black relative">
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="w-full">
          {/* Navbar */}
          <header
            className={`fixed w-full top-0 left-0 p-4 z-50 transition-all duration-300 ${
              scrolling ? "bg-blue-900 bg-opacity-90 shadow-lg" : "bg-transparent"
            }`}
          >
            <nav className="container mx-auto flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center space-x-4">
                <img
                  src="Screenshot 2024-01-14 123726.png"
                  alt="Logo"
                  className="w-12 h-12 rounded-full shadow-md border-2 border-white"
                />
                <h1 className="text-2xl font-bold text-white tracking-wider">
                  <span className="text-blue-300">Blues</span>
                </h1>
              </div>

              {/* Desktop Navigation */}
              <ul className="hidden md:flex space-x-8 text-white text-lg">
                {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-blue-300 transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile Menu Button */}
              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-3xl">
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </nav>

            {/* Mobile Navigation */}
            {menuOpen && (
              <motion.div
                className="fixed top-0 left-0 w-full h-screen bg-blue-900 bg-opacity-95 flex flex-col items-center justify-center space-y-6 text-white text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-blue-300 transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </motion.div>
            )}
          </header>

          {/* Hero Section */}
          <section id="home" className="flex flex-col md:flex-row items-center justify-center h-screen px-6 text-center md:text-left">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <h1 className="text-5xl font-extrabold text-blue-900">Hi, I'm Niladri Roy </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="mt-6 md:mt-0"
            >
              <img src="Screenshot 2024-01-16 210422.png" alt="Profile" className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-blue-500" />
            </motion.div>
          </section>

          {/* About Section */}
          <section id="about" className="py-16 bg-gray-100 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="container mx-auto px-6 md:px-20 lg:px-40"
            >
              <h1 className="text-4xl font-bold text-blue-900">About Me</h1>
              <div className="mt-4 w-20 h-1 bg-blue-500 mx-auto"></div>

              <div className="mt-10 flex flex-col md:flex-row items-center justify-center">
                {/* Image Section */}
                <motion.img
                  src="your-profile-image.jpg"
                  alt="Niladri Roy"
                  className="w-52 h-52 md:w-64 md:h-64 rounded-full shadow-lg border-4 border-blue-500"
                  whileHover={{ scale: 1.05 }}
                />

          {/* About Content */}
                <motion.div
                  className="mt-6 md:mt-0 md:ml-10 text-left"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Hi, I'm <span className="text-blue-700 font-semibold">Niladri Roy</span>, a passionate tech enthusiast pursuing a <b>BCA</b> from <b>Techno Main Salt Lake</b>.  
                    I specialize in <span className="text-blue-700 font-semibold">Web Development, AI, and Machine Learning</span>.  
                    My goal is to build innovative solutions that bridge technology and real-world problems.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4">
                    <div className="bg-blue-200 text-blue-900 px-4 py-2 rounded-md font-semibold shadow-md">Web Developer 💻</div>
                    <div className="bg-green-200 text-green-900 px-4 py-2 rounded-md font-semibold shadow-md">AI/ML Enthusiast 🤖</div>
                    <div className="bg-yellow-200 text-yellow-900 px-4 py-2 rounded-md font-semibold shadow-md">Tech Explorer 🚀</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>


          {/* Skills Section */}
          <section id="skills" className="py-16 bg-gray-200 text-center">
            <h1 className="text-3xl font-bold text-blue-900">Skills & Proficiency</h1>
            <div className="mt-4 w-16 h-1 bg-blue-500 mx-auto"></div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-6 md:px-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {[
                { name: "C", level: 80, color: "bg-blue-500", icon: "C_Logo.png" },
                { name: "Java", level: 75, color: "bg-red-500", icon: "Java_programming_language_logo.svg.png" },
                { name: "Python", level: 85, color: "bg-yellow-500", icon: "Python-logo-notext.svg.png" },
                { name: "HTML", level: 95, color: "bg-orange-500", icon: "HTML5_logo_and_wordmark.svg.png" },
                { name: "CSS", level: 90, color: "bg-blue-400", icon: "css_logo.png" },
                { name: "JavaScript", level: 80, color: "bg-yellow-400", icon: "js-logo.webp" },
                { name: "React.js", level: 85, color: "bg-cyan-500", icon: "react-logo.png" },
                { name: "Tailwind CSS", level: 90, color: "bg-blue-600", icon: "tailwind-css-logo.png" },
                { name: "AI/ML", level: 75, color: "bg-purple-500", icon: "ai-ml-logo.png" },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-lg border border-gray-300 flex flex-col items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-4" />
                  <h2 className="text-xl font-semibold">{skill.name}</h2>
                  <div className="w-full bg-gray-300 h-4 rounded-full mt-4 relative">
                    <motion.div
                      className={`h-full ${skill.color} rounded-full`}
                      initial={{ width: "0%" }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                    />
                    <span className="absolute right-2 top-0 text-sm font-bold">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>


            {/* Projects Section */}
            <section id="projects" className="py-16 bg-gray-100 text-center">
              <h1 className="text-3xl font-bold text-blue-900">Projects</h1>
              <div className="mt-4 w-16 h-1 bg-blue-500 mx-auto"></div>
              <p className="text-gray-700 mt-6">Here are some of my recent projects:</p>

              <motion.div 
                className="flex flex-wrap justify-center gap-8 mt-6 px-4"
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
              >
                {[
                  {
                    title: "Weather App",
                    img: <SiAccuweather className="text-blue-500 text-6xl" />, // Icon with styling
                    tech: "React, Vite, Weather API",
                    desc: "A simple weather application that provides real-time weather updates using an API.",
                    live: "#",
                    github: "#"
                  },
                  {
                    title: "AI-Powered Plant Disease Detection & Recommendation",
                    img: "plant-disease-detection.png",
                    tech: "React, Vite, Tailwind, CNN",
                    desc: "An AI system that detects plant diseases using deep learning and recommends treatments.",
                    live: "#",
                    github: "#"
                  },
                  {
                    title: "AI-Powered Music Recommendation System",
                    img: <FaSpotify className="text-green-500 text-6xl" />, // Another icon
                    tech: "React, Vite, FaceNet512, Spotify API",
                    desc: "An AI-powered music player that detects emotions and suggests songs accordingly.",
                    live: "#",
                    github: "#"
                  },
                  {
                    title: "Integrated Doctor's Clinic & Online Pharmacy",
                    img: "doctor-pharmacy.png",
                    tech: "JSP, Servlet, MySQL",
                    desc: "A full-fledged web application integrating a doctor's clinic and an online pharmacy system.",
                    live: "#",
                    github: "#"
                  }
                ].map((project) => (
                  <div key={project.title} className="bg-white p-6 shadow-lg rounded-lg w-72">
                    <img src={project.img} alt={project.title} className="w-full h-40 object-cover rounded-md" />
                    <h2 className="text-xl font-bold mt-2">{project.title}</h2>
                    <p className="text-sm text-gray-600">{project.tech}</p>
                    <p className="text-gray-700 mt-2">{project.desc}</p>
                    <div className="mt-4 flex justify-between">
                      <a href={project.live} className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">View Live</a>
                      <a href={project.github} className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm">GitHub</a>
                    </div>
                  </div>
                ))}
              </motion.div>
            </section>



          {/* Contact Section */}
          <section id="contact" className="bg-gray-100 py-16 text-center">
            <h1 className="text-3xl font-bold text-blue-900">Get in Touch</h1>
            <div className="mt-4 w-16 h-1 bg-blue-500 mx-auto"></div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-6 space-y-4"
            >
              {/* Email */}
              <a
                href="mailto:niladri9163@gmail.com"
                className="block text-lg text-blue-800 font-semibold hover:text-blue-600 transition duration-300"
              >
                📧 Email: niladri9163@gmail.com
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg text-green-700 font-semibold hover:text-green-500 transition duration-300"
              >
                📞 WhatsApp: +91 1234567890
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/niladri-roy-6b6ab2320/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-lg text-blue-900 font-semibold hover:text-blue-700 transition duration-300"
              >
                <IoLogoLinkedin />
                <span>Connect on LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Niladri91635"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-lg text-gray-800 font-semibold hover:text-gray-600 transition duration-300"
              >
                <FaGithub />
                <span>Explore My GitHub</span>
              </a>
            </motion.div>
          </section>


          {/* Footer */}
          <footer className="bg-blue-900 text-white text-center p-4">
            <p>&copy; {new Date().getFullYear()} Niladri Roy. All rights reserved.</p>
          </footer>
        </div>
      )}
    </div>
  );
}
