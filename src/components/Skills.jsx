import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Terminal, Database, LineChart, Library, Cpu, Globe, ArrowRight } from 'lucide-react';

const skillCategories = [
  {
    id: 'programming',
    title: 'Programming',
    icon: Terminal,
    color: 'indigo',
    skills: ['Python', 'SQL', 'JavaScript'],
  },
  {
    id: 'datascience',
    title: 'Data Science & ML',
    icon: Cpu,
    color: 'emerald',
    skills: [
      'Machine Learning',
      'EDA',
      'Feature Engineering',
      'Data Preprocessing',
      'Data Cleaning',
      'Statistical Analysis',
      'Predictive Modeling',
      'Regression',
      'Classification',
    ],
  },
  {
    id: 'libraries',
    title: 'Libraries & Frameworks',
    icon: Library,
    color: 'purple',
    skills: ['Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Seaborn', 'XGBoost'],
  },
  {
    id: 'visualization',
    title: 'Visualization',
    icon: LineChart,
    color: 'cyan',
    skills: ['Power BI', 'Matplotlib', 'Seaborn'],
  },
  {
    id: 'database',
    title: 'Database',
    icon: Database,
    color: 'amber',
    skills: ['MySQL'],
  },
  {
    id: 'tools',
    title: 'Tools & Platform',
    icon: Terminal,
    color: 'pink',
    skills: ['Jupyter Notebook', 'Google Colab', 'VS Code', 'Git', 'GitHub'],
  },
  {
    id: 'webtech',
    title: 'Web Technologies',
    icon: Globe,
    color: 'blue',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Django', 'FastAPI'],
  },
];

// Data for Radar Chart (Data Science Domain Distribution)
const chartData = [
  { subject: 'Data Preprocessing', A: 92, fullMark: 100 },
  { subject: 'Machine Learning', A: 90, fullMark: 100 },
  { subject: 'Power BI / Dataviz', A: 85, fullMark: 100 },
  { subject: 'SQL / Databases', A: 80, fullMark: 100 },
  { subject: 'Web Apps / APIs', A: 75, fullMark: 100 },
  { subject: 'Stats & EDA', A: 88, fullMark: 100 },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 120 } },
  };

  const colorClasses = {
    indigo: 'text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/20',
    emerald: 'text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20',
    purple: 'text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/20',
    cyan: 'text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800 bg-cyan-50/50 dark:bg-cyan-950/20',
    amber: 'text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20',
    pink: 'text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800 bg-pink-50/50 dark:bg-pink-950/20',
    blue: 'text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20',
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-sans">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-505 dark:text-slate-400 mt-4 max-w-lg mx-auto">
            A comprehensive overview of tools, languages, and frameworks in my professional toolbox.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Skills Grid */}
          <div className="lg:col-span-7 space-y-8">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeCategory === 'all'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/10'
                    : 'bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-450 border border-slate-200/60 dark:border-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                All Skills
              </button>
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/10'
                      : 'bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-450 border border-slate-200/60 dark:border-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Badges Container */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="space-y-6"
            >
              {skillCategories
                .filter((cat) => activeCategory === 'all' || activeCategory === cat.id)
                .map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <div
                      key={category.id}
                      className="bg-white dark:bg-slate-900/40 p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 glass dark:glass-dark shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center gap-2.5 mb-4 text-slate-800 dark:text-white">
                        <div className={`p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400`}>
                          <IconComponent size={18} />
                        </div>
                        <h4 className="font-bold text-sm uppercase tracking-wider">{category.title}</h4>
                      </div>

                      <div className="flex flex-wrap gap-2.5">
                        {category.skills.map((skill, index) => (
                          <motion.span
                            key={index}
                            variants={badgeVariants}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-150 cursor-default flex items-center gap-1 ${
                              colorClasses[category.color] || colorClasses.indigo
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </motion.div>
          </div>

          {/* Recharts Skill distribution Radar Chart */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center">
            <div className="w-full max-w-sm sm:max-w-md h-[340px] md:h-[400px] bg-white dark:bg-slate-900/30 p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 glass dark:glass-dark shadow-lg">
              <h3 className="text-center font-bold text-sm text-slate-700 dark:text-slate-350 uppercase tracking-widest mb-6">
                Data Science Domain Matrix
              </h3>
              
              <ResponsiveContainer width="100%" height="80%">
                <RadarChart cx="50%" cy="50%" radius="70%" data={chartData}>
                  <PolarGrid stroke="rgba(148, 163, 184, 0.2)" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: 'currentColor', fontSize: 10, fontWeight: 550 }}
                    className="text-slate-600 dark:text-slate-400"
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    tick={{ fill: 'currentColor', fontSize: 9 }}
                    className="text-slate-500/60 dark:text-slate-500"
                  />
                  <Radar
                    name="Sanjay"
                    dataKey="A"
                    stroke="#6366f1"
                    fill="#6366f1"
                    fillOpacity={0.35}
                  />
                </RadarChart>
              </ResponsiveContainer>
              <div className="text-center mt-2">
                <span className="text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-400 flex items-center justify-center gap-1">
                  Proficiency Index based on Internship & Projects
                  <ArrowRight size={10} />
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
