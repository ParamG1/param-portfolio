import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center px-6 bg-black overflow-hidden">
      {/* Visual Bit: Animated Gradient Sphere */}
      <div className="absolute w-[500px] h-[500px] bg-[#0ea5e9]/5 rounded-full blur-[120px] animate-pulse" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 text-center"
      >
        <h2 className="text-[#0ea5e9] font-mono text-xs tracking-[0.4em] mb-6 uppercase">
          {"< Engineering Quality & Automation />"}
        </h2>
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
          PARAM <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">GUSAIN</span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-lg font-light leading-relaxed">
          Samsung Gen AI Hackathon Winner & CSE Student at VIT (9.20 CGPA).<br></br> 
          Optimizing NER models and building high-performance automation frameworks.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <a href="#projects" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-[#0ea5e9] hover:text-white transition-all">View Work</a>
          <a href="https://www.linkedin.com/in/param-gusain-ab83b3284/" target="_blank" rel="noreferrer" className="px-8 py-3 border border-slate-800 rounded-full hover:bg-white/5 transition-all">LinkedIn</a>
        </div>
      </motion.div>
    </section>
  );
}