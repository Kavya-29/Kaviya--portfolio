import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-lg w-full bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-2xl shadow-sky-500/20"
      >
        <p className="text-sm font-semibold tracking-wide text-sky-400 mb-3 uppercase">
          Kaviya • Portfolio Setup
        </p>

        <h1 className="text-3xl font-bold mb-3">
          React + Tailwind +{" "}
          <span className="text-sky-400">Framer Motion 💫</span>
        </h1>

        <p className="text-slate-300 text-sm mb-6">
          Animations are now enabled. Next we&apos;ll turn this into your real
          portfolio with sections like <span className="text-sky-300">Home</span>,{" "}
          <span className="text-sky-300">About</span>,{" "}
          <span className="text-sky-300">Skills</span>,{" "}
          <span className="text-sky-300">Projects</span>, and{" "}
          <span className="text-sky-300">Contact</span>.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="px-4 py-2 rounded-xl text-sm font-medium bg-sky-500 hover:bg-sky-400 transition"
        >
          🚀 Ready for the real portfolio
        </motion.button>
      </motion.div>
    </div>
  );
}

export default App;
