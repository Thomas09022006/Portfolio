import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckSquare } from 'lucide-react';

const experiences = [
  {
    role: 'Data Science Intern',
    company: 'CodeAlpha',
    duration: 'Feb 2026 – May 2026',
    points: [
      'Built ML models using Python and Scikit-Learn',
      'Executed Feature Engineering pipelines to improve predictive capability',
      'Conducted Predictive Analytics for real-world modeling scenarios',
      'Created Data Visualization plots to present model insights',
      'Analyzed Model Evaluation metrics (R², RMSE, Accuracy) for final selections',
    ],
    tech: ['Python', 'Scikit-Learn', 'Feature Engineering', 'Predictive Analytics', 'Data Viz'],
  },
  {
    role: 'Data Analysis Intern',
    company: 'Cognifyz Technologies',
    duration: 'Feb 2026 – Mar 2026',
    points: [
      'Conducted Exploratory Data Analysis (EDA) on structured datasets',
      'Cleaned raw datasets, handling missing values and outlier detection',
      'Drafted comprehensive performance and research reports',
      'Created clean visual dashboards representing business metrics',
    ],
    tech: ['Data Analysis', 'Data Cleaning', 'Reporting', 'Data Viz', 'Python'],
  },
  {
    role: 'Data Analytics Intern',
    company: 'Cloud Institution',
    duration: 'Jun 2025 – Jul 2025',
    points: [
      'Compiled structured Analytics Reporting summaries for management review',
      'Conducted complex dataset analysis to determine user retention trends',
      'Extracted critical Business Insights from transactional data tables',
    ],
    tech: ['Analytics Reporting', 'Dataset Analysis', 'Business Insights', 'Excel'],
  },
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } },
  };

  return (
    <section id="experience" className="py-20 relative bg-white/30 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 dark:text-slate-455 mt-4 max-w-lg mx-auto">
            Practical application of data science and machine learning concepts in corporate environments.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-emerald-500 transform -translate-x-[1px] md:-translate-x-1/2" />

          {/* Experience Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="flex flex-col md:flex-row items-stretch md:justify-between relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-5 h-5 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-indigo-500 transform -translate-x-[9px] md:-translate-x-2.5 z-10 shadow-lg shadow-indigo-500/20" />

                  {/* Left Side spacer/content */}
                  <div className={`w-full md:w-[46%] pl-12 md:pl-0 ${isEven ? 'md:text-right md:order-1' : 'md:order-2'}`}>
                    {isEven && (
                      <motion.div variants={cardVariants} className="bg-white dark:bg-slate-900/40 p-6 md:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 glass dark:glass-dark shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="flex flex-col md:items-end mb-4">
                          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-full flex items-center gap-1.5 w-fit">
                            <Calendar size={12} />
                            {exp.duration}
                          </span>
                          <h3 className="text-xl font-extrabold text-slate-850 dark:text-white mt-3">{exp.role}</h3>
                          <span className="text-sm font-semibold text-slate-500 dark:text-indigo-300 mt-1">{exp.company}</span>
                        </div>

                        <ul className="text-left space-y-2.5 mb-6 md:pl-4">
                          {exp.points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2 text-sm text-slate-650 dark:text-slate-300">
                              <CheckSquare className="text-indigo-500 shrink-0 mt-0.5" size={15} />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap md:justify-end gap-1.5">
                          {exp.tech.map((t, tIdx) => (
                            <span key={tIdx} className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Side spacer/content */}
                  <div className={`w-full md:w-[46%] pl-12 md:pl-0 ${isEven ? 'md:order-2' : 'md:order-1 text-left'}`}>
                    {!isEven && (
                      <motion.div variants={cardVariants} className="bg-white dark:bg-slate-900/40 p-6 md:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 glass dark:glass-dark shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="flex flex-col mb-4">
                          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full flex items-center gap-1.5 w-fit">
                            <Calendar size={12} />
                            {exp.duration}
                          </span>
                          <h3 className="text-xl font-extrabold text-slate-850 dark:text-white mt-3">{exp.role}</h3>
                          <span className="text-sm font-semibold text-slate-500 dark:text-indigo-300 mt-1">{exp.company}</span>
                        </div>

                        <ul className="space-y-2.5 mb-6">
                          {exp.points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2 text-sm text-slate-650 dark:text-slate-300">
                              <CheckSquare className="text-emerald-500 shrink-0 mt-0.5" size={15} />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-1.5">
                          {exp.tech.map((t, tIdx) => (
                            <span key={tIdx} className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-650 dark:text-slate-400">
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
