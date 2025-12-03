import { useState } from "react";
import { motion } from "framer-motion";

const Section = ({ id, title, eyebrow, children }) => (
  <section
    id={id}
    className="min-h-screen flex items-center justify-center px-4 py-20 scroll-mt-24"
  >
    <div className="max-w-5xl w-full">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-300/80 mb-2"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>
      {children}
    </div>
  </section>
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResumeClick = () => {
    // Put your resume file as "public/KAVIYA_CV.pdf"
    const link = document.createElement("a");
    link.href = "/KAVIYA_CV.pdf";
    link.download = "Kaviya_S_Resume.pdf";
    link.click();
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-40 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-sky-500/40 via-fuchsia-500/30 to-violet-500/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-emerald-500/30 via-sky-500/25 to-fuchsia-500/30 blur-3xl" />

      {/* NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-20 bg-slate-950/80 border-b border-slate-800/70 backdrop-blur-md">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <a
            href="#home"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-sky-400 via-fuchsia-400 to-violet-400 flex items-center justify-center text-xs">
              KS
            </div>
            <span className="text-sm">
              Kaviya{" "}
              <span className="bg-gradient-to-r from-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
                S
              </span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-sky-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={handleResumeClick}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-sky-500 to-fuchsia-500 hover:from-sky-400 hover:to-fuchsia-400 text-slate-950 shadow-lg shadow-sky-500/30"
            >
              Download Resume
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden h-9 w-9 flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-4 bg-slate-100" />
              <span className="block h-0.5 w-4 bg-slate-100" />
              <span className="block h-0.5 w-3 bg-slate-400 ml-auto" />
            </div>
          </button>
        </nav>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-800/80 bg-slate-950/95 backdrop-blur px-4 pb-3">
            <div className="flex flex-col gap-2 pt-2 text-sm">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-1 text-slate-200 hover:text-sky-300"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={handleResumeClick}
                className="mt-2 px-3 py-2 rounded-xl text-xs font-medium bg-gradient-to-r from-sky-500 to-fuchsia-500 text-slate-950"
              >
                Download Resume
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO / HOME */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-5xl w-full pt-24 pb-12 grid md:grid-cols-[3fr,2fr] gap-8 items-center">
          {/* Hero text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-slate-900/70 px-3 py-1 text-xs text-sky-200 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Python Developer • AI &amp; DS Student
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
              I build{" "}
              <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
                practical, clean
              </span>{" "}
              solutions with Python &amp; the web.
            </h1>

            <p className="text-slate-300 mb-4 text-sm md:text-base max-w-xl">
              I&apos;m an AI &amp; Data Science student who enjoys turning ideas
              into working products — from voice-based tools and dashboards to
              smart apps powered by solid Python backends and modern UIs.
            </p>

            <p className="text-slate-400 text-xs md:text-sm mb-5">
              I&apos;m looking for roles where I can grow as a{" "}
              <span className="text-sky-300">
                Python / backend / full-stack developer
              </span>{" "}
              while still applying my AI background when it makes sense.
            </p>

            <div className="flex flex-wrap gap-3 mb-5">
              <a
                href="#projects"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-fuchsia-500 hover:from-sky-400 hover:to-fuchsia-400 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/30"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-4 py-2 rounded-xl border border-slate-600/80 text-sm font-medium hover:border-sky-400/80 hover:text-sky-200"
              >
                Let&apos;s connect
              </a>
            </div>

            <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
              {[
                "Python • REST APIs",
                "React & Tailwind",
                "Voice-based tools",
                "Streamlit dashboards",
                "ML basics (CNN, Naive Bayes, Seq2Seq)",
              ].map((chip) => (
                <span
                  key={chip}
                  className="px-2.5 py-1 rounded-full border border-slate-700/80 bg-slate-900/70"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Hero photo / card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-sky-500/40 via-fuchsia-500/40 to-violet-500/40 rounded-3xl blur-2xl" />
              <div className="relative bg-slate-950/80 border border-slate-800 rounded-3xl p-4 w-64 h-80 flex flex-col items-center shadow-xl shadow-sky-500/30">
                {/* Replace /profile.jpg with your real image (put it in public/profile.jpg) */}
                <div className="w-28 h-28 rounded-full overflow-hidden bg-slate-800 mb-3 border border-slate-600/80 flex items-center justify-center">
                  <img
                    src="/profile.jpg"
                    alt="Kaviya profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <span className="text-[11px] text-slate-400 absolute">
                    Add your photo
                  </span>
                </div>
                <p className="text-sm font-semibold mb-1">
                  Kaviya S • Python &amp; AI
                </p>
                <p className="text-xs text-slate-400 text-center mb-3">
                  I like building things that are simple to use, well-documented
                  and actually solve a problem.
                </p>
                <div className="mt-auto w-full space-y-1 text-[11px] text-slate-300">
                  <div className="flex justify-between">
                    <span>Python stack</span>
                    <span className="text-emerald-400">Growing</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-to-r from-sky-400 to-emerald-400" />
                  </div>
                  <div className="flex justify-between">
                    <span>AI / ML foundation</span>
                    <span className="text-sky-300">Useful</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full w-3/5 bg-gradient-to-r from-fuchsia-400 to-violet-400" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section
        id="about"
        title="Who I Am"
        eyebrow="ABOUT"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-[2fr,1.5fr] gap-6 text-sm md:text-base text-slate-300"
        >
          <div className="space-y-3">
            <p>
              I&apos;m a final-year B.Tech AI &amp; Data Science student from
              Francis Xavier Engineering College, Tirunelveli. I enjoy thinking
              like an engineer: break a problem down, design something clean and
              then actually ship it.
            </p>
            <p>
              Most of my recent work blends{" "}
              <span className="text-sky-300">
                Python backends, simple UIs and a bit of AI
              </span>{" "}
              — voice calculators, image-based apps and tools that automate
              small, annoying tasks.
            </p>
            <p>
              I&apos;m looking for opportunities where I can grow as a{" "}
              <span className="text-fuchsia-300">
                Python / backend or full-stack developer
              </span>{" "}
              and gradually take on more ownership over real-world projects.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
              <h3 className="text-sky-300 text-sm font-semibold mb-2">
                Quick details
              </h3>
              <ul className="space-y-1 text-slate-300">
                <li>
                  <span className="text-slate-400">Location:</span> Tirunelveli,
                  Tamil Nadu
                </li>
                <li>
                  <span className="text-slate-400">Email:</span>{" "}
                  <a
                    href="mailto:kaviyasivakumar2911@gmail.com"
                    className="text-sky-300"
                  >
                    kaviyasivakumar2911@gmail.com
                  </a>
                </li>
                <li>
                  <span className="text-slate-400">Phone:</span> +91 81488
                  12904
                </li>
                <li>
                  <span className="text-slate-400">LinkedIn:</span>{" "}
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    className="text-sky-300"
                  >
                    add your real link
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
              <h3 className="text-fuchsia-300 text-sm font-semibold mb-2">
                What I&apos;m focusing on now
              </h3>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Writing cleaner, more modular Python code</li>
                <li>Practicing REST API design &amp; basic DB design</li>
                <li>Building small but complete apps end-to-end</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* SKILLS */}
      <Section
        id="skills"
        title="Skills"
        eyebrow="STACK"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 text-sm"
        >
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
            <h3 className="font-semibold mb-2 text-sky-300 text-sm">
              Python &amp; Backend
            </h3>
            <ul className="space-y-1 text-slate-200">
              <li>Python (core, scripting)</li>
              <li>REST APIs (learning FastAPI / Django)</li>
              <li>Basic SQL (queries, joins)</li>
              <li>Data handling with Pandas / NumPy</li>
              <li>Git &amp; GitHub basics</li>
            </ul>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
            <h3 className="font-semibold mb-2 text-violet-300 text-sm">
              Frontend &amp; Tools
            </h3>
            <ul className="space-y-1 text-slate-200">
              <li>React (this portfolio)</li>
              <li>HTML, CSS, JavaScript</li>
              <li>Tailwind CSS</li>
              <li>Streamlit (for dashboards / tools)</li>
              <li>VS Code, Postman (learning)</li>
            </ul>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
            <h3 className="font-semibold mb-2 text-fuchsia-300 text-sm">
              AI &amp; Data Foundation
            </h3>
            <ul className="space-y-1 text-slate-200">
              <li>CNN (Convolutional Neural Networks)</li>
              <li>Naive Bayes</li>
              <li>Sequence-to-Sequence models</li>
              <li>Image classification basics</li>
              <li>TensorFlow / Keras (used in projects)</li>
            </ul>
          </div>
        </motion.div>
      </Section>

      {/* PROJECTS */}
      <Section
        id="projects"
        title="Selected Projects"
        eyebrow="WORK"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 text-sm"
        >
          {[
            {
              title: "Voice Calculator",
              badge: "Main project",
              desc: "Speech-enabled calculator that converts spoken expressions into operations and displays the result in a clean UI.",
              tech: "Python • Speech-to-Text • Streamlit",
            },
            {
              title: "Dog Breed Classification (CNN)",
              badge: "Deep learning",
              desc: "Image classifier that predicts dog breeds using CNNs, image preprocessing and a trained Keras model.",
              tech: "Python • TensorFlow/Keras • OpenCV",
            },
            {
              title: "Squint Eye Detection",
              badge: "Image processing",
              desc: "Project that analyzes eye images to detect squint characteristics and support early screening.",
              tech: "Python • OpenCV • Image Processing",
            },
          ].map((proj) => (
            <motion.div
              key={proj.title}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex flex-col"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-slate-100">{proj.title}</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/30">
                  {proj.badge}
                </span>
              </div>
              <p className="text-slate-300 text-xs mb-3 flex-1">{proj.desc}</p>
              <p className="text-[11px] text-sky-300 mt-auto">{proj.tech}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        title="Let’s Talk"
        eyebrow="CONTACT"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 text-sm text-slate-300"
        >
          <div className="space-y-3">
            <p>
              If you&apos;re looking for a motivated fresher who&apos;s serious
              about learning and shipping real work, I&apos;d be happy to talk.
            </p>
            <p>
              I&apos;m especially interested in roles around Python, backend
              development, full-stack work or projects where AI is used in a
              practical way.
            </p>
            <div className="space-y-1 text-sm">
              <p>
                <span className="text-slate-400">Email:</span>{" "}
                <a
                  href="mailto:kaviyasivakumar2911@gmail.com"
                  className="text-sky-300"
                >
                  kaviyasivakumar2911@gmail.com
                </a>
              </p>
              <p>
                <span className="text-slate-400">Phone:</span> +91 81488 12904
              </p>
            </div>
          </div>
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href =
                "mailto:kaviyasivakumar2911@gmail.com?subject=Portfolio%20Contact";
            }}
          >
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-slate-950/70 border border-slate-700 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-sky-400"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-slate-950/70 border border-slate-700 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-sky-400"
            />
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full bg-slate-950/70 border border-slate-700 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-sky-400"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-fuchsia-500 hover:from-sky-400 hover:to-fuchsia-400 text-sm font-medium text-slate-950 shadow-md shadow-sky-500/30"
            >
              Send email
            </button>
          </form>
        </motion.div>
      </Section>

      <footer className="border-t border-slate-800/80 py-4 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} Kaviya S • Built with React, Tailwind &amp;
        Framer Motion
      </footer>
    </div>
  );
}

export default App;
