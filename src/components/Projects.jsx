import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Filter } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Car Price Prediction',
    category: 'Machine Learning',
    description: 'Developed an end-to-end Machine Learning pipeline utilizing Random Forest Regression to predict resale values of automobiles based on key features.',
    points: [
      'Built with Random Forest Regression achieving R² score > 0.90',
      'Engineered custom features based on car age and mileage-to-year ratios',
      'Conducted Pearson Correlation Analysis to isolate high-impact variables',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Seaborn'],
    image: '/src/assets/car_price.png',
    github: 'https://github.com/Thomas09022006/CodeAlpha_CarPricePrediction',
    demo: '#playground', // Points to our local model playground!
  },
  {
    id: 2,
    title: 'House Price Prediction',
    category: 'Machine Learning',
    description: 'A comprehensive housing market evaluation pipeline. Composed of multiple regression architectures to predict real estate valuations.',
    points: [
      'Implemented and compared Linear Regression, Decision Trees, and XGBoost',
      'Performed deep Exploratory Data Analysis (EDA) on geographic & volumetric factors',
      'Evaluated predictions using RMSE, MAE, and R² metrics',
    ],
    tech: ['Python', 'XGBoost', 'Scikit-Learn', 'Pandas'],
    image: '/src/assets/house_price.png',
    github: 'https://github.com/Thomas09022006', // General Github since specific was not listed
    demo: '#playground',
  },
  {
    id: 3,
    title: 'Expense Sharing System',
    category: 'Data Analytics',
    description: 'An advanced spending manager backend algorithm that optimizes multi-party debt settlements and renders personal expense analytics dashboards.',
    points: [
      'Implemented a greedy settlement algorithm reducing transfer nodes to a minimum',
      'Developed detailed personal spending analytics and outlier alerting',
      'Visualized expense category trends using customized plotting utilities',
    ],
    tech: ['Python', 'Pandas', 'NumPy'],
    image: '/src/assets/expense_manager.png',
    github: 'https://github.com/Thomas09022006/G-Pay-Expense-Manager',
    demo: '#playground',
  },
  {
    id: 4,
    title: 'Iris Flower Classification',
    category: 'Machine Learning',
    description: 'A classic pattern recognition model trained on floral morphometrics to accurately classify Iris species (Setosa, Versicolor, Virginica).',
    points: [
      'Built using Logistic Regression, achieving 95-100% test accuracy',
      'Processed features through Standard Scaling and Min-Max normalization',
      'Plotted decision boundary projections in a 2D feature subspace',
    ],
    tech: ['Python', 'Scikit-Learn', 'Matplotlib'],
    image: '/src/assets/iris_flower.png',
    github: 'https://github.com/Thomas09022006',
    demo: '#playground',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 relative bg-slate-50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 dark:text-slate-450 mt-4 max-w-lg mx-auto">
            Practical models, pipelines, and algorithms demonstrating end-to-end data processing capabilities.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex justify-center items-center gap-3 mb-12">
          <Filter size={16} className="text-slate-400" />
          <div className="flex bg-white dark:bg-slate-900/60 p-1.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50 glass dark:glass-dark shadow-sm">
            {['All', 'Machine Learning', 'Data Analytics'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                  filter === cat
                    ? 'bg-indigo-650 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group bg-white dark:bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-200/50 dark:border-slate-800/50 glass dark:glass-dark flex flex-col hover:shadow-xl dark:hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Project Image Header */}
                <div className="h-52 w-full overflow-hidden relative bg-slate-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"><rect width="800" height="400" fill="%231e1b4b"/><text x="400" y="200" fill="%23818cf8" font-size="28" text-anchor="middle" font-family="sans-serif">Data Science Project</text></svg>';
                    }}
                  />
                  <span className="absolute top-4 left-4 z-20 px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full bg-indigo-500 text-white">
                    {project.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-850 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-650 dark:text-slate-350 mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features list */}
                    <ul className="mb-6 space-y-2">
                      {project.points.map((pt, pIdx) => (
                        <li key={pIdx} className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-400 border border-slate-200/30 dark:border-slate-800/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors duration-250"
                      >
                        <Github size={15} />
                        GitHub
                      </a>
                      <a
                        href={project.demo}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-all duration-200 shadow-md shadow-indigo-600/10"
                      >
                        <ExternalLink size={15} />
                        Interactive Demo
                      </a>
                    </div>
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
