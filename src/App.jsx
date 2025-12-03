import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Mousewheel } from "swiper/modules";

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
  const [selectedProject, setSelectedProject] = useState(null);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/KAVIYA_CV.pdf";
    link.download = "Kaviya_S_Resume.pdf";
    link.click();
  };

  const handleResumeOpen = () => {
    window.open("/KAVIYA_CV.pdf", "_blank");
  };

  const handleWhatsApp = () => {
    const phone = "918148812904";
    const text = encodeURIComponent(
      "Hi Kaviya, I saw your portfolio and would like to connect."
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  const handleEmailGmail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=kaviyasivakumar2911@gmail.com&su=Portfolio%20Contact",
      "_blank"
    );
  };

  const handleLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/kaviya-s-29259133a",
      "_blank",
      "noreferrer"
    );
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#certifications", label: "Certifications" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Connect" },
  ];

  const projects = [
    {
      title: "Voice Calculator",
      badge: "Python & Java",
      desc: "A client–server voice calculator built using socket programming. A Java interface captures speech, sends the request to a Python backend over sockets, and the Python service parses the expression, evaluates it and returns the result.",
      tech: "Socket programming • Java (UI client) • Python (backend processing)",
    },
    {
      title: "Dog Breed Classification (CNN)",
      badge: "Deep Learning",
      desc: "Image classification system that predicts dog breeds using a trained CNN model with preprocessing and augmented image data.",
      tech: "Python • TensorFlow/Keras • OpenCV",
    },
    {
      title: "Whispers of the Hand – Sign Language Detection",
      badge: "Sign Language",
      desc: "A sign language recognition project that detects hand gestures and maps them to corresponding characters or words.",
      tech: "Python • Computer Vision • ML",
    },
    {
      title: "Squint Eye Detection",
      badge: "Image Processing",
      desc: "Analyzes eye images to estimate deviation and support early identification of squint conditions.",
      tech: "Python • OpenCV • Image Processing",
    },
  ];

  const skillLogos = [
    { src: "/icons/python.svg", label: "Python" },
    { src: "/icons/java.svg", label: "Java" },
    { src: "/icons/react.svg", label: "React" },
    { src: "/icons/tailwind.svg", label: "Tailwind CSS" },
    { src: "/icons/nodejs.svg", label: "Node.js" },
    { src: "/icons/mongodb.svg", label: "MongoDB" },
    { src: "/icons/sql.svg", label: "SQL" },
    { src: "/icons/tensorflow.svg", label: "TensorFlow" },
    { src: "/icons/opencv.svg", label: "OpenCV" },
    { src: "/icons/streamlit.svg", label: "Streamlit" },
    { src: "/icons/socket.svg", label: "Socket" },
  ];

  // 10 certificates – these should be image files (jpg/png)
  // put them in public/certifications/cert1.jpg ... cert10.jpg
  const certificates = [
    "/certifications/cert1.png",
    "/certifications/cert2.png",
    "/certifications/cert3.png",
    "/certifications/cert4.png",
    "/certifications/cert5.png",
    "/certifications/cert6.png",
    "/certifications/cert7.png",
    "/certifications/cert8.png",
    "/certifications/cert9.png",
    "/certifications/cert10.png",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background blobs */}
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

          <div className="hidden md:flex items-center gap-4 text-sm">
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
              onClick={handleResumeOpen}
              className="px-3 py-1.5 rounded-full text-xs font-medium border border-sky-500/50 text-sky-200 hover:border-fuchsia-400/60"
            >
              Open Resume
            </button>
            <button
              onClick={handleResumeDownload}
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
                onClick={handleResumeOpen}
                className="mt-2 px-3 py-2 rounded-xl text-xs font-medium border border-sky-500/60 text-sky-200"
              >
                Open Resume
              </button>
              <button
                onClick={handleResumeDownload}
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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-slate-900/70 px-3 py-1 text-xs text-sky-200 mb-4"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Python Developer • AI &amp; DS Student
            </motion.div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
              I create{" "}
              <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
                reliable, clear
              </span>{" "}
              solutions with Python and the web.
            </h1>

            <p className="text-slate-300 mb-4 text-sm md:text-base max-w-xl">
              I am pursuing B.Tech Artificial Intelligence and Data Science and
              I enjoy building end-to-end solutions – from voice-based
              applications to tools that automate everyday tasks, with Python as
              my main stack.
            </p>

            <p className="text-slate-400 text-xs md:text-sm mb-5">
              I am interested in opportunities related to{" "}
              <span className="text-sky-300">
                Python development, backend work and full-stack roles
              </span>{" "}
              where I can apply both programming and AI fundamentals in a
              practical way.
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
                Hire / Contact me
              </a>
            </div>

            <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
              {[
                "Python • socket programming",
                "Java client + Python backend",
                "React & Tailwind",
                "Streamlit tools",
                "ML foundation (CNN, Naive Bayes, Seq2Seq)",
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
              {/* Animated glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-sky-500/40 via-fuchsia-500/40 to-violet-500/40 rounded-3xl blur-2xl animate-pulse" />
              <div className="relative bg-slate-950/80 border border-slate-800 rounded-3xl p-4 w-64 h-80 flex flex-col items-center shadow-xl shadow-sky-500/30">
                {/* Animated ring around profile picture */}
                <div className="relative mb-3">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-sky-400 via-fuchsia-400 to-violet-400 blur-sm animate-pulse" />
                  <div className="relative w-36 h-36 rounded-full overflow-hidden bg-slate-800 border border-slate-700">
                    <img
                      src="/profile.jpg"
                      alt="Kaviya profile"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                <p className="text-sm font-semibold mb-1">
                  Kaviya S • Python &amp; AI
                </p>
                <p className="text-xs text-slate-400 text-center mb-3">
                  I like writing code that is easy to understand, practical to
                  maintain and supported by clear documentation.
                </p>
                <div className="mt-auto w-full space-y-1 text-[11px] text-slate-300">
                  <div className="flex justify-between">
                    <span>Python / backend</span>
                    <span className="text-emerald-400">Growing</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-to-r from-sky-400 to-emerald-400" />
                  </div>
                  <div className="flex justify-between">
                    <span>AI &amp; data foundation</span>
                    <span className="text-sky-300">Applied</span>
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
      <Section id="about" title="Profile" eyebrow="ABOUT">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 text-sm md:text-base text-slate-300"
        >
          {/* Top: about text full width */}
          <div className="space-y-3">
            <p>
              I am a final-year B.Tech Artificial Intelligence and Data Science
              student at Francis Xavier Engineering College, Tirunelveli. I
              enjoy working on structured, real-world problems and turning them
              into working software.
            </p>
            <p>
              Many of my mini projects combine{" "}
              <span className="text-sky-300">
                Python backends, simple user interfaces and foundational AI
                concepts
              </span>
              . I focus on writing code that is readable, tested on sample data
              and organised into clear steps.
            </p>
            <p>
              I am looking for opportunities where I can grow as a{" "}
              <span className="text-fuchsia-300">
                Python, backend or full-stack developer
              </span>{" "}
              while contributing to a team that values learning and clean
              engineering practices.
            </p>
          </div>

          {/* Bottom: three cards in one horizontal row */}
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            {/* Education */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
              <h3 className="text-fuchsia-300 text-sm font-semibold mb-2">
                Education
              </h3>
              <ul className="space-y-1 text-slate-300 text-[13px]">
                <li>
                  <span className="text-slate-400">Degree:</span> B.Tech
                  Artificial Intelligence and Data Science
                </li>
                <li>
                  <span className="text-slate-400">College:</span> Francis
                  Xavier Engineering College
                </li>
                <li>
                  <span className="text-slate-400">
                    CGPA (up to Sem 6):
                  </span>{" "}
                  <span className="text-sky-300 font-medium">8.46 / 10</span>
                </li>
              </ul>
            </div>

            {/* Internship */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
              <h3 className="text-emerald-300 text-sm font-semibold mb-2">
                Internship
              </h3>
              <p className="text-slate-300 text-[13px]">
                Completed a 4-week internship at Izeon Innovative Pvt. Ltd.,
                working on a voice calculator using socket programming with
                Python and Java, focusing on client–server communication and
                clean backend logic.
              </p>
            </div>

            {/* Current focus */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
              <h3 className="text-sky-300 text-sm font-semibold mb-2">
                Current focus
              </h3>
              <ul className="list-disc list-inside text-slate-300 space-y-1 text-[13px]">
                <li>Strengthening Python and backend fundamentals</li>
                <li>Practising REST API design and database basics</li>
                <li>Building small, end-to-end applications</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </Section>


      {/* SKILLS */}
      <Section id="skills" title="Skills" eyebrow="STACK">
        {/* Logo row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-5 mb-6"
        >
          {skillLogos.map((skill) => (
            <motion.div
              key={skill.label}
              whileHover={{ y: -3, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 230, damping: 16 }}
              className="flex flex-col items-center gap-1 w-24"
            >
              <div className="h-12 w-12 rounded-2xl bg-slate-900/80 border border-slate-700/80 flex items-center justify-center overflow-hidden">
                <img
                  src={skill.src}
                  alt={skill.label}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <span className="text-[11px] text-slate-200 text-center">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill boxes */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-5 text-sm"
        >
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
            <h3 className="font-semibold mb-2 text-sky-300 text-sm">
              Python &amp; Backend Development
            </h3>
            <ul className="space-y-1 text-slate-200 text-[13px]">
              <li>Core Python & scripting</li>
              <li>Socket programming (Java + Python)</li>
              <li>Node.js (beginner)</li>
              <li>MongoDB (beginner)</li>
              <li>REST API basics (FastAPI / Django – learning)</li>
              <li>SQL fundamentals (queries, joins)</li>
              <li>Data handling with Pandas / NumPy</li>
            </ul>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
            <h3 className="font-semibold mb-2 text-violet-300 text-sm">
              Frontend &amp; Tools
            </h3>
            <ul className="space-y-1 text-slate-200 text-[13px]">
              <li>React (this portfolio)</li>
              <li>HTML, CSS, JavaScript</li>
              <li>Tailwind CSS</li>
              <li>Streamlit for quick tools</li>
              <li>VS Code</li>
            </ul>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
            <h3 className="font-semibold mb-2 text-fuchsia-300 text-sm">
              AI &amp; Data Foundation
            </h3>
            <ul className="space-y-1 text-slate-200 text-[13px]">
              <li>CNN (Convolutional Neural Networks)</li>
              <li>Naive Bayes</li>
              <li>Sequence-to-Sequence models</li>
              <li>Basic image classification</li>
              <li>TensorFlow / Keras in mini projects</li>
            </ul>
          </div>
        </motion.div>
      </Section>

      {/* CERTIFICATIONS – AUTO SLIDE */}
      <Section
        id="certifications"
        title="Certifications"
        eyebrow="ACHIEVEMENTS"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-full max-w-md mx-auto"
        >
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/70 p-2">
            <Swiper
              direction={"vertical"}
              slidesPerView={1}
              spaceBetween={40}
              mousewheel={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Mousewheel]}
              className="h-[420px] rounded-xl"
            >
              {certificates.map((src, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center p-4"
                >
                  <img
                    src={src}
                    className="w-full h-full object-contain rounded-lg"
                    alt={`certificate-${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <p className="text-center text-slate-400 text-xs mt-2">
            Swipe up or wait for auto-slide
          </p>
        </motion.div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects" eyebrow="WORK">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 text-sm"
        >
          {projects.map((proj) => (
            <motion.div
              key={proj.title}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex flex-col cursor-pointer"
              onClick={() => setSelectedProject(proj)}
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

      {/* MOBILE PROJECT POPUP */}
      {selectedProject && (
        <div className="fixed inset-0 z-30 flex items-end md:hidden bg-black/50">
          <div className="bg-slate-950 w-full rounded-t-3xl border-t border-slate-800 p-4 max-h-[60vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-slate-100">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs text-slate-400 border border-slate-700 rounded-full px-2 py-1"
              >
                Close
              </button>
            </div>
            <p className="text-[13px] text-slate-300 mb-2">
              {selectedProject.desc}
            </p>
            <p className="text-[11px] text-sky-300">{selectedProject.tech}</p>
          </div>
        </div>
      )}

      {/* CONNECT */}
      <Section id="contact" title="Connect" eyebrow="CONTACT">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 text-sm text-slate-300"
        >
          <div className="space-y-3">
            <p>
              If you are looking for a motivated fresher who is serious about
              learning and comfortable taking responsibility for small modules,
              I would be glad to connect.
            </p>
            <p>
              I am especially interested in Python, backend or full-stack roles
              where I can contribute to real projects and continue improving my
              technical and problem-solving skills.
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
              <p>
                <span className="text-slate-400">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/kaviya-s-29259133a"
                  target="_blank"
                  className="text-sky-300"
                  rel="noreferrer"
                >
                  linkedin.com/in/kaviya-s-29259133a
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-3 flex flex-col">
            <button
              type="button"
              onClick={handleEmailGmail}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-fuchsia-500 hover:from-sky-400 hover:to-fuchsia-400 text-sm font-medium text-slate-950 shadow-md shadow-sky-500/30"
            >
              📩 Email Me (Gmail)
            </button>

            <button
              type="button"
              onClick={handleLinkedIn}
              className="px-4 py-2 rounded-xl border border-sky-400/70 text-sm font-medium text-sky-200 hover:bg-sky-500/10"
            >
              🔗 View LinkedIn Profile
            </button>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-sm font-medium text-slate-950 shadow-md shadow-emerald-500/40"
            >
              💬 WhatsApp Me
            </button>
          </div>
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
