import { motion } from "framer-motion";

const Section = ({ id, title, children }) => (
  <section
    id={id}
    className="min-h-screen flex items-center justify-center px-4 py-16 scroll-mt-20"
  >
    <div className="max-w-5xl w-full">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-6 text-sky-400"
      >
        {title}
      </motion.h2>
      {children}
    </div>
  </section>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-20 bg-slate-950/80 border-b border-slate-800 backdrop-blur">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <span className="font-semibold tracking-tight">
            Kaviya <span className="text-sky-400">S</span>
          </span>
          <div className="hidden md:flex gap-4 text-sm">
            <a href="#home" className="hover:text-sky-400">
              Home
            </a>
            <a href="#about" className="hover:text-sky-400">
              About
            </a>
            <a href="#skills" className="hover:text-sky-400">
              Skills
            </a>
            <a href="#projects" className="hover:text-sky-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-sky-400">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* HERO / HOME */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-5xl w-full pt-16 grid md:grid-cols-[3fr,2fr] gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm text-sky-400 mb-3">
              B.Tech AI &amp; Data Science • Francis Xavier Engineering College
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Hi, I&apos;m{" "}
              <span className="text-sky-400">Kaviya S</span> 👋
            </h1>
            <p className="text-slate-300 mb-4 text-sm md:text-base">
              I&apos;m an AI &amp; Data Science student who loves building{" "}
              <span className="text-sky-300">ML-powered</span> and{" "}
              <span className="text-sky-300">web</span> projects — from a voice
              calculator to CNN-based dog breed classification.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <a
                href="#projects"
                className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-sm font-medium"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-4 py-2 rounded-xl border border-slate-600 text-sm font-medium hover:border-sky-400"
              >
                Contact Me
              </a>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-slate-400">
              <span className="px-2 py-1 rounded-full border border-slate-700">
                Voice Calculator
              </span>
              <span className="px-2 py-1 rounded-full border border-slate-700">
                Dog Breed Classification (CNN)
              </span>
              <span className="px-2 py-1 rounded-full border border-slate-700">
                Squint Eye Detection
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Glow circle */}
              <div className="absolute -inset-4 bg-sky-500/20 rounded-3xl blur-2xl" />
              {/* Card */}
              <div className="relative bg-slate-900/80 border border-slate-800 rounded-3xl p-4 w-60 h-72 flex flex-col items-center justify-center shadow-xl shadow-sky-500/30">
                {/* Replace this later with your real image */}
                <div className="w-32 h-32 rounded-full bg-slate-800 mb-4 flex items-center justify-center text-slate-500 text-xs">
                  Your Photo Here
                </div>
                <p className="text-sm font-semibold mb-1">Aspiring ML / Web Developer</p>
                <p className="text-xs text-slate-400 text-center">
                  Passionate about AI, deep learning and building useful tools.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About Me">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 text-sm md:text-base text-slate-300"
        >
          <p>
            I&apos;m a final-year B.Tech AI &amp; Data Science student at Francis
            Xavier Engineering College, Tirunelveli. I enjoy solving problems
            with code and building ML-powered applications that feel intuitive
            and useful.
          </p>
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-slate-400">Email:</span>{" "}
              <a
                href="mailto:kaviyasivakumar2911@gmail.com"
                className="text-sky-400"
              >
                kaviyasivakumar2911@gmail.com
              </a>
            </p>
            <p>
              <span className="text-slate-400">Phone:</span> +91 81488 12904
            </p>
            <p>
              <span className="text-slate-400">Location:</span> Tirunelveli,
              Tamil Nadu
            </p>
            <p>
              <span className="text-slate-400">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="text-sky-400"
              >
                Add your link here
              </a>
            </p>
          </div>
        </motion.div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 text-sm"
        >
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
            <h3 className="font-semibold mb-2 text-sky-300">
              Programming & Web
            </h3>
            <ul className="space-y-1 text-slate-300">
              <li>Python</li>
              <li>JavaScript (JS)</li>
              <li>HTML &amp; CSS</li>
              <li>React (this portfolio)</li>
              <li>SQL / MongoDB</li>
              <li>C</li>
            </ul>
          </div>
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
            <h3 className="font-semibold mb-2 text-sky-300">AI &amp; ML</h3>
            <ul className="space-y-1 text-slate-300">
              <li>CNN (Convolutional Neural Networks)</li>
              <li>Naive Bayes</li>
              <li>Sequence-to-Sequence (Seq2Seq)</li>
              <li>Image Classification</li>
              <li>Deep Learning (Keras / TensorFlow)</li>
            </ul>
          </div>
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
            <h3 className="font-semibold mb-2 text-sky-300">Soft Skills</h3>
            <ul className="space-y-1 text-slate-300">
              <li>Quick Learner</li>
              <li>Adaptability</li>
              <li>Creative Thinking</li>
              <li>Self-learning</li>
            </ul>
          </div>
        </motion.div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 text-sm"
        >
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 flex flex-col">
            <h3 className="font-semibold mb-1 text-sky-300">
              Voice Calculator
            </h3>
            <p className="text-slate-300 mb-2">
              Voice-based calculator that takes speech as input and performs
              arithmetic operations with a clean interface.
            </p>
            <p className="text-xs text-slate-400 mt-auto">
              Tech: Python, Speech-to-Text, Streamlit
            </p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 flex flex-col">
            <h3 className="font-semibold mb-1 text-sky-300">
              Dog Breed Classification (CNN)
            </h3>
            <p className="text-slate-300 mb-2">
              Deep learning model to classify dog breeds from images using
              Convolutional Neural Networks and image preprocessing.
            </p>
            <p className="text-xs text-slate-400 mt-auto">
              Tech: Python, TensorFlow / Keras, OpenCV
            </p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 flex flex-col">
            <h3 className="font-semibold mb-1 text-sky-300">
              Squint Eye Detection
            </h3>
            <p className="text-slate-300 mb-2">
              Image processing-based project to detect eye deviation and help
              identify squint conditions.
            </p>
            <p className="text-xs text-slate-400 mt-auto">
              Tech: Python, OpenCV, Image Processing
            </p>
          </div>
        </motion.div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 text-sm text-slate-300"
        >
          <div>
            <p className="mb-3">
              If you&apos;d like to reach out for opportunities, internships or
              collaborations, feel free to contact me:
            </p>
            <p>
              <span className="text-slate-400">Email:</span>{" "}
              <a
                href="mailto:kaviyasivakumar2911@gmail.com"
                className="text-sky-400"
              >
                kaviyasivakumar2911@gmail.com
              </a>
            </p>
            <p>
              <span className="text-slate-400">Phone:</span> +91 81488 12904
            </p>
          </div>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-sky-400"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-sky-400"
            />
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-sky-400"
            />
            <button
              type="button"
              className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-sm font-medium"
            >
              Send (static demo)
            </button>
          </form>
        </motion.div>
      </Section>

      <footer className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Kaviya S • Built with React, Tailwind &amp;
        Framer Motion
      </footer>
    </div>
  );
}

export default App;
