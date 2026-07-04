import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, FolderGit2, Award, GraduationCap, Calendar, ArrowRight, Download, Mail } from 'lucide-react';
import resumePdf from '../assets/Resume1.pdf';

const stats = [
  { label: 'Internships', value: '3+', icon: Briefcase, color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50' },
  { label: 'ML Projects', value: '4+', icon: FolderGit2, color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50' },
  { label: 'Certifications', value: '10+', icon: Award, color: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50' },
  { label: 'CGPA', value: '8.5', icon: GraduationCap, color: 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50' },
  { label: 'Graduation', value: '2027', icon: Calendar, color: 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/50' },
];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:py-32 flex flex-col justify-center min-h-[90vh]">
      {/* Background Decorative Glow Circles */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/20 dark:bg-indigo-500/10 glow-circle pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 translate-x-1/2 w-96 h-96 bg-emerald-500/20 dark:bg-emerald-500/10 glow-circle pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
              Available for Internships
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
            >
              Turning Data Into{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-500 dark:from-indigo-400 dark:via-purple-400 dark:to-emerald-400 bg-clip-text text-transparent">
                Actionable Insights
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-slate-600 dark:text-slate-350 max-w-xl leading-relaxed"
            >
              I am <span className="font-semibold text-slate-800 dark:text-white">Sanjay Thomas</span>, a B.Tech Information Technology student passionate about Data Science, Machine Learning, Data Analytics, Business Intelligence, and AI.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                View Projects
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800/80 font-semibold hover:-translate-y-0.5 transition-all duration-200 text-slate-700 dark:text-slate-300"
              >
                Contact Me
                <Mail size={16} />
              </a>
              <a
                href={resumePdf}
                download="Sanjay_Thomas_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-600/20 font-semibold hover:-translate-y-0.5 transition-all duration-200"
              >
                Download Resume
                <Download size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* Interactive Hero Tech Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Graphic animation backing */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-emerald-500/10 rounded-full animate-pulse-slow blur-xl" />
              
              {/* Floating Data Network SVG */}
              <svg viewBox="0 0 400 400" className="w-full h-full text-indigo-500 dark:text-indigo-400 relative z-10 select-none">
                <defs>
                  <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                  </linearGradient>
                  <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                  </radialGradient>
                </defs>
                
                {/* Connecting Lines */}
                <g className="stroke-[1.5]" stroke="url(#gradient-line)">
                  <line x1="200" y1="200" x2="80" y2="120" className="animate-pulse" />
                  <line x1="200" y1="200" x2="320" y2="120" />
                  <line x1="200" y1="200" x2="140" y2="280" />
                  <line x1="200" y1="200" x2="260" y2="280" />
                  <line x1="80" y1="120" x2="320" y2="120" strokeDasharray="5,5" />
                  <line x1="140" y1="280" x2="260" y2="280" strokeDasharray="5,5" />
                  <line x1="80" y1="120" x2="140" y2="280" />
                  <line x1="320" y1="120" x2="260" y2="280" />
                </g>

                {/* Nodes with custom bounce animation */}
                <g className="cursor-pointer">
                  {/* Center Node */}
                  <circle cx="200" cy="200" r="22" fill="#0f172a" stroke="#6366f1" strokeWidth="3" />
                  <circle cx="200" cy="200" r="10" fill="#6366f1" />
                  <text x="200" y="206" textAnchor="middle" fontSize="10" fill="#ffffff" fontWeight="bold">ML</text>
                  
                  {/* Node 1 */}
                  <g className="animate-float" style={{ animationDelay: '0s' }}>
                    <circle cx="80" cy="120" r="18" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
                    <circle cx="80" cy="120" r="6" fill="#10b981" />
                    <text x="80" y="88" textAnchor="middle" fontSize="11" fill="currentColor" fontWeight="600" className="fill-slate-700 dark:fill-slate-350">Data</text>
                  </g>
                  
                  {/* Node 2 */}
                  <g className="animate-float" style={{ animationDelay: '1.5s' }}>
                    <circle cx="320" cy="120" r="18" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />
                    <circle cx="320" cy="120" r="6" fill="#a855f7" />
                    <text x="320" y="88" textAnchor="middle" fontSize="11" fill="currentColor" fontWeight="600" className="fill-slate-700 dark:fill-slate-350">AI</text>
                  </g>

                  {/* Node 3 */}
                  <g className="animate-float" style={{ animationDelay: '3s' }}>
                    <circle cx="140" cy="280" r="18" fill="#0f172a" stroke="#ec4899" strokeWidth="2" />
                    <circle cx="140" cy="280" r="6" fill="#ec4899" />
                    <text x="140" y="318" textAnchor="middle" fontSize="11" fill="currentColor" fontWeight="600" className="fill-slate-700 dark:fill-slate-350">Stats</text>
                  </g>

                  {/* Node 4 */}
                  <g className="animate-float" style={{ animationDelay: '4.5s' }}>
                    <circle cx="260" cy="280" r="18" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
                    <circle cx="260" cy="280" r="6" fill="#3b82f6" />
                    <text x="260" y="318" textAnchor="middle" fontSize="11" fill="currentColor" fontWeight="600" className="fill-slate-700 dark:fill-slate-350">BI</text>
                  </g>
                </g>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-6 border border-slate-200/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-900/30 rounded-2xl p-6 glass dark:glass-dark"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center justify-center text-center p-4 rounded-xl hover:bg-white/40 dark:hover:bg-slate-800/40 transition-colors duration-200">
                <div className={`p-3 rounded-xl mb-3 ${stat.color} transition-all duration-300 hover:scale-110`}>
                  <Icon size={20} />
                </div>
                <span className="text-2xl font-bold text-slate-800 dark:text-white">{stat.value}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-semibold">{stat.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
