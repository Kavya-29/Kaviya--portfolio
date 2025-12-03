function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-slate-900/80 border border-slate-700 rounded-2xl p-8 shadow-xl shadow-sky-500/10">
        <p className="text-sm font-medium text-sky-400 mb-2">Portfolio Setup</p>
        <h1 className="text-2xl font-semibold mb-3">
          Tailwind + React is <span className="text-sky-400">working 🎉</span>
        </h1>
        <p className="text-slate-300 text-sm mb-6">
          Hi Kaviya! This screen means your Tailwind styles are active.
          Next we&apos;ll turn this into your real animated portfolio.
        </p>
        <button className="px-4 py-2 rounded-xl text-sm font-medium bg-sky-500 hover:bg-sky-400 transition">
          Cool, let&apos;s continue
        </button>
      </div>
    </div>
  );
}

export default App;
