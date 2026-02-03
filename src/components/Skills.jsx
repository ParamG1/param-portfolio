import { motion } from 'framer-motion';

const skills = {
  "Languages": ["Python", "Java", "C++", "C", "JavaScript", "C# (Unity)"],
  "Backend & DB": ["Node.js", "Express.js", "MySQL", "PostgreSQL", "Data Structures & Algorithms"],
  "AI & ML": ["Generative AI", "LLMs", "RAG", "NER Models", "Machine Learning", "Deep Learning"],
  "Frontend & Web": ["React", "HTML5", "CSS3", "Bootstrap", "jQuery"],
  "Cloud & Tools": ["Oracle Cloud (OCI Certified)", "Git", "Unity", "CI/CD Pipelines"]
};

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-16 text-white border-l-4 border-[#0ea5e9] pl-4">Technical Arsenal</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={category} 
              className="p-8 bg-[#0a0a0a] border border-slate-800 rounded-2xl hover:bg-[#111] transition-all"
            >
              <h4 className="text-[#0ea5e9] font-mono text-[10px] uppercase tracking-[0.2em] mb-6">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map(item => (
                  <span key={item} className="text-xs text-slate-400 bg-slate-900/50 px-3 py-1.5 rounded-full border border-slate-800">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}