import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';

export default function App() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-[#0ea5e9] scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 backdrop-blur-md border-b border-white/5">
        <span className="font-black tracking-tighter text-xl">PARAM.G</span>
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <a href="#experience" className="hover:text-[#0ea5e9] transition-colors">Experience</a>
          <a href="#skills" className="hover:text-[#0ea5e9] transition-colors">Skills</a>
          <a href="#projects" className="hover:text-[#0ea5e9] transition-colors">Projects</a>
        </div>
        <div className="flex gap-4">
          <a href="mailto:paramgusain@gmail.com" className="text-slate-400 hover:text-white transition-colors text-xs font-mono">Gmail</a>
          <a href="https://www.linkedin.com/in/param-gusain-ab83b3284/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0ea5e9] transition-colors text-xs font-mono">LinkedIn</a>
        </div>
      </nav>

      <div id="hero"><Hero /></div>
      <div id="experience"><Experience /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>

      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-slate-500 text-[10px] tracking-[0.3em] uppercase">© 2026 Param Gusain</p>
      </footer>
    </main>
  );
}