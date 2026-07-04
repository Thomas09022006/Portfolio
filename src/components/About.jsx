import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Brain, Languages, CheckCircle2 } from 'lucide-react';

const achievements = [
  'Completed 3 Industry Internships',
  'Built 4+ Data Science Projects',
  'Earned 10+ Certifications',
  'Developed High Accuracy ML Models',
  'Applied Data Science to Real Business Problems',
];

const interests = [
  'Data Science',
  'Machine Learning',
  'Artificial Intelligence',
  'Data Analytics',
  'Business Intelligence',
  'Predictive Modeling',
  'Open Source',
];

const languages = [
  { name: 'English', level: 'Professional Working Proficiency' },
  { name: 'Tamil', level: 'Native / Bilingual' },
];

export default function About() {
  const scrollReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-slate-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Biography & Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={scrollReveal}
            className="lg:col-span-7 space-y-8"
          >
            <div className="bg-white dark:bg-slate-800/40 p-6 sm:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 glass dark:glass-dark shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">My Journey</h3>
              <p className="text-slate-650 dark:text-slate-300 leading-relaxed">
                I am a B.Tech Information Technology student at CSI College of Engineering with strong interests in Data Science, Machine Learning, Data Analytics, Predictive Modeling, Business Intelligence, and AI.
              </p>
              <p className="text-slate-650 dark:text-slate-300 leading-relaxed mt-4">
                I have completed multiple internships and developed machine learning solutions involving data preprocessing, feature engineering, visualization, and predictive analytics. I enjoy analyzing complex datasets, identifying hidden patterns, and building algorithms that address real-world business challenges.
              </p>
            </div>

            {/* Education Card */}
            <div className="bg-white dark:bg-slate-800/40 p-6 sm:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 glass dark:glass-dark shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Education</h3>
              </div>
              <div className="relative pl-6 border-l border-slate-200 dark:border-slate-800 space-y-4">
                <div>
                  <div className="absolute w-3 h-3 rounded-full bg-indigo-500 left-[-6px] top-1.5" />
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-2.5 py-0.5 rounded-full">
                    2023 – 2027
                  </span>
                  <h4 className="text-lg font-bold text-slate-850 dark:text-white mt-2">CSI College of Engineering</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Bachelor of Technology (Information Technology)</p>
                  
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">CGPA:</span>
                    <span className="text-sm font-bold text-slate-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-md border border-emerald-500/10">8.5 / 10.0</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements, Interests, Languages */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={scrollReveal}
            className="lg:col-span-5 space-y-8"
          >
            {/* Achievements Card */}
            <div className="bg-white dark:bg-slate-800/40 p-6 sm:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 glass dark:glass-dark shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                  <Award size={22} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Achievements</h3>
              </div>
              <ul className="space-y-3.5">
                {achievements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-sm text-slate-650 dark:text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interests & Languages Cards in Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {/* Interests Card */}
              <div className="bg-white dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 glass dark:glass-dark shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400">
                    <Brain size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">Interests</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, idx) => (
                    <span key={idx} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/40 dark:border-slate-700/50">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages Card */}
              <div className="bg-white dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 glass dark:glass-dark shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400">
                    <Languages size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">Languages</h3>
                </div>
                <div className="space-y-3">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-slate-850 dark:text-white">{lang.name}</span>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-850 px-2 py-0.5 rounded">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
