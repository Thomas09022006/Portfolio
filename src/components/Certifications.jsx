import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, Library } from 'lucide-react';

const certifications = [
  { title: 'Python 101 for Data Science', provider: 'IBM', category: 'IBM' },
  { title: 'Python for Data Science', provider: 'IBM', category: 'IBM' },
  { title: 'Data Analysis with Python', provider: 'IBM', category: 'IBM' },
  { title: 'Become a Python Data Analyst', provider: 'Infosys Springboard', category: 'Others' },
  { title: 'Power BI', provider: 'Microsoft + Simplilearn', category: 'Others' },
  { title: 'Data Analytics with Python', provider: 'freeCodeCamp', category: 'Others' },
  { title: 'SQL Advanced', provider: 'HackerRank', category: 'Others' },
  { title: 'Data Visualization Job Simulation', provider: 'Tata Forage', category: 'Forage' },
  { title: 'Markets Quantitative Analysis', provider: 'Citi Forage', category: 'Forage' },
  { title: 'Generative AI Internship', provider: 'Adroit Technologies', category: 'Others' },
  { title: 'Data Science Internship', provider: 'CodeAlpha', category: 'Others' },
  { title: 'Data Analysis Internship', provider: 'Cognifyz', category: 'Others' },
];

export default function Certifications() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'IBM', 'Forage', 'Others'];

  const filteredCerts = filter === 'All'
    ? certifications
    : certifications.filter(c => c.category === filter);

  return (
    <section id="certifications" className="py-20 relative bg-white/30 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 dark:text-slate-450 mt-4 max-w-lg mx-auto">
            Professional validation of skills across Python development, analytics, databases, and simulations.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 border ${
                filter === cat
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-600/10'
                  : 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80 text-slate-650 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat === 'Others' ? 'Specialized & Others' : cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                key={idx}
                className="bg-white dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 glass dark:glass-dark flex items-start gap-4 hover:shadow-lg dark:hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-indigo-650 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 px-2 py-0.5 rounded uppercase">
                    {cert.provider}
                  </span>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-white mt-2 leading-snug">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-3.5 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                    <Library size={10} />
                    <span>Verified License</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
