import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Multilingual NER Optimization",
      tag: "Samsung PRISM",
      desc: "Developed a RoBERTa-base Token Classification model utilizing Byte-Level BPE and Dynamic Masking for robust entity extraction.",
      techFocus: "Implemented BIOES tagging to reduce 'run-on' entity errors and enhance boundary detection accuracy.",
      tech: ["Python", "RoBERTa", "Transformers", "BIOES"]
    },
    {
      title: "Climb the Corporate Ladder",
      tag: "Hackathon Winner",
      desc: "AI-Powered platform using Unity and LangGraph for real-time confidence scoring.",
      techFocus: "Implemented automated feedback loops for user response validation.",
      tech: ["Unity", "C#", "LangGraph", "Gen AI"]
    },
    {
      title: "Agricultural Support Platform",
      tag: "Full-Stack",
      desc: "Node.js prototype using soil and weather data to optimize crop profit analysis.",
      techFocus: "Unit testing for data processing logic and profit calculation accuracy.",
      tech: ["Node.js", "MySQL", "JavaScript"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-16 border-l-4 border-[#0ea5e9] pl-4">Selected Work</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={i} className="p-8 bg-[#0a0a0a] border border-slate-800 rounded-2xl hover:border-[#0ea5e9] transition-all group"
            >
              <span className="text-[10px] bg-[#0ea5e9]/10 text-[#0ea5e9] px-2 py-1 rounded font-bold uppercase">{p.tag}</span>
              <h4 className="text-xl font-bold mt-4 group-hover:text-[#0ea5e9] transition-colors">{p.title}</h4>
              <p className="text-slate-400 mt-3 mb-6 text-xs leading-relaxed">{p.desc}</p>
              <div className="bg-black p-3 rounded border border-slate-800 mb-6">
                <p className="text-[10px] text-[#0ea5e9] font-mono mb-1 uppercase tracking-tighter">SDE/T Focus:</p>
                <p className="text-[11px] text-slate-300 italic">"{p.techFocus}"</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tech.map(t => <span key={t} className="text-[10px] font-mono text-slate-600">#{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}