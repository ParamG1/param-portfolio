import { motion } from 'framer-motion';

export default function Experience() {
  const roles = [
    {
      title: "Research Intern (PRISM)",
      org: "Samsung R&D Institute India",
      date: "July 2025 – Present",
      points: [
        "Engineering high-performance pipelines for multilingual datasets (1M+ tokens) to optimize NER models.",
        "Collaborating in a 4-member research team applying engineering best practices in R&D."
      ]
    },
    {
      title: "Student Placement Coordinator",
      org: "Vellore Institute of Technology",
      date: "May 2025 – Present",
      points: [
        "Coordinated hybrid placement drives for 500+ students, bridging recruiter needs with candidate preparedness.",
        "Strengthened communication and cross-functional collaboration in high-pressure environments."
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-16 border-l-4 border-[#0ea5e9] pl-4">Professional Path</h3>
        {roles.map((role, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            key={i} className="mb-16 relative pl-10 border-l border-slate-800"
          >
            <div className="absolute w-4 h-4 bg-[#0ea5e9] rounded-full -left-[8.5px] top-1 shadow-[0_0_15px_rgba(14,165,233,0.5)]" />
            <h4 className="text-2xl font-bold">{role.title}</h4>
            <p className="text-[#0ea5e9] font-mono text-sm mt-1">{role.org} | {role.date}</p>
            <ul className="mt-6 text-slate-400 text-sm space-y-3 list-disc ml-4">
              {role.points.map((p, j) => <li key={j}>{p}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}